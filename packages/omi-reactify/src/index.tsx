import React, { Component, createRef, createElement, forwardRef } from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
// import {convertReactToOmi} from "./react";

// 检测 React 版本
const isReact18Plus = () => {
  return typeof createRoot !== 'undefined';
};

// 创建渲染函数
const createRenderer = (container: HTMLElement) => {
  if (isReact18Plus()) {
    const root = createRoot(container);
    return {
      render: (element: React.ReactElement) => {
        root.render(element);
      },
      unmount: () => {
        root.unmount();
      }
    };
  } else {
    return {
      render: (element: React.ReactElement) => {
        ReactDOM.render(element, container);
      },
      unmount: () => {
        ReactDOM.unmountComponentAtNode(container);
      }
    };
  }
};

const isFunctionComponentWithHooks = (component: any): boolean => {
  // 1. 先检查是否是函数
  if (typeof component !== 'function') return false;

  // 2. 检查函数体是否包含 Hook 关键字
  const componentCode = component.toString();
  const hookKeywords = [
    'useState',
    'useEffect',
    'useRef',
    'useContext',
    'useMemo',
    'useCallback',
    'useReducer'
  ];

  return hookKeywords.some(hook => componentCode.includes(hook));
}

const isClassComponent = (component: any): boolean => {
  const isFC = typeof component === 'function';
  return !!(isFC && component.prototype?.render)
}

type AnyProps = {
  [key: string]: any;
}

const hyphenateRE = /\B([A-Z])/g

export function hyphenate(str: string): string {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
}

const styleObjectToString = (style: CSSRule) => {
  const unitlessKeys = new Set([
    'animationIterationCount', 'boxFlex', 'boxFlexGroup', 'boxOrdinalGroup',
    'columnCount', 'fillOpacity', 'flex', 'flexGrow', 'flexShrink', 'fontWeight',
    'lineClamp', 'lineHeight', 'opacity', 'order', 'orphans', 'tabSize',
    'widows', 'zIndex', 'zoom'
  ]);

  return Object.entries(style)
    .filter(([_, value]) => value != null && value !== '') // 过滤无效值
    .map(([key, value]) => {
      // 转换驼峰式为连字符格式
      const cssKey = key.replace(/[A-Z]/g, m => `-${m.toLowerCase()}`);

      // 处理数值类型值
      let cssValue = value;
      if (typeof value === 'number' && value !== 0 && !unitlessKeys.has(key)) {
        cssValue = `${value}px`;
      }

      return `${cssKey}:${cssValue};`;
    })
    .join(' ');
}

const reactify = <T extends AnyProps = AnyProps>(WC: string): React.ForwardRefExoticComponent<Omit<T, "ref"> & React.RefAttributes<HTMLElement | undefined>> => {
  class Reactify extends Component<AnyProps> {
    eventHandlers: [string, EventListener][];
    renderUnmountHandlers: Map<string, (params?: any) => void>;

    ref: React.RefObject<HTMLElement>;

    constructor(props: any) {
      super(props);
      this.eventHandlers = [];
      this.renderUnmountHandlers = new Map();
      const { innerRef } = props;
      this.ref = innerRef || createRef();
    }

    setEvent(event: string, val: EventListener) {
      this.eventHandlers.push([event, val]);
      this.ref.current?.addEventListener(event, val);
    }

    update() {
      this.clearEventHandlers();
      if (!this.ref.current) return;
      Object.entries(this.props).forEach(([prop, val]) => {
        if (['innerRef', 'children'].includes(prop)) return;
        // event handler
        if (typeof val === "function") {
          if (prop.match(/^on[A-Za-z]/)) {
            const eventName = prop.slice(2);
            const omiEventName = eventName[0].toLowerCase() + eventName.slice(1);
            this.setEvent(omiEventName, val);
          } else if(prop.match(/^render[A-Za-z]/)) {
            // Handle React function component
            const ReactComponent = val;
            const renderComponent = (params?: any) => {
              // 重新render先unmount old
              if(this.renderUnmountHandlers.get(prop)){
                this.renderUnmountHandlers.get(prop)?.();
              }

              console.log('isFunctionComponentWithHooks(val)', isFunctionComponentWithHooks(val) );
              console.log('isClassComponent(val)', isClassComponent(val) );
              
              let component = (isFunctionComponentWithHooks(val) || isClassComponent(val)) 
                ? <ReactComponent {...params}></ReactComponent> : ReactComponent(params);

              const container = document.createElement('div');
              const renderer = createRenderer(container);
              renderer.render(component);

              this.renderUnmountHandlers.set(prop, renderer.unmount);

              return container;
            };

            (this.ref.current as any)[prop] = renderComponent;
          }
          return;
        }
        // Complex object
        if (typeof val === "object") {
            if (val?.$$typeof?.toString().match(/react/)) {
            const container = document.createElement('div');
            const renderer = createRenderer(container);
            renderer.render(val);
            (this.ref.current as any)[prop] = container;
            console.log('到这里', (this.ref.current as any).update);
            (this.ref.current as any).update();
            return;
          }
          if (prop === 'style') {
            this.ref.current?.setAttribute('style', styleObjectToString(val))
            return;
          }
          (this.ref.current as any)[prop] = val;
          return
        }
        // camel case
        if (prop.match(hyphenateRE)) {
          this.ref.current?.setAttribute(hyphenate(prop), val);
          this.ref.current?.removeAttribute(prop);
          return
        }

        return;
      });
    }

    componentDidUpdate() {
      this.update();
    }

    componentDidMount() {
      this.update();
    }

    componentWillUnmount() {
      this.clearEventHandlers();
    }

    clearEventHandlers() {
      this.eventHandlers.forEach(([event, handler]) => {
        this.ref.current?.removeEventListener(event, handler);
      });
      this.eventHandlers = [];
    }

    render() {
      const { children, className, innerRef, ...rest } = this.props;

      return createElement(
        WC,
        { class: className, ...rest, ref: this.ref },
        children
      );
    }
  }

  return forwardRef((props, ref) => {
    return createElement(Reactify, { ...props, innerRef: ref });
  }) as React.ForwardRefExoticComponent<Omit<T, "ref"> & React.RefAttributes<HTMLElement | undefined>>;
};

export default reactify;
