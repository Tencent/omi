import{a as k,W as p,h as c,e as x,t as _,s as u}from"./index.2c96a3e1.js";import"./admin-docs.91f3583b.js";import"./index.fc3c29e3.js";import"./container.4e91b93f.js";var m=Object.defineProperty,g=Object.defineProperties,v=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable,s=(o,e,n)=>e in o?m(o,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):o[e]=n,h=(o,e)=>{for(var n in e||(e={}))f.call(e,n)&&s(o,n,e[n]);if(d)for(var n of d(e))y.call(e,n)&&s(o,n,e[n]);return o},w=Object.defineProperty,O=Object.getOwnPropertyDescriptor;let b=class extends p{constructor(){super(...arguments),this.changeHandler=o=>{this.props.disabled||(this.props.checked=!this.props.checked,this.update(),this.fire("change",o.currentTarget.checked),this.props.indeterminate&&(this.props.checked=!0,this.props.indeterminate=!1,this.prevProps&&(this.prevProps.checked=!0,this.prevProps.indeterminate=!1),this.update(!0)))}}render(o){return c("div",h({},x(o,"o-checkbox",{"o-checkbox__disabled":o.disabled,"o-checkbox__indeterminate":o.indeterminate})),c("input",(e=h({type:"checkbox",disabled:o.disabled,onChange:this.changeHandler},function(n,r){if(typeof r!="string"){const a={};return r.forEach(t=>{n.hasOwnProperty(t)&&(a[t]=n[t])}),a}if(n.hasOwnProperty(r))return{[r]:n[r]}}(o,["checked","value","indeterminate"])),g(e,v({class:"o-checkbox__native-control",id:"checkbox"})))),c("div",{class:"o-checkbox__background"},c("svg",{class:"o-checkbox__checkmark",viewBox:"0 0 24 24"},c("path",{class:"o-checkbox__checkmark-path",fill:"none",d:"M1.73,12.91 8.1,19.28 22.79,4.59"})),c("div",{class:"o-checkbox__mixedmark"})),o.label&&c("label",{class:"o-checkbox__label",for:"checkbox"},o.label));var e}};b.css=`:host {
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
}`,b.propTypes={label:String,disabled:Boolean,indeterminate:Boolean,checked:Boolean,value:String},b=((o,e,n,r)=>{for(var a,t=r>1?void 0:r?O(e,n):e,i=o.length-1;i>=0;i--)(a=o[i])&&(t=(r?a(e,n,t):a(t))||t);return r&&t&&w(e,n,t),t})([k("o-checkbox")],b);var P=Object.defineProperty,j=Object.getOwnPropertyDescriptor,z=(o,e,n,r)=>{for(var a=r>1?void 0:r?j(e,n):e,t=o.length-1,i;t>=0;t--)(i=o[t])&&(a=(r?i(e,n,a):i(a))||a);return r&&a&&P(e,n,a),a};const C="checkbox-component";let l=class extends p{install(){}render(){return c("code-demo-container",null,c("code-demo",{title:"\u590D\u9009\u6846",describe:"\u57FA\u7840\u6F14\u793A",code:`
\`\`\`jsx
<o-checkbox label='Label'> </o-checkbox>

<o-checkbox checked={true} label='checked'> </o-checkbox>

<o-checkbox id="myCheckbox" indeterminate={true} label='indeterminate'> </o-checkbox>

<o-checkbox disabled={true} label='disabled'> </o-checkbox>

<o-checkbox disabled={true} checked={true} label='disabled checked={true}'> </o-checkbox>
\`\`\`
          `},c("div",{slot:"demo",class:_`flex flex-col justify-around  px-5 py-5`},c("div",null,c("o-checkbox",{label:"Label"}," ")),c("div",null,c("o-checkbox",{checked:!0,label:"checked"}," ")),c("div",null,c("o-checkbox",{id:"myCheckbox",indeterminate:!0,label:"indeterminate"}," ")),c("div",null,c("o-checkbox",{disabled:!0,label:"disabled"}," ")),c("div",null,c("o-checkbox",{disabled:!0,checked:!0,label:"disabled checked"}," ")))))}};l.css=u.target;l=z([k(C)],l);export{l as default};
