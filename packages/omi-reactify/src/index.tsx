import React, { Component, createRef, createElement, forwardRef } from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';

// 检测 React 版本
const isReact18Plus = () => typeof createRoot !== 'undefined';
const isReact19Plus = (): boolean => {
  const majorVersion = parseInt(React.version.split('.')[0], 10);
  return majorVersion >= 19;
};

// 增强版本的缓存管理
const rootCache = new WeakMap<
  HTMLElement,
  {
    root: ReturnType<typeof createRoot>;
    lastElement?: React.ReactElement;
  }
>();

const createRenderer = (container: HTMLElement) => {
  if (isReact18Plus()) {
    let cached = rootCache.get(container);
    if (!cached) {
      cached = { root: createRoot(container) };
      rootCache.set(container, cached);
    }

    return {
      render: (element: React.ReactElement) => {
        // 可选：避免相同元素的重复渲染
        if (cached.lastElement !== element) {
          cached.root.render(element);
          cached.lastElement = element;
        }
      },
      unmount: () => {
        cached.root.unmount();
        rootCache.delete(container);
      },
    };
  }

  // React 17的实现
  return {
    render: (element: React.ReactElement) => {
      ReactDOM.render(element, container);
    },
    unmount: () => {
      ReactDOM.unmountComponentAtNode(container);
    },
  };
};

// 检查是否是React元素
const isReactElement = (obj: any): obj is React.ReactElement =>
  obj && typeof obj === 'object' && obj.$$typeof && obj.$$typeof.toString().includes('react');

// 检查是否是有效的React节点
const isValidReactNode = (node: any): node is React.ReactNode =>
  node !== null &&
  node !== undefined &&
  (typeof node === 'string' ||
    typeof node === 'number' ||
    typeof node === 'boolean' ||
    isReactElement(node) ||
    Array.isArray(node));

type AnyProps = {
  [key: string]: any;
};

const hyphenateRE = /\B([A-Z])/g;

export function hyphenate(str: string): string {
  return str.replace(hyphenateRE, '-$1').toLowerCase();
}

