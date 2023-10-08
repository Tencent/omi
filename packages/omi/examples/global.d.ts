declare module JSX {
  interface IntrinsicElements {
    [tagName: string]: Omi.Props;
  }
}

declare namespace Omi {
  interface Props { }
}
