const h = (type, props, ...children) => ({ type, props, children });
export default h(
  "svg",
  { width: "300", height: "300" },
  h("rect", {
    bindtap: "tapHandler",
    x: "0",
    y: "0",
    height: "110",
    width: "110",
    style: "stroke:#ff0000; fill: #0000ff"
  })
);
