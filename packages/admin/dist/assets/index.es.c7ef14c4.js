import{a as p,W as b,h as t,e as x}from"./index.1cb61231.js";var h=Object.defineProperty,d=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,c=(o,e,n)=>e in o?h(o,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):o[e]=n,u=Object.defineProperty,F=Object.getOwnPropertyDescriptor;let i=class extends b{constructor(){super(...arguments),this.onIconClick=(o,e,n)=>{this.fire("change",{action:n,index:e,evt:o.currentTarget})}}render(o){return t("div",((e,n)=>{for(var r in n||(n={}))g.call(n,r)&&c(e,r,n[r]);if(d)for(var r of d(n))f.call(n,r)&&c(e,r,n[r]);return e})({},x(o,"o-card",{["is-shadow-"+o.hoverable]:o.hoverable,"is-border":o.bordered})),t("slot",{name:"cover"},t("div",{class:"o-card-header"},t("div",{class:"o-card-title"},o.title),t("div",{class:"o-card-extra"},t("slot",{name:"extra"})))),t("div",{class:"o-card-body"},t("slot",null)),o.actions?t("div",{class:"o-card-footer"},o.actions.map((e,n)=>(this._iconTag="o-icon-"+e.icon,t("button",{onClick:r=>{this.onIconClick(r,n,o.actions[n])},class:"o-card-btn"},t(this._iconTag,{class:"icon"}))))):null)}};i.css=`:host {
  display: inline-block;
}

:host([block]) {
  display: block;
}

.o-card {
  display: flex;
  flex-direction: column;
  background: #FFF;
}
.o-card.is-border {
  border: 1px solid #EFEFEF;
}
.o-card.is-shadow-always {
  box-shadow: 0 1px 2px -2px #00000029, 0 3px 6px #0000001f, 0 5px 12px 4px #00000017;
}
.o-card.is-shadow-true:hover {
  box-shadow: 0 1px 2px -2px #00000029, 0 3px 6px #0000001f, 0 5px 12px 4px #00000017;
  transition: all 0.3s;
}

.o-card-header {
  min-height: 48px;
  padding: 0 24px;
  border-bottom: 1px solid #EFEFEF;
  border-radius: 2px 2px 0 0;
}

.o-card-title {
  float: left;
  padding: 16px 0;
  font-weight: 500;
  font-size: 18px;
}

.o-card-extra {
  float: right;
  margin-left: auto;
  padding: 16px 0;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
}

.o-card-body {
  margin: 12px 24px;
  font-weight: 200;
  font-size: 14px;
  line-height: 1.6;
}

.o-card-footer {
  height: 56px;
  display: flex;
  justify-content: center;
  background: #FFF;
}

.o-card-btn {
  flex: 1;
  appearance: none;
  -webkit-appearance: none;
  position: relative;
  cursor: pointer;
  outline: none;
  border-top: 1px solid #EFEFEF;
  border-right: 1px solid #EFEFEF;
  border-left: none;
  border-bottom: none;
  background: #FFF;
  color: rgba(0, 0, 0, 0.54);
  padding: 6px 12px 8px;
}
.o-card-btn:last-child {
  border-right: none;
}
.o-card-btn:hover {
  background: #EFEFEF;
  color: #07C160;
}

.icon {
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: block;
  margin: 0 auto;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-feature-settings: "liga";
  -webkit-font-smoothing: antialiased;
}`,i.defaultProps={title:"",hoverable:"true",bordered:!0},i.propTypes={title:String,hoverable:String,actions:Array,bordered:Boolean},i=((o,e,n,r)=>{for(var s,a=r>1?void 0:r?F(e,n):e,l=o.length-1;l>=0;l--)(s=o[l])&&(a=(r?s(e,n,a):s(a))||a);return r&&a&&u(e,n,a),a})([p("o-card")],i);
