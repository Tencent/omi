const h = (type, props, ...children) => ({ type, props, children });
export default h(
  "svg",
  { width: "100", height: "100" },
  h("polyline", {
    bindtap: "tapHandler",
    points: "30,2  80,2  55,52",
    style: "stroke:#006600; stroke-width: 4; fill: #33cc33;"
  })
);
