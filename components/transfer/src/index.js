(function(t,d){typeof exports=="object"&&typeof module!="undefined"?d(require("omi")):typeof define=="function"&&define.amd?define(["omi"],d):(t=typeof globalThis!="undefined"?globalThis:t||self,d(t.omi))})(this,function(t){"use strict";const d=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function a(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerpolicy&&(n.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?n.credentials="include":r.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(r){if(r.ep)return;r.ep=!0;const n=a(r);fetch(r.href,n)}};var f=`:root{--bg1: #ecf0f1;--border1: #bdc3c7}.transferBox{width:200px;height:300px;float:left;border:solid .5px #bdc3c7;border-radius:5px;text-align:left;overflow:hidden}.transferBox ul li{width:calc(100% - 10px);padding-left:10px}.transferBox ul{padding-inline-start:0;overflow:auto;height:calc(100% - 40px);margin:0}.transferButton{width:200px;height:300px;float:left;position:relative;display:flex}o-button{margin:2px}.transferButtonBody{position:absolute;height:40px;left:50%;top:50%;width:fit-content;width:-webkit-fit-content;width:-moz-fit-content;transform:translate(-50%) translateY(-50%)}li{list-style:none}.transferBoxHeader{width:calc(100% - 10px);padding-left:10px;height:30px;padding-bottom:10px;background:#ecf0f1;font-size:15px;display:flex;align-items:flex-end}button{width:50px;height:40px}.headerLeft{width:150px;overflow:hidden}.numberIdea{height:30px;font-size:10px;color:#7f8c8d;margin-top:7px;margin-right:5px;display:flex;align-items:flex-end;transform:scale(.9)}
`,g=Object.defineProperty,k=Object.defineProperties,v=Object.getOwnPropertyDescriptors,h=Object.getOwnPropertySymbols,x=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,u=(e,o,a)=>o in e?g(e,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[o]=a,p=(e,o)=>{for(var a in o||(o={}))x.call(o,a)&&u(e,a,o[a]);if(h)for(var a of h(o))m.call(o,a)&&u(e,a,o[a]);return e},y=Object.defineProperty,_=Object.getOwnPropertyDescriptor;let b=class extends t.WeElement{constructor(){super(...arguments),this.changeHandler=e=>{this.props.disabled||(this.props.checked=!this.props.checked,this.update(),this.fire("change",e.currentTarget.checked),this.props.indeterminate&&(this.props.checked=!0,this.props.indeterminate=!1,this.prevProps&&(this.prevProps.checked=!0,this.prevProps.indeterminate=!1),this.update(!0)))}}render(e){return t.h("div",p({},t.extractClass(e,"o-checkbox",{"o-checkbox__disabled":e.disabled,"o-checkbox__indeterminate":e.indeterminate})),t.h("input",(o=p({type:"checkbox",disabled:e.disabled,onChange:this.changeHandler},function(a,i){if(typeof i!="string"){const r={};return i.forEach(n=>{a.hasOwnProperty(n)&&(r[n]=a[n])}),r}if(a.hasOwnProperty(i))return{[i]:a[i]}}(e,["checked","value","indeterminate"])),k(o,v({class:"o-checkbox__native-control",id:"checkbox"})))),t.h("div",{class:"o-checkbox__background"},t.h("svg",{class:"o-checkbox__checkmark",viewBox:"0 0 24 24"},t.h("path",{class:"o-checkbox__checkmark-path",fill:"none",d:"M1.73,12.91 8.1,19.28 22.79,4.59"})),t.h("div",{class:"o-checkbox__mixedmark"})),e.label&&t.h("label",{class:"o-checkbox__label",for:"checkbox"},e.label));var o}};b.css=`:host {
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
}`,b.propTypes={label:String,disabled:Boolean,indeterminate:Boolean,checked:Boolean,value:String},b=((e,o,a,i)=>{for(var r,n=i>1?void 0:i?_(o,a):o,c=e.length-1;c>=0;c--)(r=e[c])&&(n=(i?r(o,a,n):r(n))||n);return i&&n&&y(o,a,n),n})([t.tag("o-checkbox")],b),function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function a(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerpolicy&&(n.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?n.credentials="include":r.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(r){if(r.ep)return;r.ep=!0;const n=a(r);fetch(r.href,n)}}();var w=(()=>`:host{display:inline-block}:host([block]){display:block}.o-button{display:inline-block;line-height:1;white-space:nowrap;cursor:pointer;background:#fff;border:1px solid #dcdfe6;color:#606266;-webkit-appearance:none;text-align:center;box-sizing:border-box;outline:none;margin:0;transition:.1s;font-weight:500;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;padding:12px 20px;font-size:14px;border-radius:4px}.o-button:hover{border-color:#07c16061;border-color:var(--o-primary-fade-some, rgba(7, 193, 96, .382));color:#07c160;color:var(--o-primary, #07c160);background-color:#07c1601a;background-color:var(--o-primary-fade-lot, rgba(7, 193, 96, .1))}.o-button:active{color:#07c160;color:var(--o-primary, #07c160);border-color:#07c160;border-color:var(--o-primary, #07c160);outline:none}.o-button-medium{padding:10px 20px;font-size:14px;border-radius:4px}.o-button-small{padding:9px 15px;font-size:12px;border-radius:3px}.o-button-mini{padding:7px 15px;font-size:12px;border-radius:3px}.o-button.is-round{border-radius:20px}.o-button.is-circle{border-radius:20px;padding:12px}.o-button.is-disabled,.o-button.is-disabled:focus,.o-button.is-disabled:hover{color:#c0c4cc;cursor:not-allowed;background-image:none;background-color:#fff;border-color:#ebeef5}.o-button.is-block{display:block;width:100%}.o-button-primary{color:#fff;background-color:var(--o-primary, #07c160);border-color:var(--o-primary, #07c160)}.o-button-primary:disabled,.o-button-primary:disabled:hover{background-color:var(--o-primary-fade-lot, rgba(7, 193, 96, .1))}.o-button-primary.is-plain{color:var(--o-primary, #07c160);background-color:var(--o-primary-fade-lot, rgba(7, 193, 96, .1));border-color:var(--o-primary-fade-some, rgba(7, 193, 96, .382))}.o-button-primary:hover{background-color:var(--o-primary-fade-little, rgba(7, 193, 96, .618));border-color:var(--o-primary-fade-little, rgba(7, 193, 96, .618));color:#fff}.o-button-primary:active{background-color:var(--o-primary-active, #059048);border-color:var(--o-primary-active, #059048);color:#fff}.o-button-success{color:#fff;background-color:var(--o-success, #07c160);border-color:var(--o-success, #07c160)}.o-button-success:disabled,.o-button-success:disabled:hover{background-color:var(--o-success-fade-lot, rgba(7, 193, 96, .1))}.o-button-success.is-plain{color:var(--o-success, #07c160);background-color:var(--o-success-fade-lot, rgba(7, 193, 96, .1));border-color:var(--o-success-fade-some, rgba(7, 193, 96, .382))}.o-button-success:hover{background-color:var(--o-success-fade-little, rgba(7, 193, 96, .618));border-color:var(--o-success-fade-little, rgba(7, 193, 96, .618));color:#fff}.o-button-success:active{background-color:var(--o-success-active, #059048);border-color:var(--o-success-active, #059048);color:#fff}.o-button-warning{color:#fff;background-color:var(--o-warning, #f2711c);border-color:var(--o-warning, #f2711c)}.o-button-warning:disabled,.o-button-warning:disabled:hover{background-color:var(--o-warning-fade-lot, rgba(242, 113, 28, .1))}.o-button-warning.is-plain{color:var(--o-warning, #f2711c);background-color:var(--o-warning-fade-lot, rgba(242, 113, 28, .1));border-color:var(--o-warning-fade-some, rgba(242, 113, 28, .382))}.o-button-warning:hover{background-color:var(--o-warning-fade-little, rgba(242, 113, 28, .618));border-color:var(--o-warning-fade-little, rgba(242, 113, 28, .618));color:#fff}.o-button-warning:active{background-color:var(--o-warning-active, #cf590c);border-color:var(--o-warning-active, #cf590c);color:#fff}.o-button-danger{color:#fff;background-color:var(--o-danger, #fa5151);border-color:var(--o-danger, #fa5151)}.o-button-danger:disabled,.o-button-danger:disabled:hover{background-color:var(--o-danger-fade-lot, rgba(250, 81, 81, .1))}.o-button-danger.is-plain{color:var(--o-danger, #fa5151);background-color:var(--o-danger-fade-lot, rgba(250, 81, 81, .1));border-color:var(--o-danger-fade-some, rgba(250, 81, 81, .382))}.o-button-danger:hover{background-color:var(--o-danger-fade-little, rgba(250, 81, 81, .618));border-color:var(--o-danger-fade-little, rgba(250, 81, 81, .618));color:#fff}.o-button-danger:active{background-color:var(--o-danger-active, #f91f1f);border-color:var(--o-danger-active, #f91f1f);color:#fff}.o-button-info{color:#fff;background-color:var(--o-info, #42b8dd);border-color:var(--o-info, #42b8dd)}.o-button-info:disabled,.o-button-info:disabled:hover{background-color:var(--o-info-fade-lot, rgba(66, 184, 221, .1))}.o-button-info.is-plain{color:var(--o-info, #42b8dd);background-color:var(--o-info-fade-lot, rgba(66, 184, 221, .1));border-color:var(--o-info-fade-some, rgba(66, 184, 221, .382))}.o-button-info:hover{background-color:var(--o-info-fade-little, rgba(66, 184, 221, .618));border-color:var(--o-info-fade-little, rgba(66, 184, 221, .618));color:#fff}.o-button-info:active{background-color:var(--o-info-active, #24a1c8);border-color:var(--o-info-active, #24a1c8);color:#fff}.loading{width:1em;height:1em;display:inline-block;animation:loading 1s steps(12,end) infinite;vertical-align:-.125em}@-webkit-keyframes loading{0%{transform:rotate3d(0,0,1,0)}to{transform:rotate3d(0,0,1,360deg)}}@keyframes loading{0%{transform:rotate3d(0,0,1,0)}to{transform:rotate3d(0,0,1,360deg)}}
`)(),C=Object.freeze(Object.defineProperty({__proto__:null,default:w},Symbol.toStringTag,{value:"Module"})),O=Object.defineProperty,V=Object.getOwnPropertyDescriptor,B=(e,o,a,i)=>{for(var r=i>1?void 0:i?V(o,a):o,n=e.length-1,c;n>=0;n--)(c=e[n])&&(r=(i?c(o,a,r):c(r))||r);return i&&r&&O(o,a,r),r};let l=class extends t.WeElement{render(e){return t.h("button",{disabled:e.disabled,...t.extractClass(e,"o-button",{["o-button-"+e.type]:e.type,["o-button-"+e.size]:e.size,"is-plain":e.plain,"is-round":e.round,"is-circle":e.circle,"is-disabled":e.disabled,"is-block":e.block}),type:e.nativeType},e.loading&&[t.h("svg",{class:"loading",viewBox:"0 0 1024 1024",focusable:"false","data-icon":"loading",width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},t.h("path",{d:"M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"}))," "],e.text,t.h("slot",null))}};l.css=C,l.defaultProps={plain:!1,round:!1,circle:!1,loading:!1,disabled:!1,autofocus:!1,nativeType:"button",block:!1},l.propTypes={size:String,type:String,plain:Boolean,round:Boolean,circle:Boolean,loading:Boolean,disabled:Boolean,icon:String,autofocus:Boolean,nativeType:String,block:Boolean,text:String},l=B([t.tag("o-button")],l);var N=Object.defineProperty,P=Object.getOwnPropertyDescriptor,j=(e,o,a,i)=>{for(var r=i>1?void 0:i?P(o,a):o,n=e.length-1,c;n>=0;n--)(c=e[n])&&(r=(i?c(o,a,r):c(r))||r);return i&&r&&N(o,a,r),r};const z="o-transfer";let s=class extends t.WeElement{constructor(){super(...arguments),this.numberUpdata=()=>{this.props.dataNumber=this.props.data.length-this.props.theValue.length,this.props.valueNumber=this.props.theValue.length},this.findIndex=(e,o)=>{let a=-1;return o.forEach((i,r)=>{i.key==e&&(a=r)}),a},this.getDataNumber=()=>{let e=0;return this.props.data.map(o=>{this.props.theValue.indexOf(o.key)==-1&&"disable"in o&&o.disable&&e++}),this.props.data.length-this.props.theValue.length-e},this.gettheValueNumber=()=>{let e=0;return this.props.data.map(o=>{this.props.theValue.indexOf(o.key)!=-1&&"disable"in o&&o.disable&&e++}),this.props.theValue.length-e},this.labelClick=e=>{this.props.beClick1.indexOf(e)==-1?this.props.beClick1.push(e):this.props.beClick1.splice(this.props.beClick1.indexOf(e),1),this.forceUpdate()},this.theValueLableClick=e=>{this.props.beClick2.indexOf(e)==-1?this.props.beClick2.push(e):this.props.beClick2.splice(this.props.beClick2.indexOf(e),1),this.forceUpdate()},this.arrowClick=()=>{for(;this.props.beClick2.length;)this.props.beClick2.pop(),this.props.theValue.pop();this.numberUpdata(),this.forceUpdate()},this.forwardClick=()=>{for(;this.props.beClick1.length;)this.props.theValue.push(this.props.beClick1[this.props.beClick1.length-1]),this.props.beClick1.pop();this.numberUpdata(),this.forceUpdate()},this.SelectAll=()=>{if(this.props.beClick1.length<this.getDataNumber())this.props.data.map((e,o)=>{this.props.theValue.indexOf(e.key)==-1&&this.props.beClick1.indexOf(e.key)==-1&&(!("disable"in this.props.data[o])||this.props.data[o].disable!=!0)&&this.props.beClick1.push(e.key)});else for(;this.props.beClick1.length;)this.props.beClick1.pop();this.forceUpdate()},this.SelecttheValueAll=()=>{if(this.props.beClick2.length<this.gettheValueNumber())this.props.theValue.map(e=>{this.props.beClick2.indexOf(e)==-1&&(!("disable"in this.props.data[this.findIndex(e,this.props.data)])||this.props.data[this.findIndex(e,this.props.data)].disable!=!0)&&this.props.beClick2.push(e)});else for(;this.props.beClick2.length;)this.props.beClick2.pop();this.forceUpdate()},this.judgeDataChecked=()=>this.getDataNumber()!=0&&this.getDataNumber()==this.props.beClick1.length,this.judgeDataindeterminate=()=>this.props.beClick1.length>0&&this.getDataNumber()>this.props.beClick1.length,this.judgetheValueChecked=()=>this.gettheValueNumber()!=0&&this.gettheValueNumber()==this.props.beClick2.length,this.judgetheValueindeterminate=()=>this.props.beClick2.length>0&&this.gettheValueNumber()>this.props.beClick2.length}install(){this.props.value.map(e=>{this.props.theValue.push(e)}),this.numberUpdata()}render(e){return t.h(t.h.f,null,t.h("div",{class:"transferBox"},t.h("div",{class:"transferBoxHeader"},t.h("div",{class:"headerLeft"},t.h("o-checkbox",{label:e.titles[0],checked:this.judgeDataChecked(),indeterminate:this.judgeDataindeterminate(),onchange:this.SelectAll})),t.h("div",{class:"numberIdea"},e.beClick1.length,"/",e.dataNumber)),t.h("ul",null,e.data.map(o=>e.theValue.indexOf(o.key)===-1&&t.h("li",null,t.h("o-checkbox",{label:o.table,disabled:o.disable,checked:e.beClick1.indexOf(o.key)!=-1,onChange:()=>this.labelClick(o.key)}))))),t.h("div",{class:"transferButton"},t.h("div",{class:"transferButtonBody"},t.h("o-button",{type:"primary",onClick:this.arrowClick},"<"),t.h("o-button",{type:"primary",onClick:this.forwardClick},">"))),t.h("div",{class:"transferBox"},t.h("div",{class:"transferBoxHeader"},t.h("div",{class:"headerLeft"},t.h("o-checkbox",{label:e.titles[1],checked:this.judgetheValueChecked(),indeterminate:this.judgetheValueindeterminate(),onchange:this.SelecttheValueAll})),t.h("div",{class:"numberIdea"},e.beClick2.length," / ",e.valueNumber)),t.h("ul",null,e.data.map(o=>e.theValue.indexOf(o.key)!==-1&&t.h("li",null,t.h("o-checkbox",{label:o.table,disabled:o.disable,onChange:()=>this.theValueLableClick(o.key),checked:e.beClick2.indexOf(o.key)!=-1}))))))}};s.css=f,s.defaultProps={data:[],theValue:[],value:[],titles:["\u5217\u88681","\u5217\u88682"],beClick1:[],beClick2:[],dataNumber:0,valueNumber:0},s.propTypes={data:Array,theValue:Array,value:Array,titles:Array,beClick1:Array,beClick2:Array,dataNumber:Number,valueNumber:Number},s=j([t.tag(z)],s)});
