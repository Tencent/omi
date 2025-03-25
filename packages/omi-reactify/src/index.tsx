import React, { Component, createRef, createElement, forwardRef } from "react";

type Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLElement>,
  HTMLElement
> & {
  [key: string]: any;
};

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

const reactify = (WC: any): React.ForwardRefExoticComponent<Omit<Props, "ref"> & React.RefAttributes<HTMLElement | undefined>> => {
  class Reactify extends Component<Props> {
    eventHandlers: [string, EventListener][];

    ref: React.RefObject<HTMLElement>;

    constructor(props: any) {
      super(props);
      this.eventHandlers = [];
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
        console.log('prop', prop, val)
        if (['innerRef', 'children'].includes(prop)) return;
        // event handler
        if (typeof val === "function") {
          if (prop.match(/^on[A-Za-z]/)) {
            const eventName = prop.slice(2);
            const omiEventName = eventName[0].toLowerCase() + eventName.slice(1);
            return this.setEvent(omiEventName, val);
          }
        }
        // Complex object
        if (typeof val === "object") {
          if (prop === 'style') {
            this.ref.current?.setAttribute('style', styleObjectToString(val))
          } else {
            (this.ref.current as any)[prop] = val;
          }
          return
        }
        // camel case
        if (prop.match(hyphenateRE)) {
          this.ref.current?.setAttribute(hyphenate(prop), val);
          this.ref.current?.removeAttribute(prop);
          return
        }

        return true;
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
  });
};

export default reactify;
