import{a as l,W as k,h as t,e as p}from"./index.9c37cd5e.js";var _=Object.defineProperty,x=Object.defineProperties,m=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,h=(e,n,o)=>n in e?_(e,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[n]=o,d=(e,n)=>{for(var o in n||(n={}))g.call(n,o)&&h(e,o,n[o]);if(s)for(var o of s(n))u.call(n,o)&&h(e,o,n[o]);return e},v=Object.defineProperty,f=Object.getOwnPropertyDescriptor;let i=class extends k{constructor(){super(...arguments),this.changeHandler=e=>{this.props.disabled||(this.props.checked=!this.props.checked,this.update(),this.fire("change",e.currentTarget.checked),this.props.indeterminate&&(this.props.checked=!0,this.props.indeterminate=!1,this.prevProps&&(this.prevProps.checked=!0,this.prevProps.indeterminate=!1),this.update(!0)))}}render(e){return t("div",d({},p(e,"o-checkbox",{"o-checkbox__disabled":e.disabled,"o-checkbox__indeterminate":e.indeterminate})),t("input",(n=d({type:"checkbox",disabled:e.disabled,onChange:this.changeHandler},function(o,r){if(typeof r!="string"){const a={};return r.forEach(c=>{o.hasOwnProperty(c)&&(a[c]=o[c])}),a}if(o.hasOwnProperty(r))return{[r]:o[r]}}(e,["checked","value","indeterminate"])),x(n,m({class:"o-checkbox__native-control",id:"checkbox"})))),t("div",{class:"o-checkbox__background"},t("svg",{class:"o-checkbox__checkmark",viewBox:"0 0 24 24"},t("path",{class:"o-checkbox__checkmark-path",fill:"none",d:"M1.73,12.91 8.1,19.28 22.79,4.59"})),t("div",{class:"o-checkbox__mixedmark"})),e.label&&t("label",{class:"o-checkbox__label",for:"checkbox"},e.label));var n}};i.css=`:host {
  display: inline-block;
}

* {
  box-sizing: border-box;
}

.o-checkbox {
  position: relative;
  font-size: 14px;
  line-height: 14px;
  height: 14px;
  white-space: nowrap;
}

.o-checkbox:hover {
  cursor: pointer;
}

.o-checkbox__native-control:enabled:checked ~ .o-checkbox__background,
.o-checkbox__native-control:enabled:indeterminate ~ .o-checkbox__background {
  border-color: #07c160;
  border-color: var(--o-primary, #07c160);
  background-color: #07c160;
  background-color: var(--o-primary, #07c160);
  opacity: 1;
}

.o-checkbox__indeterminate .o-checkbox__checkmark {
  opacity: 0;
}

.o-checkbox__checkmark {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  opacity: 1;
  transition: opacity 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  color: #ffffff;
}

.o-checkbox__checkmark-path {
  transition: stroke-dashoffset 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  stroke: currentColor;
  stroke-width: 3.12px;
  stroke-dashoffset: 29.78334;
  stroke-dasharray: 29.78334;
}

.o-checkbox__native-control:checked ~ .o-checkbox__background .o-checkbox__checkmark-path,
.o-checkbox__native-control:indeterminate ~ .o-checkbox__background .o-checkbox__checkmark-path {
  stroke-dashoffset: 0;
}

.o-checkbox__background {
  position: relative;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 45%;
  height: 45%;
  border: 2px solid currentColor;
  border-radius: 2px;
  background-color: transparent;
  pointer-events: none;
  will-change: background-color, border-color;
  transition: background-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1), border-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
}

.o-checkbox__background,
.o-checkbox__label {
  display: inline-block;
  height: 14px;
  vertical-align: middle;
}

.o-checkbox__background {
  width: 14px;
}

.o-checkbox__label {
  margin-left: 10px;
}

.o-checkbox__native-control:indeterminate ~ .o-checkbox__background .o-checkbox__mixedmark {
  transform: scaleX(1) rotate(0deg);
  opacity: 1;
}

.o-checkbox__mixedmark {
  width: 100%;
  height: 0;
  transform: scaleX(0) rotate(0deg);
  border: 1px solid white;
  top: 50%;
  position: relative;
  margin-top: -1px;
  opacity: 0;
  transition: opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
}

.o-checkbox__native-control {
  appearance: none;
  -webkit-appearance: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  opacity: 0;
  cursor: inherit;
}

.o-checkbox__native-control:enabled:not(:checked):not(:indeterminate) ~ .o-checkbox__background {
  background-color: transparent;
  border: 1px solid rgba(0, 0, 0, 0.54);
  color: white;
}

.o-checkbox__native-control:disabled:checked ~ .o-checkbox__background,
.o-checkbox__native-control:disabled:indeterminate ~ .o-checkbox__background {
  border-color: #07c160;
  border-color: var(--o-primary, #07c160);
  background-color: #07c160;
  background-color: var(--o-primary, #07c160);
  opacity: 0.5;
}

.o-checkbox__native-control:disabled:not(:checked):not(:indeterminate) ~ .o-checkbox__background {
  background-color: transparent;
  border: 1px solid rgba(0, 0, 0, 0.34);
  color: white;
}

.o-checkbox__disabled .o-checkbox__label {
  color: #888;
}

.o-checkbox__disabled:hover {
  cursor: not-allowed;
}`,i.propTypes={label:String,disabled:Boolean,indeterminate:Boolean,checked:Boolean,value:String},i=((e,n,o,r)=>{for(var a,c=r>1?void 0:r?f(n,o):n,b=e.length-1;b>=0;b--)(a=e[b])&&(c=(r?a(n,o,c):a(c))||c);return r&&c&&v(n,o,c),c})([l("o-checkbox")],i);