const styleObjectToString = (style: any) => {
  if (!style || typeof style !== 'object') return '';

  const unitlessKeys = new Set([
    'animationIterationCount',
    'boxFlex',
    'boxFlexGroup',
    'boxOrdinalGroup',
    'columnCount',
    'fillOpacity',
    'flex',
    'flexGrow',
    'flexShrink',
    'fontWeight',
    'lineClamp',
    'lineHeight',
    'opacity',
    'order',
    'orphans',
    'tabSize',
    'widows',
    'zIndex',
    'zoom',
  ]);

  return Object.entries(style)
    .filter(([, value]) => value != null && value !== '') // 过滤无效值
    .map(([key, value]) => {
      // 转换驼峰式为连字符格式
      const cssKey = key.replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`);

      // 处理数值类型值
      let cssValue = value;
      if (typeof value === 'number' && value !== 0 && !unitlessKeys.has(key)) {
        cssValue = `${value}px`;
      }

      return `${cssKey}:${cssValue};`;
    })
    .join(' ');
};

/**
 * 动态slot配置白名单
 * 某些webc的slot是动态渲染的（即只有当light dom中存在对应的slot内容时，shadow dom才会渲染slot标签）。此时无法通过shadow dom检测到slot是否存在，需要通过配置白名单来强制启用
 */
const dynamicSlotConfig: Record<string, (slotName: string) => boolean> = {
  't-chatbot': (slotName) => slotName.startsWith('sender-'),
  't-chat-item': (slotName) => slotName === 'actionbar',
};

const reactify = <T extends AnyProps = AnyProps>(
  WC: string,
): React.ForwardRefExoticComponent<Omit<T, 'ref'> & React.RefAttributes<HTMLElement | undefined>> => {
  class Reactify extends Component<AnyProps> {
    eventHandlers: [string, EventListener][];

    slotRenderers: Map<string, () => void>;

    ref: React.RefObject<HTMLElement>;

    constructor(props: AnyProps) {
      super(props);
      this.eventHandlers = [];
      this.slotRenderers = new Map();
      const { innerRef } = props;
      this.ref = innerRef || createRef();
    }

    setEvent(event: string, val: EventListener) {
      this.eventHandlers.push([event, val]);
      this.ref.current?.addEventListener(event, val);
    }

    // 防止重复处理的标记
    private processingSlots = new Set<string>();

    // 处理slot相关的prop
    handleSlotProp(prop: string, val: any) {
      const webComponent = this.ref.current as any;
      if (!webComponent) return;

      // 防止重复处理同一个slot
      if (this.processingSlots.has(prop)) {
        return;
      }

      // 将React prop转换为slot，如innerHeader -> inner-header
      let slotName = prop;
      if (prop.endsWith('Slot')) {
        // 移除 'Slot' 后缀
        slotName = prop.slice(0, -4);
      }
      // 转换驼峰命名为连字符命名
      slotName = hyphenate(slotName);

      // 检查是否需要更新（避免相同内容的重复渲染）
      const currentRenderer = this.slotRenderers.get(slotName);
      if (currentRenderer && this.isSameReactElement(slotName, val)) {
        return; // 相同内容，跳过更新
      }

      // 标记正在处理
      this.processingSlots.add(prop);

      // 立即缓存新元素，防止重复调用
      if (isValidReactNode(val)) {
        this.lastRenderedElements.set(slotName, val);
      }

      // 如果val是函数，为WebComponent提供一个函数，该函数返回渲染后的DOM
      if (typeof val === 'function') {
        // 清理旧的渲染器
        if (currentRenderer) {
          this.cleanupSlotRenderer(slotName);
        }

        const renderSlot = (params?: any) => {
          const reactNode = val(params);
          return this.renderReactNodeToSlot(reactNode, slotName);
        };
        webComponent[prop] = renderSlot;
        // 函数类型处理完成后立即移除标记
        this.processingSlots.delete(prop);
      }
      // 如果val是ReactNode，直接渲染到slot
      else if (isValidReactNode(val)) {
        // 先设置属性，让组件知道这个prop有值
        webComponent[prop] = true;

        // 使用微任务延迟渲染，确保在当前渲染周期完成后执行
        Promise.resolve().then(() => {
          // 已有渲染器则直接更新，避免failed to execute removeChild
          if (currentRenderer) {
            this.updateSlotContent(slotName, val);
          } else if (!currentRenderer && dynamicSlotConfig[WC]?.(slotName)) {
            // 如果webc组件是动态生成slot容器的话，先将<div slot='xx'>appendChild到webc中
            this.renderReactNodeToSlot(val, slotName);

            // 强制更新一次，确保shadow dom生成对应的slot
            if (webComponent.update) {
              webComponent.update();
            }
          } else {
            if (webComponent.update) {
              webComponent.update();
            }
            this.renderReactNodeToSlot(val, slotName);
          }
          // 渲染完成后移除处理标记
          this.processingSlots.delete(prop);
        });
      }
    }

    // 清理slot渲染器的统一方法
    private cleanupSlotRenderer(slotName: string) {
      const renderer = this.slotRenderers.get(slotName);
      if (!renderer) return;

      // 立即清理DOM容器
      this.clearSlotContainers(slotName);

      // 总是异步清理React渲染器，避免竞态条件
      Promise.resolve().then(() => {
        Reactify.safeCleanupRenderer(renderer);
      });

      this.slotRenderers.delete(slotName);
    }

    private updateSlotContent(slotName: string, reactNode: React.ReactNode) {
      const webComponent = this.ref.current;
      if (!webComponent) return;

      // 查找现有的slot容器
      const existingContainer = webComponent.querySelector(`[slot="${slotName}"]`) as HTMLElement;

      if (existingContainer && isValidReactNode(reactNode)) {
        // 在现有容器中重新渲染webc的slot
        try {
          if (React.isValidElement(reactNode)) {
            const renderer = createRenderer(existingContainer);
            renderer.render(reactNode);
          } else if (typeof reactNode === 'string' || typeof reactNode === 'number') {
            existingContainer.textContent = String(reactNode);
          }
        } catch (error) {
          console.warn('[reactify] Error updating slot content:', error);
          // 如果更新失败，回退到清理重建
          this.cleanupSlotRenderer(slotName);
          this.renderReactNodeToSlot(reactNode, slotName);
        }
      } else {
        this.renderReactNodeToSlot(reactNode, slotName);
      }
    }

    // 安全清理渲染器
    private static safeCleanupRenderer(cleanup: () => void) {
      try {
        cleanup();
      } catch (error) {
        console.warn('Error cleaning up React renderer:', error);
      }
    }

    // 立即清理指定slot的所有容器
    private clearSlotContainers(slotName: string) {
      const webComponent = this.ref.current;
      if (!webComponent) return;

      try {
        // 查找并移除所有匹配的slot容器
        const containers = webComponent.querySelectorAll(`[slot="${slotName}"]`);
        containers.forEach((container: Element) => {
          // 确保容器仍然在dom树中且有父节点
          if (container.parentNode && container.parentNode.contains(container)) {
            try {
              container.parentNode.removeChild(container);
            } catch (error) {
              console.warn(`[reactify] Error removing slot container for "${slotName}":`, error);
            }
          }
        });
      } catch (error) {
        console.warn(`[reactify] Error clearing slot containers for "${slotName}":`, error);
      }
    }

    // 缓存最后渲染的React元素，用于比较
    private lastRenderedElements = new Map<string, any>();

    // 检查是否是相同的React元素
    private isSameReactElement(prop: string, val: any): boolean {
      const lastElement = this.lastRenderedElements.get(prop);

      if (!lastElement || !isValidReactNode(val)) {
        return false;
      }

      // 简单比较：如果是相同的React元素引用，则认为相同
      if (lastElement === val) {
        return true;
      }

      // 对于React元素，只比较type和key，不比较props，因为当props包含函数或react dom 时会导致循环引用
      if (React.isValidElement(lastElement) && React.isValidElement(val)) {
        // 允许props更新
        return false;
      }

      return false;
    }

    // 将React节点渲染到slot中
    renderReactNodeToSlot(reactNode: React.ReactNode, slotName: string) {
      const webComponent = this.ref.current;
      if (!webComponent) return;

      // 检查是否已经有相同的slot容器存在，避免重复创建
      const existingContainers = webComponent.querySelectorAll(`[slot="${slotName}"]`);
      if (existingContainers.length > 0) {
        return;
      }

      // 直接创建容器并添加到Web Component中
      const container = document.createElement('div');
      container.style.display = 'contents'; // 不影响布局
      container.setAttribute('slot', slotName); // 设置slot属性，Web Components会自动处理

      // 将容器添加到Web Component中
      webComponent.appendChild(container);

      // 根据不同类型的reactNode创建不同的清理函数
      let cleanupFn: (() => void) | null = null;

      if (isValidReactNode(reactNode)) {
        if (React.isValidElement(reactNode)) {
          try {
            const renderer = createRenderer(container);
            renderer.render(reactNode);
            cleanupFn = () => {
              try {
                renderer.unmount();
              } catch (error) {
                console.warn('Error unmounting React renderer:', error);
              }
            };
          } catch (error) {
            console.warn('Error creating React renderer:', error);
          }
        } else if (typeof reactNode === 'string' || typeof reactNode === 'number') {
          container.textContent = String(reactNode);
          cleanupFn = () => {
            container.textContent = '';
          };
        } else if (Array.isArray(reactNode)) {
          try {
            const renderer = createRenderer(container);
            const wrapper = React.createElement(
              'div',
              { style: { display: 'contents' } },
              ...reactNode.filter(isValidReactNode),
            );
            renderer.render(wrapper);
            cleanupFn = () => {
              try {
                renderer.unmount();
              } catch (error) {
                console.warn('Error unmounting React renderer:', error);
              }
            };
          } catch (error) {
            console.warn('Error creating React renderer for array:', error);
          }
        }
      }

      // 保存cleanup函数
      this.slotRenderers.set(slotName, () => {
        // 清理缓存
        this.lastRenderedElements.delete(slotName);
        // 异步unmount避免竞态条件
        Promise.resolve().then(() => {
          if (cleanupFn) {
            cleanupFn();
          }
          if (container.parentNode) {
            container.parentNode.removeChild(container);
          }
        });
      });
    }

    update() {
      this.clearEventHandlers();
      if (!this.ref.current) return;

      Object.entries(this.props).forEach(([prop, val]) => {
        if (['innerRef', 'children'].includes(prop)) return;

        // event handler
        if (typeof val === 'function' && prop.match(/^on[A-Za-z]/)) {
          const eventName = prop.slice(2);
          const omiEventName = eventName[0].toLowerCase() + eventName.slice(1);
          this.setEvent(omiEventName, val as EventListener);
          return;
        }

        // render functions or slot props
        if (typeof val === 'function' && prop.match(/^render[A-Za-z]/)) {
          this.handleSlotProp(prop, val);
          return;
        }

        // 检查是否是slot prop
        if (isValidReactNode(val) && !prop.match(/^on[A-Za-z]/) && !prop.match(/^render[A-Za-z]/)) {
          const isSlotProp = prop.endsWith('Slot');
          const possibleSlotName = hyphenate(isSlotProp ? prop.slice(0, -4) : prop);

          // 将react组件的prop当做slot处理
          // 1. 检查webc中shadow dom是否存在该slot
          let hasSlotInDOM = this.ref.current?.shadowRoot?.querySelector(`slot[name="${possibleSlotName}"]`) !== null;

          // 2. 检查是否配置了动态slot白名单
          if (!hasSlotInDOM && dynamicSlotConfig[WC]) {
            hasSlotInDOM = dynamicSlotConfig[WC](possibleSlotName);
          }

          if (hasSlotInDOM) {
            this.handleSlotProp(prop, val);
            return;
          }
        }

        // Complex object处理
        if (typeof val === 'object' && val !== null) {
          // style特殊处理
          if (prop === 'style') {
            this.ref.current?.setAttribute('style', styleObjectToString(val));
            return;
          }
          // 其他复杂对象直接设置为属性
          (this.ref.current as any)[prop] = val;
          return;
        }

        // 函数类型但不是事件处理器也不是render函数的，直接设置为属性
        if (typeof val === 'function') {
          (this.ref.current as any)[prop] = val;
          return;
        }

        // camel case to kebab-case for attributes
        if (prop.match(hyphenateRE)) {
          this.ref.current?.setAttribute(hyphenate(prop), val);
          this.ref.current?.removeAttribute(prop);
          return;
        }
        if (!isReact19Plus()) {
          (this.ref.current as any)[prop] = val;
        }
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
      this.clearSlotRenderers();
    }

    clearEventHandlers() {
      this.eventHandlers.forEach(([event, handler]) => {
        this.ref.current?.removeEventListener(event, handler);
      });
      this.eventHandlers = [];
    }

    clearSlotRenderers() {
      this.slotRenderers.forEach((cleanup) => {
        Reactify.safeCleanupRenderer(cleanup);
      });
      this.slotRenderers.clear();
      this.processingSlots.clear();
    }

    render() {
      const { children, className, ...rest } = this.props;

      return createElement(WC, { class: className, ...rest, ref: this.ref }, children);
    }
  }

  return forwardRef<HTMLElement, AnyProps>((props, ref) =>
    createElement(Reactify, { ...props, innerRef: ref }),
  ) as React.ForwardRefExoticComponent<Omit<T, 'ref'> & React.RefAttributes<HTMLElement | undefined>>;
};

export default reactify;
