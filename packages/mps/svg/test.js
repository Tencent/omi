
export default function () {

  return cax.h(
    "svg",
    { x: "100", y: "100" },
    cax.h("polyline", {
      bindtap: this.tapHandler,
      points: "30,2  80,2  55,52",
      style: "stroke:#006600; stroke-width: 4; fill: #33cc33;"
    })
  );
}

