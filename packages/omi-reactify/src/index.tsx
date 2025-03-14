/**
 * Copy From https://github.com/BBKolton/reactify-wc/
 * */
import { Component, createRef, createElement, forwardRef, ReactElement } from "react";

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

const reactify = <T extends Props = {}>(WC: any): React.ForwardRefExoticComponent<Props & T&React.RefAttributes<HTMLElement>> => {
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
        // event handler
        if (typeof val === "function") {
          if (prop.match(/^on[A-Za-z]/)) {
            const eventName = prop.slice(2).toLowerCase();
            return this.setEvent(eventName, val);
          }
        }
        // Complex object
        if(typeof val === "object" && prop !== 'children'){
          (this.ref.current as any)[prop] = val;
        }
        // camel case
        if(prop.match(hyphenateRE)){
          this.ref.current.setAttribute(hyphenate(prop), val);
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
        this.ref.current.removeEventListener(event, handler);
      });
      this.eventHandlers = [];
    }

    render() {
      const { children, className, ...rest } = this.props;
      console.log('===children',children);
     
      return createElement(
        WC,
        { class: className, ...rest, ref: this.ref },
        children
      );
    }
  }

  return forwardRef<HTMLElement, Props>((props, ref) => {
    return createElement(Reactify, { ...props, innerRef: ref });
  });
};

export default reactify;
