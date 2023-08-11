var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { tag, WeElement, h, extractClass } from "omi";
const p = function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(script) {
    const fetchOpts = {};
    if (script.integrity)
      fetchOpts.integrity = script.integrity;
    if (script.referrerpolicy)
      fetchOpts.referrerPolicy = script.referrerpolicy;
    if (script.crossorigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (script.crossorigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
};
p();
var index = `.pickr{position:relative;overflow:visible;transform:translateY(0)}.pickr *{box-sizing:border-box}.pickr .pcr-button{position:relative;height:2em;width:2em;padding:.5em;cursor:pointer;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;border-radius:.15em;background:url('data:image/svg+xml;utf8, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" stroke="%2342445A" stroke-width="5px" stroke-linecap="round"><path d="M45,45L5,5"></path><path d="M45,5L5,45"></path></svg>') no-repeat center;background-size:0;transition:all .3s}.pickr .pcr-button:before{position:absolute;content:"";top:0;left:0;width:100%;height:100%;background:url('data:image/svg+xml;utf8, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2 2"><path fill="white" d="M1,0H2V1H1V0ZM0,1H1V2H0V1Z"/><path fill="gray" d="M0,0H1V1H0V0ZM1,1H2V2H1V1Z"/></svg>');background-size:.5em;border-radius:.15em;z-index:-1}.pickr .pcr-button:before{z-index:initial}.pickr .pcr-button:after{position:absolute;content:"";top:0;left:0;height:100%;width:100%;transition:background .3s;background:currentColor;border-radius:.15em}.pickr .pcr-button.clear{background-size:70%}.pickr .pcr-button.clear:before{opacity:0}.pickr .pcr-button.clear:focus{box-shadow:0 0 0 1px #f1f3f4,0 0 0 3px currentColor}.pickr .pcr-button.disabled{cursor:not-allowed}.pickr input,.pickr button,.pcr-app input,.pcr-app button{outline:none;border:none;-webkit-appearance:none}.pickr input:focus,.pickr button:focus,.pcr-app input:focus,.pcr-app button:focus{box-shadow:0 0 0 1px #f1f3f4,0 0 0 3px currentColor}.pcr-app{position:fixed;display:flex;flex-direction:column;z-index:10000;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;box-shadow:0 .15em 1.5em #0000001a,0 0 1em #00000008;width:22.5em;max-width:95vw;padding:.4em;border-radius:.1em;background:#fff;opacity:0;visibility:hidden;transition:opacity .3s;left:0;top:0}.pcr-app.visible{visibility:visible;opacity:1}.pcr-app .pcr-swatches{display:flex;flex-wrap:wrap;margin-top:.75em}.pcr-app .pcr-swatches.pcr-last{margin:0}@supports (display: grid){.pcr-app .pcr-swatches{display:grid;align-items:center;justify-content:space-around;grid-template-columns:repeat(auto-fit,1.75em)}}.pcr-app .pcr-swatches>button{position:relative;width:1.75em;height:1.75em;border-radius:.15em;cursor:pointer;margin:2.5px;flex-shrink:0;justify-self:center;transition:all .15s;overflow:hidden;background:transparent;z-index:1}.pcr-app .pcr-swatches>button:before{position:absolute;content:"";top:0;left:0;width:100%;height:100%;background:url('data:image/svg+xml;utf8, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2 2"><path fill="white" d="M1,0H2V1H1V0ZM0,1H1V2H0V1Z"/><path fill="gray" d="M0,0H1V1H0V0ZM1,1H2V2H1V1Z"/></svg>');background-size:6px;border-radius:.15em;z-index:-1}.pcr-app .pcr-swatches>button:after{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background:currentColor;border:1px solid rgba(0,0,0,.05);border-radius:.15em;box-sizing:border-box}.pcr-app .pcr-swatches>button:hover{filter:brightness(1.05)}.pcr-app .pcr-interaction{display:flex;flex-wrap:wrap;align-items:center;margin:0 -.2em}.pcr-app .pcr-interaction>*{margin:0 .2em}.pcr-app .pcr-interaction input{letter-spacing:.07em;font-size:.75em;text-align:center;cursor:pointer;color:#75797e;background:#f1f3f4;border-radius:.15em;transition:all .15s;padding:.45em .5em;margin-top:.75em}.pcr-app .pcr-interaction input:hover{filter:brightness(.975)}.pcr-app .pcr-interaction input:focus{box-shadow:0 0 0 1px #f1f3f4,0 0 0 3px #4285f4bf}.pcr-app .pcr-interaction .pcr-result{color:#75797e;text-align:left;flex:1 1 8em;min-width:8em;transition:all .2s;border-radius:.15em;background:#f1f3f4;cursor:text}.pcr-app .pcr-interaction .pcr-result::selection{background:#4285f4;color:#fff}.pcr-app .pcr-interaction .pcr-type.active{color:#fff;background:#4285f4}.pcr-app .pcr-interaction .pcr-clear,.pcr-app .pcr-interaction .pcr-save{color:#fff;width:auto}.pcr-app .pcr-interaction .pcr-save,.pcr-app .pcr-interaction .pcr-clear{color:#fff}.pcr-app .pcr-interaction .pcr-save:hover,.pcr-app .pcr-interaction .pcr-clear:hover{filter:brightness(.925)}.pcr-app .pcr-interaction .pcr-save{background:#4285f4}.pcr-app .pcr-interaction .pcr-clear{background:#aaa}.pcr-app .pcr-interaction .pcr-clear:focus{box-shadow:0 0 0 1px #f1f3f4,0 0 0 3px #aaaaaabf}.pcr-app .pcr-selection{display:flex;justify-content:space-between;flex-grow:1}.pcr-app .pcr-selection .pcr-picker{position:absolute;height:10px;width:10px;border:2px solid #fff;border-radius:100%;user-select:none}.pcr-app .pcr-selection .pcr-color-preview{position:relative;z-index:1;width:2em;display:flex;flex-direction:column;justify-content:space-between;margin-right:.75em}.pcr-app .pcr-selection .pcr-color-preview:before{position:absolute;content:"";top:0;left:0;width:100%;height:100%;background:url('data:image/svg+xml;utf8, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2 2"><path fill="white" d="M1,0H2V1H1V0ZM0,1H1V2H0V1Z"/><path fill="gray" d="M0,0H1V1H0V0ZM1,1H2V2H1V1Z"/></svg>');background-size:.5em;border-radius:.15em;z-index:-1}.pcr-app .pcr-selection .pcr-color-preview .pcr-last-color{cursor:pointer;transition:background-color .3s,box-shadow .3s;border-radius:.15em .15em 0 0;z-index:2}.pcr-app .pcr-selection .pcr-color-preview .pcr-current-color{border-radius:0 0 .15em .15em}.pcr-app .pcr-selection .pcr-color-preview .pcr-last-color,.pcr-app .pcr-selection .pcr-color-preview .pcr-current-color{background:currentColor;width:100%;height:50%}.pcr-app .pcr-selection .pcr-color-palette,.pcr-app .pcr-selection .pcr-color-chooser,.pcr-app .pcr-selection .pcr-color-opacity{position:relative;user-select:none;display:flex;flex-direction:column;cursor:grab;cursor:-moz-grab;cursor:-webkit-grab}.pcr-app .pcr-selection .pcr-color-palette:active,.pcr-app .pcr-selection .pcr-color-chooser:active,.pcr-app .pcr-selection .pcr-color-opacity:active{cursor:grabbing;cursor:-moz-grabbing;cursor:-webkit-grabbing}.pcr-app .pcr-selection .pcr-color-palette{width:100%;height:8em;z-index:1}.pcr-app .pcr-selection .pcr-color-palette .pcr-palette{flex-grow:1;border-radius:.15em}.pcr-app .pcr-selection .pcr-color-palette .pcr-palette:before{position:absolute;content:"";top:0;left:0;width:100%;height:100%;background:url('data:image/svg+xml;utf8, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2 2"><path fill="white" d="M1,0H2V1H1V0ZM0,1H1V2H0V1Z"/><path fill="gray" d="M0,0H1V1H0V0ZM1,1H2V2H1V1Z"/></svg>');background-size:.5em;border-radius:.15em;z-index:-1}.pcr-app .pcr-selection .pcr-color-chooser,.pcr-app .pcr-selection .pcr-color-opacity{margin-left:.75em}.pcr-app .pcr-selection .pcr-color-chooser .pcr-picker,.pcr-app .pcr-selection .pcr-color-opacity .pcr-picker{left:50%;transform:translate(-50%)}.pcr-app .pcr-selection .pcr-color-chooser .pcr-slider,.pcr-app .pcr-selection .pcr-color-opacity .pcr-slider{width:8px;flex-grow:1;border-radius:50em}.pcr-app .pcr-selection .pcr-color-chooser .pcr-slider{background:linear-gradient(to bottom,hsl(0deg,100%,50%),hsl(60deg,100%,50%),hsl(120deg,100%,50%),hsl(180deg,100%,50%),hsl(240deg,100%,50%),hsl(300deg,100%,50%),hsl(0deg,100%,50%))}.pcr-app .pcr-selection .pcr-color-opacity .pcr-slider{background:linear-gradient(to bottom,transparent,black),url('data:image/svg+xml;utf8, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2 2"><path fill="white" d="M1,0H2V1H1V0ZM0,1H1V2H0V1Z"/><path fill="gray" d="M0,0H1V1H0V0ZM1,1H2V2H1V1Z"/></svg>');background-size:100%,50%}
`;
var css = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": index
}, Symbol.toStringTag, { value: "Module" }));
var pickr = "";
const on = eventListener.bind(null, "addEventListener");
const off = eventListener.bind(null, "removeEventListener");
function eventListener(method, elements, events, fn, options = {}) {
  if (elements instanceof HTMLCollection || elements instanceof NodeList) {
    elements = Array.from(elements);
  } else if (!Array.isArray(elements)) {
    elements = [elements];
  }
  if (!Array.isArray(events)) {
    events = [events];
  }
  for (const el of elements) {
    for (const ev of events) {
      el[method](ev, fn, { capture: false, ...options });
    }
  }
  return Array.prototype.slice.call(arguments, 1);
}
function createElementFromString(html) {
  const div = document.createElement("div");
  div.innerHTML = html.trim();
  return div.firstElementChild;
}
function removeAttribute(el, name) {
  const value = el.getAttribute(name);
  el.removeAttribute(name);
  return value;
}
function createFromTemplate(str) {
  function resolve(element, base = {}) {
    const con = removeAttribute(element, "data-con");
    const key = removeAttribute(element, "data-key");
    if (key) {
      base[key] = element;
    }
    const subtree = con ? base[con] = {} : base;
    for (let child of Array.from(element.children)) {
      const arr = removeAttribute(child, "data-arr");
      if (arr) {
        (subtree[arr] || (subtree[arr] = [])).push(child);
      } else {
        resolve(child, subtree);
      }
    }
    return base;
  }
  return resolve(createElementFromString(str));
}
function eventPath(evt) {
  let path = evt.path || evt.composedPath && evt.composedPath();
  if (path)
    return path;
  let el = evt.target.parentElement;
  path = [evt.target, el];
  while (el = el.parentElement)
    path.push(el);
  path.push(document, window);
  return path;
}
function adjustableInputNumbers(el, negative = true) {
  const isNumChar = (c) => c >= "0" && c <= "9" || c === "-" || c === ".";
  function handleScroll(e) {
    const val = el.value;
    const off2 = el.selectionStart;
    let numStart = off2;
    let num = "";
    for (let i = off2 - 1; i > 0 && isNumChar(val[i]); i--) {
      num = val[i] + num;
      numStart--;
    }
    for (let i = off2, n = val.length; i < n && isNumChar(val[i]); i++) {
      num += val[i];
    }
    if (num.length > 0 && !isNaN(num) && isFinite(num)) {
      const mul = e.deltaY < 0 ? 1 : -1;
      const inc = [1, 10, 100][Number(e.shiftKey || e.ctrlKey * 2)] * mul;
      let newNum = Number(num) + inc;
      if (!negative && newNum < 0) {
        newNum = 0;
      }
      const newStr = val.substr(0, numStart) + newNum + val.substring(numStart + num.length, val.length);
      const curPos = numStart + String(newNum).length;
      el.value = newStr;
      el.focus();
      el.setSelectionRange(curPos, curPos);
    }
    e.preventDefault();
    el.dispatchEvent(new Event("input"));
  }
  on(el, "focus", () => on(window, "wheel", handleScroll, { passive: false }));
  on(el, "blur", () => off(window, "wheel", handleScroll));
}
var _ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  on,
  off,
  createElementFromString,
  removeAttribute,
  createFromTemplate,
  eventPath,
  adjustableInputNumbers
}, Symbol.toStringTag, { value: "Module" }));
const { min, max, floor, round } = Math;
function standardizeColor(name) {
  const ctx = document.createElement("canvas").getContext("2d");
  ctx.fillStyle = name;
  return ctx.fillStyle;
}
function hsvToRgb(h2, s, v) {
  h2 = h2 / 360 * 6;
  s /= 100;
  v /= 100;
  let i = floor(h2);
  let f = h2 - i;
  let p2 = v * (1 - s);
  let q = v * (1 - f * s);
  let t = v * (1 - (1 - f) * s);
  let mod = i % 6;
  let r = [v, q, p2, p2, t, v][mod];
  let g = [t, v, v, q, p2, p2][mod];
  let b = [p2, p2, t, v, v, q][mod];
  return [
    r * 255,
    g * 255,
    b * 255
  ];
}
function hsvToHex(h2, s, v) {
  return hsvToRgb(h2, s, v).map(
    (v2) => round(v2).toString(16).padStart(2, "0")
  );
}
function hsvToCmyk(h2, s, v) {
  const rgb = hsvToRgb(h2, s, v);
  const r = rgb[0] / 255;
  const g = rgb[1] / 255;
  const b = rgb[2] / 255;
  let k, c, m, y;
  k = min(1 - r, 1 - g, 1 - b);
  c = k === 1 ? 0 : (1 - r - k) / (1 - k);
  m = k === 1 ? 0 : (1 - g - k) / (1 - k);
  y = k === 1 ? 0 : (1 - b - k) / (1 - k);
  return [
    c * 100,
    m * 100,
    y * 100,
    k * 100
  ];
}
function hsvToHsl(h2, s, v) {
  s /= 100, v /= 100;
  let l = (2 - s) * v / 2;
  if (l !== 0) {
    if (l === 1) {
      s = 0;
    } else if (l < 0.5) {
      s = s * v / (l * 2);
    } else {
      s = s * v / (2 - l * 2);
    }
  }
  return [
    h2,
    s * 100,
    l * 100
  ];
}
function rgbToHsv(r, g, b) {
  r /= 255, g /= 255, b /= 255;
  let h2, s, v;
  const minVal = min(r, g, b);
  const maxVal = max(r, g, b);
  const delta = maxVal - minVal;
  v = maxVal;
  if (delta === 0) {
    h2 = s = 0;
  } else {
    s = delta / maxVal;
    let dr = ((maxVal - r) / 6 + delta / 2) / delta;
    let dg = ((maxVal - g) / 6 + delta / 2) / delta;
    let db = ((maxVal - b) / 6 + delta / 2) / delta;
    if (r === maxVal) {
      h2 = db - dg;
    } else if (g === maxVal) {
      h2 = 1 / 3 + dr - db;
    } else if (b === maxVal) {
      h2 = 2 / 3 + dg - dr;
    }
    if (h2 < 0) {
      h2 += 1;
    } else if (h2 > 1) {
      h2 -= 1;
    }
  }
  return [
    h2 * 360,
    s * 100,
    v * 100
  ];
}
function cmykToHsv(c, m, y, k) {
  c /= 100, m /= 100, y /= 100, k /= 100;
  const r = (1 - min(1, c * (1 - k) + k)) * 255;
  const g = (1 - min(1, m * (1 - k) + k)) * 255;
  const b = (1 - min(1, y * (1 - k) + k)) * 255;
  return [...rgbToHsv(r, g, b)];
}
function hslToHsv(h2, s, l) {
  s /= 100, l /= 100;
  s *= l < 0.5 ? l : 1 - l;
  let ns = 2 * s / (l + s) * 100;
  let v = (l + s) * 100;
  return [h2, ns, v];
}
function hexToHsv(hex) {
  return rgbToHsv(...hex.match(/.{2}/g).map((v) => parseInt(v, 16)));
}
function parseToHSV(str) {
  str = str.match(/^[a-zA-Z]+$/) ? standardizeColor(str) : str;
  const regex = {
    cmyk: /^cmyk[\D]+(\d+)[\D]+(\d+)[\D]+(\d+)[\D]+(\d+)/i,
    rgba: /^(rgb|rgba)[\D]+(\d+)[\D]+(\d+)[\D]+(\d+)[\D]*?([\d.]+|$)/i,
    hsla: /^(hsl|hsla)[\D]+(\d+)[\D]+(\d+)[\D]+(\d+)[\D]*?([\d.]+|$)/i,
    hsva: /^(hsv|hsva)[\D]+(\d+)[\D]+(\d+)[\D]+(\d+)[\D]*?([\d.]+|$)/i,
    hex: /^#?(([\dA-Fa-f]{3,4})|([\dA-Fa-f]{6})|([\dA-Fa-f]{8}))$/i
  };
  const numarize = (array) => array.map((v) => /^(|\d+)\.\d+|\d+$/.test(v) ? Number(v) : void 0);
  let match;
  for (const type in regex) {
    if (!(match = regex[type].exec(str)))
      continue;
    switch (type) {
      case "cmyk": {
        let [, c, m, y, k] = numarize(match);
        if (c > 100 || m > 100 || y > 100 || k > 100)
          break;
        return { values: [...cmykToHsv(c, m, y, k), 1], type };
      }
      case "rgba": {
        let [, , r, g, b, a = 1] = numarize(match);
        if (r > 255 || g > 255 || b > 255 || a < 0 || a > 1)
          break;
        return { values: [...rgbToHsv(r, g, b), a], type };
      }
      case "hex": {
        const splitAt = (s, i) => [s.substring(0, i), s.substring(i, s.length)];
        let [, hex] = match;
        if (hex.length === 3) {
          hex += "F";
        } else if (hex.length === 6) {
          hex += "FF";
        }
        let alpha;
        if (hex.length === 4) {
          [hex, alpha] = splitAt(hex, 3).map((v) => v + v);
        } else if (hex.length === 8) {
          [hex, alpha] = splitAt(hex, 6);
        }
        alpha = parseInt(alpha, 16) / 255;
        return { values: [...hexToHsv(hex), alpha], type };
      }
      case "hsla": {
        let [, , h2, s, l, a = 1] = numarize(match);
        if (h2 > 360 || s > 100 || l > 100 || a < 0 || a > 1)
          break;
        return { values: [...hslToHsv(h2, s, l), a], type };
      }
      case "hsva": {
        let [, , h2, s, v, a = 1] = numarize(match);
        if (h2 > 360 || s > 100 || v > 100 || a < 0 || a > 1)
          break;
        return { values: [h2, s, v, a], type };
      }
    }
  }
  return { values: null, type: null };
}
function HSVaColor(h2 = 0, s = 0, v = 0, a = 1) {
  const { ceil } = Math;
  const that = {
    h: h2,
    s,
    v,
    a,
    toHSVA() {
      const hsva = [that.h, that.s, that.v];
      const rhsva = hsva.map(ceil);
      hsva.push(that.a);
      hsva.toString = () => `hsva(${rhsva[0]}, ${rhsva[1]}%, ${rhsva[2]}%, ${that.a.toFixed(1)})`;
      return hsva;
    },
    toHSLA() {
      const hsla = hsvToHsl(that.h, that.s, that.v);
      const rhsla = hsla.map(ceil);
      hsla.push(that.a);
      hsla.toString = () => `hsla(${rhsla[0]}, ${rhsla[1]}%, ${rhsla[2]}%, ${that.a.toFixed(1)})`;
      return hsla;
    },
    toRGBA() {
      const rgba = hsvToRgb(that.h, that.s, that.v);
      const rrgba = rgba.map(ceil);
      rgba.push(that.a);
      rgba.toString = () => `rgba(${rrgba[0]}, ${rrgba[1]}, ${rrgba[2]}, ${that.a.toFixed(1)})`;
      return rgba;
    },
    toCMYK() {
      const cmyk = hsvToCmyk(that.h, that.s, that.v);
      const rcmyk = cmyk.map(ceil);
      cmyk.toString = () => `cmyk(${rcmyk[0]}%, ${rcmyk[1]}%, ${rcmyk[2]}%, ${rcmyk[3]}%)`;
      return cmyk;
    },
    toHEXA() {
      const hex = hsvToHex(that.h, that.s, that.v);
      hex.toString = () => {
        const alpha = that.a >= 1 ? "" : Number((that.a * 255).toFixed(0)).toString(16).toUpperCase().padStart(2, "0");
        return `#${hex.join("").toUpperCase() + alpha}`;
      };
      return hex;
    },
    clone() {
      return HSVaColor(that.h, that.s, that.v, that.a);
    }
  };
  return that;
}
function Moveable(opt) {
  const that = {
    options: Object.assign({
      lockX: false,
      lockY: false,
      onchange: () => 0
    }, opt),
    _tapstart(evt) {
      on(document, ["mouseup", "touchend", "touchcancel"], that._tapstop);
      on(document, ["mousemove", "touchmove"], that._tapmove);
      evt.preventDefault();
      that._tapmove(evt);
    },
    _tapmove(evt) {
      const { options: options2, cache } = that;
      const { element } = options2;
      const b = that.options.wrapper.getBoundingClientRect();
      let x = 0, y = 0;
      if (evt) {
        const touch = evt && evt.touches && evt.touches[0];
        x = evt ? (touch || evt).clientX : 0;
        y = evt ? (touch || evt).clientY : 0;
        if (x < b.left)
          x = b.left;
        else if (x > b.left + b.width)
          x = b.left + b.width;
        if (y < b.top)
          y = b.top;
        else if (y > b.top + b.height)
          y = b.top + b.height;
        x -= b.left;
        y -= b.top;
      } else if (cache) {
        x = cache.x * b.width;
        y = cache.y * b.height;
      }
      if (!options2.lockX) {
        element.style.left = `calc(${x / b.width * 100}% - ${element.offsetWidth / 2}px)`;
      }
      if (!options2.lockY) {
        element.style.top = `calc(${y / b.height * 100}% - ${element.offsetWidth / 2}px)`;
      }
      that.cache = { x: x / b.width, y: y / b.height };
      options2.onchange(x, y);
    },
    _tapstop() {
      off(document, ["mouseup", "touchend", "touchcancel"], that._tapstop);
      off(document, ["mousemove", "touchmove"], that._tapmove);
    },
    trigger() {
      that._tapmove();
    },
    update(x = 0, y = 0) {
      const wrapperRect = that.options.wrapper.getBoundingClientRect();
      that._tapmove({
        clientX: wrapperRect.left + x,
        clientY: wrapperRect.top + y
      });
    },
    destroy() {
      const { options: options2, _tapstart: _tapstart2 } = that;
      off([options2.wrapper, options2.element], "mousedown", _tapstart2);
      off([options2.wrapper, options2.element], "touchstart", _tapstart2, {
        passive: false
      });
    }
  };
  const { options, _tapstart } = that;
  on([options.wrapper, options.element], "mousedown", _tapstart);
  on([options.wrapper, options.element], "touchstart", _tapstart, {
    passive: false
  });
  return that;
}
function Selectable(opt = {}) {
  opt = Object.assign({
    onchange: () => 0,
    className: "",
    elements: []
  }, opt);
  const onTap = on(opt.elements, "click", (evt) => {
    opt.elements.forEach(
      (e) => e.classList[evt.target === e ? "add" : "remove"](opt.className)
    );
    opt.onchange(evt);
  });
  return {
    destroy: () => off(...onTap)
  };
}
function Nanopop({ el, reference, pos, padding = 8 }) {
  const vBehaviour = { start: "sme", middle: "mse", end: "ems" };
  const hBehaviour = { top: "tb", right: "rl", bottom: "bt", left: "lr" };
  const [position, variant = "middle"] = pos.split("-");
  const isVertical = position === "top" || position === "bottom";
  return {
    update() {
      const rb = reference.getBoundingClientRect();
      const eb = el.getBoundingClientRect();
      const positions = isVertical ? {
        t: rb.top - eb.height - padding,
        b: rb.bottom + padding
      } : {
        r: rb.right + padding,
        l: rb.left - eb.width - padding
      };
      const variants = isVertical ? {
        s: rb.left + rb.width - eb.width,
        m: -eb.width / 2 + (rb.left + rb.width / 2),
        e: rb.left
      } : {
        s: rb.bottom - eb.height,
        m: rb.bottom - rb.height / 2 - eb.height / 2,
        e: rb.bottom - rb.height
      };
      function apply(bevs, vars, styleprop) {
        const vertical = styleprop === "top";
        const adder = vertical ? eb.height : eb.width;
        const win = window[vertical ? "innerHeight" : "innerWidth"];
        for (const ch of bevs) {
          const v = vars[ch];
          if (v > 0 && v + adder < win) {
            el.style[styleprop] = `${v}px`;
            break;
          }
        }
      }
      apply(vBehaviour[variant], variants, isVertical ? "left" : "top");
      apply(hBehaviour[position], positions, isVertical ? "top" : "left");
    }
  };
}
var buildPickr = ({ components: c, strings: s, useAsButton, inline, appClass, width }) => {
  const hidden = (con) => con ? "" : 'style="display:none" hidden';
  const hiddenColor = (interaction, con) => {
    let count = 0;
    if (interaction.hex)
      count++;
    if (interaction.rgba)
      count++;
    if (interaction.hsla)
      count++;
    if (interaction.hsva)
      count++;
    if (interaction.cmyk)
      count++;
    if (count > 1 && con) {
      return "";
    }
    return 'style="display:none" hidden';
  };
  const root = createFromTemplate(`
      <div data-key="root" class="pickr">

        ${useAsButton ? "" : '<button type="button" data-key="button" class="pcr-button"></button>'}

        <div data-key="app" class="pcr-app ${appClass || ""}" ${`style="${inline ? "position: unset;" : ""}${width ? `width:${width};` : ""}"`}>
          <div class="pcr-selection" ${hidden(c.palette)}>
            <div data-con="preview" class="pcr-color-preview" ${hidden(c.preview)}>
              <button type="button" data-key="lastColor" class="pcr-last-color"></button>
              <div data-key="currentColor" class="pcr-current-color"></div>
            </div>

            <div data-con="palette" class="pcr-color-palette">
              <div data-key="picker" class="pcr-picker"></div>
              <div data-key="palette" class="pcr-palette"></div>
            </div>

            <div data-con="hue" class="pcr-color-chooser" ${hidden(c.hue)}>
              <div data-key="picker" class="pcr-picker"></div>
              <div data-key="slider" class="pcr-hue pcr-slider"></div>
            </div>

            <div data-con="opacity" class="pcr-color-opacity" ${hidden(c.opacity)}>
              <div data-key="picker" class="pcr-picker"></div>
              <div data-key="slider" class="pcr-opacity pcr-slider"></div>
            </div>
          </div>

          <div class="pcr-swatches ${c.palette ? "" : " pcr-last"}" data-key="swatches"></div> 

          <div data-con="interaction" class="pcr-interaction" ${hidden(Object.keys(c.interaction).length)}>
            <input data-key="result" class="pcr-result" type="text" spellcheck="false" ${hidden(c.interaction.input)}>

            <input data-arr="options" class="pcr-type" data-type="HEXA" value="HEXA" type="button" ${hiddenColor(c.interaction, c.interaction.hex)}>
            <input data-arr="options" class="pcr-type" data-type="RGBA" value="RGBA" type="button" ${hiddenColor(c.interaction, c.interaction.rgba)}>
            <input data-arr="options" class="pcr-type" data-type="HSLA" value="HSLA" type="button" ${hiddenColor(c.interaction, c.interaction.hsla)}>
            <input data-arr="options" class="pcr-type" data-type="HSVA" value="HSVA" type="button" ${hiddenColor(c.interaction, c.interaction.hsva)}>
            <input data-arr="options" class="pcr-type" data-type="CMYK" value="CMYK" type="button" ${hiddenColor(c.interaction, c.interaction.cmyk)}>

            <input data-key="clear" class="pcr-clear" value="${s.clear || "Clear"}" type="button" ${hidden(c.interaction.clear)}>
            <input data-key="save" class="pcr-save" value="${s.save || "Save"}" type="button" ${hidden(c.interaction.save)}>
          </div>
        </div>
      </div>
    `);
  const int = root.interaction;
  int.options.find((o) => !o.hidden && !o.classList.add("active"));
  int.type = () => int.options.find((e) => e.classList.contains("active"));
  return root;
};
class Pickr {
  constructor(opt) {
    __publicField(this, "_initializingActive", true);
    __publicField(this, "_recalc", true);
    __publicField(this, "_color", HSVaColor());
    __publicField(this, "_lastColor", HSVaColor());
    __publicField(this, "_swatchColors", []);
    __publicField(this, "_eventListener", {
      "swatch-select": [],
      "change": [],
      "save": [],
      "init": []
    });
    this.options = opt = Object.assign({
      appClass: null,
      useAsButton: false,
      disabled: false,
      comparison: true,
      components: {
        interaction: {}
      },
      strings: {},
      swatches: null,
      inline: false,
      default: "#42445A",
      defaultRepresentation: null,
      position: "bottom-middle",
      adjustableNumbers: true,
      showAlways: false,
      closeWithKey: "Escape"
    }, opt);
    const { swatches, inline, components, position } = opt;
    if (!components.interaction) {
      components.interaction = {};
    }
    const { preview, opacity, hue, palette } = components;
    components.palette = palette || preview || opacity || hue;
    if (inline) {
      opt.showAlways = true;
    }
    this._preBuild();
    this._buildComponents();
    this._bindEvents();
    this._finalBuild();
    if (swatches && swatches.length) {
      swatches.forEach((color) => this.addSwatch(color));
    }
    this._nanopop = Nanopop({
      reference: this._root.button,
      el: this._root.app,
      pos: position
    });
    const { button } = this._root;
    const that = this;
    requestAnimationFrame(function cb() {
      if (button.offsetParent === null && button !== document.body) {
        return requestAnimationFrame(cb);
      }
      that.setColor(opt.default);
      that._rePositioningPicker();
      if (opt.defaultRepresentation) {
        that._representation = opt.defaultRepresentation;
        that.setColorRepresentation(that._representation);
      }
      if (opt.showAlways) {
        that.show();
      }
      that._initializingActive = false;
      that._emit("init");
    });
  }
  _preBuild() {
    const opt = this.options;
    if (typeof opt.el === "string") {
      opt.el = opt.el.split(/>>/g).reduce((pv, cv, ci, a) => {
        pv = pv.querySelector(cv);
        return ci < a.length - 1 ? pv.shadowRoot : pv;
      }, document);
    }
    this._root = buildPickr(opt);
    if (opt.useAsButton) {
      this._root.button = opt.el;
    }
    document.body.appendChild(this._root.root);
  }
  _finalBuild() {
    const opt = this.options;
    const root = this._root;
    document.body.removeChild(root.root);
    const { parentElement } = opt.el;
    if (parentElement.lastChild === opt.el) {
      parentElement.appendChild(root.app);
    } else {
      parentElement.insertBefore(root.app, opt.el.nextSibling);
    }
    if (!opt.useAsButton) {
      opt.el.parentNode.replaceChild(root.root, opt.el);
    }
    if (opt.disabled) {
      this.disable();
    }
    if (!opt.comparison) {
      root.button.style.transition = "none";
      if (!opt.useAsButton) {
        root.preview.lastColor.style.transition = "none";
      }
    }
    this.hide();
  }
  _buildComponents() {
    const inst = this;
    const comp = this.options.components;
    const components = {
      palette: Moveable({
        element: inst._root.palette.picker,
        wrapper: inst._root.palette.palette,
        onchange(x, y) {
          if (!comp.palette)
            return;
          const { _color, _root, options } = inst;
          _color.s = x / this.wrapper.offsetWidth * 100;
          _color.v = 100 - y / this.wrapper.offsetHeight * 100;
          _color.v < 0 ? _color.v = 0 : 0;
          const cssRGBaString = _color.toRGBA().toString();
          this.element.style.background = cssRGBaString;
          this.wrapper.style.background = `
                        linear-gradient(to top, rgba(0, 0, 0, ${_color.a}), transparent),
                        linear-gradient(to left, hsla(${_color.h}, 100%, 50%, ${_color.a}), rgba(255, 255, 255, ${_color.a}))
                    `;
          if (!options.comparison) {
            _root.button.style.color = cssRGBaString;
            if (!options.useAsButton) {
              _root.preview.lastColor.style.color = cssRGBaString;
            }
          }
          _root.preview.currentColor.style.color = cssRGBaString;
          if (inst._recalc) {
            inst._updateOutput();
          }
          _root.button.classList.remove("clear");
        }
      }),
      hue: Moveable({
        lockX: true,
        element: inst._root.hue.picker,
        wrapper: inst._root.hue.slider,
        onchange(x, y) {
          if (!comp.hue || !comp.palette)
            return;
          inst._color.h = y / this.wrapper.offsetHeight * 360;
          this.element.style.backgroundColor = `hsl(${inst._color.h}, 100%, 50%)`;
          components.palette.trigger();
        }
      }),
      opacity: Moveable({
        lockX: true,
        element: inst._root.opacity.picker,
        wrapper: inst._root.opacity.slider,
        onchange(x, y) {
          if (!comp.opacity || !comp.palette)
            return;
          inst._color.a = Math.round(y / this.wrapper.offsetHeight * 100) / 100;
          this.element.style.background = `rgba(0, 0, 0, ${inst._color.a})`;
          inst.components.palette.trigger();
        }
      }),
      selectable: Selectable({
        elements: inst._root.interaction.options,
        className: "active",
        onchange(e) {
          inst._representation = e.target.getAttribute("data-type").toUpperCase();
          inst._updateOutput();
        }
      })
    };
    this.components = components;
  }
  _bindEvents() {
    const { _root, options } = this;
    const eventBindings = [
      on(_root.interaction.clear, "click", () => this._clearColor()),
      on(_root.preview.lastColor, "click", () => this.setHSVA(...this._lastColor.toHSVA())),
      on(_root.interaction.save, "click", () => {
        !this.applyColor() && !options.showAlways && this.hide();
      }),
      on(_root.interaction.result, ["keyup", "input"], (e) => {
        this._recalc = false;
        if (this.setColor(e.target.value, true) && !this._initializingActive) {
          this._emit("change", this._color);
        }
        e.stopImmediatePropagation();
      }),
      on([
        _root.palette.palette,
        _root.palette.picker,
        _root.hue.slider,
        _root.hue.picker,
        _root.opacity.slider,
        _root.opacity.picker
      ], ["mousedown", "touchstart"], () => this._recalc = true)
    ];
    if (!options.showAlways) {
      const ck = options.closeWithKey;
      eventBindings.push(
        on(_root.button, "click", () => this.isOpen() ? this.hide() : this.show()),
        on(document, "keyup", (e) => this.isOpen() && (e.key === ck || e.code === ck) && this.hide()),
        on(document, ["touchstart", "mousedown"], (e) => {
          if (this.isOpen() && !eventPath(e).some((el) => el === _root.app || el === _root.button)) {
            this.hide();
          }
        }, { capture: true })
      );
    }
    if (options.adjustableNumbers) {
      adjustableInputNumbers(_root.interaction.result, false);
    }
    if (!options.inline) {
      let timeout = null;
      const that = this;
      eventBindings.push(
        on(window, ["scroll", "resize"], () => {
          if (that.isOpen()) {
            if (timeout === null) {
              timeout = setTimeout(() => timeout = null, 100);
              requestAnimationFrame(function rs() {
                that._rePositioningPicker();
                timeout !== null && requestAnimationFrame(rs);
              });
            } else {
              clearTimeout(timeout);
              timeout = setTimeout(() => timeout = null, 100);
            }
          }
        })
      );
    }
    this._eventBindings = eventBindings;
  }
  _rePositioningPicker() {
    if (!this.options.inline) {
      this._nanopop.update();
    }
  }
  _updateOutput() {
    if (this._root.interaction.type()) {
      const method = `to${this._root.interaction.type().getAttribute("data-type")}`;
      this._root.interaction.result.value = typeof this._color[method] === "function" ? this._color[method]().toString() : "";
    }
    if (!this._initializingActive) {
      this._emit("change", this._color);
    }
  }
  _clearColor() {
    const { _root, options } = this;
    if (!options.useAsButton) {
      _root.button.style.color = "rgba(0, 0, 0, 0.15)";
    }
    _root.button.classList.add("clear");
    if (!options.showAlways) {
      this.hide();
    }
    if (!this._initializingActive) {
      this._emit("save", null);
    }
  }
  _emit(event, ...args) {
    this._eventListener[event].forEach((cb) => cb(...args, this));
  }
  on(event, cb) {
    if (typeof cb === "function" && typeof event === "string" && event in this._eventListener) {
      this._eventListener[event].push(cb);
    }
    return this;
  }
  off(event, cb) {
    const callBacks = this._eventListener[event];
    if (callBacks) {
      const index2 = callBacks.indexOf(cb);
      if (~index2) {
        callBacks.splice(index2, 1);
      }
    }
    return this;
  }
  addSwatch(color) {
    const { values } = parseToHSV(color);
    if (values) {
      const { _swatchColors, _root } = this;
      const hsvaColorObject = HSVaColor(...values);
      const element = createElementFromString(
        `<button type="button" style="color: ${hsvaColorObject.toRGBA()}"></button>`
      );
      _root.swatches.appendChild(element);
      _swatchColors.push({ element, hsvaColorObject });
      this._eventBindings.push(
        on(element, "click", () => {
          this.setHSVA(...hsvaColorObject.toHSVA(), true);
          this._emit("swatch-select", hsvaColorObject);
        })
      );
      return true;
    }
    return false;
  }
  removeSwatch(index2) {
    if (typeof index2 === "number") {
      const swatchColor = this._swatchColors[index2];
      if (swatchColor) {
        const { element } = swatchColor;
        this._root.swatches.removeChild(element);
        this._swatchColors.splice(index2, 1);
        return true;
      }
    }
    return false;
  }
  applyColor(silent = false) {
    const { preview, button } = this._root;
    const cssRGBaString = this._color.toRGBA().toString();
    preview.lastColor.style.color = cssRGBaString;
    if (!this.options.useAsButton) {
      button.style.color = cssRGBaString;
    }
    button.classList.remove("clear");
    this._lastColor = this._color.clone();
    if (!this._initializingActive && !silent) {
      this._emit("save", this._color);
    }
  }
  destroy() {
    this._eventBindings.forEach((args) => off(...args));
    Object.keys(this.components).forEach((key) => this.components[key].destroy());
  }
  destroyAndRemove() {
    this.destroy();
    const root = this._root.root;
    root.parentElement.removeChild(root);
    const app = this._root.app;
    app.parentElement.removeChild(app);
    const pickr2 = this;
    Object.keys(pickr2).forEach((key) => pickr2[key] = null);
  }
  hide() {
    this.visible = false;
    this._root.app.classList.remove("visible");
    return this;
  }
  toggle() {
    this.visible = !this.visible;
    if (this.visible) {
      this.show();
    } else {
      this.hide();
    }
  }
  show() {
    if (this.options.disabled)
      return;
    this.visible = true;
    this._root.app.classList.add("visible");
    this._rePositioningPicker();
    return this;
  }
  isOpen() {
    return this._root.app.classList.contains("visible");
  }
  setHSVA(h2 = 360, s = 0, v = 0, a = 1, silent = false) {
    const recalc = this._recalc;
    this._recalc = false;
    if (h2 < 0 || h2 > 360 || s < 0 || s > 100 || v < 0 || v > 100 || a < 0 || a > 1) {
      return false;
    }
    this._color = HSVaColor(h2, s, v, a);
    const { hue, opacity, palette } = this.components;
    const hueWrapper = hue.options.wrapper;
    const hueY = hueWrapper.offsetHeight * (h2 / 360);
    hue.update(0, hueY);
    const opacityWrapper = opacity.options.wrapper;
    const opacityY = opacityWrapper.offsetHeight * a;
    opacity.update(0, opacityY);
    const pickerWrapper = palette.options.wrapper;
    const pickerX = pickerWrapper.offsetWidth * (s / 100);
    const pickerY = pickerWrapper.offsetHeight * (1 - v / 100);
    palette.update(pickerX, pickerY);
    this._recalc = recalc;
    if (this._recalc) {
      this._updateOutput();
    }
    if (!silent) {
      this.applyColor();
    }
    return true;
  }
  setColor(string, silent = false) {
    if (string === null) {
      this._clearColor();
      return true;
    }
    const { values, type } = parseToHSV(string);
    if (values) {
      const utype = type.toUpperCase();
      const { options } = this._root.interaction;
      const target = options.find((el) => el.getAttribute("data-type").startsWith(utype));
      if (target && !target.hidden) {
        for (const el of options) {
          el.classList[el === target ? "add" : "remove"]("active");
        }
      }
      return this.setHSVA(...values, silent);
    }
  }
  setColorRepresentation(type) {
    type = type.toUpperCase();
    return !!this._root.interaction.options.find((v) => v.getAttribute("data-type").startsWith(type) && !v.click());
  }
  getColorRepresentation() {
    return this._representation;
  }
  getColor() {
    return this._color;
  }
  getRoot() {
    return this._root;
  }
  disable() {
    this.hide();
    this.options.disabled = true;
    this._root.button.classList.add("disabled");
    return this;
  }
  enable() {
    this.options.disabled = false;
    this._root.button.classList.remove("disabled");
    return this;
  }
}
Pickr.utils = _;
Pickr.create = (options) => new Pickr(options);
Pickr.version = "0.6.2";
var __defProp2 = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp2(target, key, result);
  return result;
};
let ColorPicker = class extends WeElement {
  installed() {
    const picker = Pickr.create({
      el: this.shadowRoot.querySelector(".picker"),
      inline: this.props.inline,
      default: this.props.default,
      useAsButton: !this.props.button,
      swatches: this.props.swatches,
      width: this.props.width,
      components: {
        preview: this.props.preview,
        opacity: this.props.opacity,
        hue: this.props.hue,
        interaction: {
          hex: this.props.hex,
          rgba: this.props.rgba,
          hsla: this.props.hsla,
          hsva: this.props.hsva,
          cmyk: this.props.cmyk,
          input: this.props.input,
          clear: this.props.clear,
          save: this.props.save
        }
      },
      strings: this.props.strings
    });
    picker.on("init", (...args) => {
      this.fire("init", args[0]);
    }).on("save", (...args) => {
      if (!args[0]) {
        this.fire("clear");
      } else {
        this.fire("save", {
          color: args[0].toHEXA().toString(),
          colorObject: args[0]
        });
      }
    }).on("change", (...args) => {
      this.fire("change", {
        color: args[0].toHEXA().toString(),
        colorObject: args[0]
      });
    }).on("swatch-select", (...args) => {
      this.fire("swatch-select", {
        color: args[0].toHEXA().toString(),
        colorObject: args[0]
      });
    });
    this.picker = picker;
  }
  setColor(color) {
    return this.picker.setColor(color);
  }
  render(props) {
    return /* @__PURE__ */ h("div", {
      ...extractClass(props, "o-color-picker")
    }, /* @__PURE__ */ h("div", {
      class: "picker"
    }));
  }
};
ColorPicker.css = css;
ColorPicker.defaultProps = {
  button: true,
  preview: true,
  opacity: true,
  hue: true,
  hex: true,
  rgba: true,
  hsla: true,
  hsva: false,
  input: true,
  clear: true,
  save: true,
  cmyk: false,
  default: "#07c160",
  swatches: [],
  inline: true,
  strings: {
    save: "Save",
    clear: "Clear"
  }
};
ColorPicker.propTypes = {
  button: Boolean,
  preview: Boolean,
  opacity: Boolean,
  hue: Boolean,
  hex: Boolean,
  rgba: Boolean,
  hsla: Boolean,
  hsva: Boolean,
  input: Boolean,
  clear: Boolean,
  save: Boolean,
  cmyk: Boolean,
  default: String,
  swatches: Array,
  inline: Boolean,
  strings: Object,
  width: String
};
ColorPicker = __decorateClass([
  tag("o-color-picker")
], ColorPicker);
