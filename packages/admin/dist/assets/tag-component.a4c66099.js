import{h as o,i as B,a as m,W as f,e as x,t as l,s as E}from"./index.f8921e1d.js";import"./admin-docs.793449c2.js";import"./index.fc30dd40.js";import"./container.e96c8a7b.js";import"./___vite-browser-external_commonjs-proxy.68225ef6.js";var h=Object.defineProperty,C=Object.defineProperties,v=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,F=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable,c=(e,t,a)=>t in e?h(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,y=(e,t)=>{for(var a in t||(t={}))F.call(t,a)&&c(e,a,t[a]);if(d)for(var a of d(t))D.call(t,a)&&c(e,a,t[a]);return e};const z=/\B([A-Z])/g;var p,b;p=o("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),B(("OIcon"+(b="Close")).replace(z,"-$1").toLowerCase(),e=>o("svg",y({viewBox:"0 0 24 24",title:b},e.props),p),{css:`:host {
  fill: currentColor;
  width: 1em;
  height: 1em;
  display: inline-block;
  vertical-align: -0.125em;
  transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  flex-shrink: 0;
  user-select: none;
}`});var w=Object.defineProperty,O=Object.getOwnPropertyDescriptor;let i=class extends f{constructor(){super(...arguments),this.closed=!1}render(e){console.log(e);const t=x(e,"o-tag",{["o-tag--"+e.size]:e.size,["o-tag--"+e.type]:e.type,"is-disabled":e.disabled,"is-closed":this.closed});return o("div",(a=y({},t),C(a,v({onClick:n=>e.onClick&&e.onClick(n)}))),o("slot",null),e.closable&&o("span",{class:"o-tag--suffix",onClick:n=>{this.closed=!0,this.update(),e.onClose&&e.onClose(n)}},o("o-icon-close",null)));var a}};i.css=`.o-tag {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  height: 30px;
  line-height: 28px;
  font-size: 12px;
  padding: 0 12px;
  margin: 0.5rem;
  color: #333;
  border: 1px solid #999;
  border-radius: 2px;
  background-color: #fcfcfc;
  animation: tag-fade 0.2s ease-in;
  opacity: 1;
  transition: all 0.2s ease-in;
}
.o-tag.is-disabled {
  color: #999;
  border-color: transparent;
}
.o-tag--suffix {
  cursor: pointer;
  transform: translateX(30px, 6);
}
.o-tag.is-closed {
  transform: translateX(15px);
  opacity: 0;
}
.o-tag--primary {
  border: 1px solid #07c160;
  background-color: rgba(7, 193, 96, 0.1);
  color: #07c160;
}
.o-tag--primary.is-disabled {
  color: rgba(7, 193, 96, 0.7);
}
.o-tag--success {
  border: 1px solid #07c160;
  background-color: rgba(7, 193, 96, 0.1);
  color: #07c160;
}
.o-tag--success.is-disabled {
  color: rgba(7, 193, 96, 0.7);
}
.o-tag--warning {
  border: 1px solid #f2711c;
  background-color: rgba(242, 113, 28, 0.1);
  color: #f2711c;
}
.o-tag--warning.is-disabled {
  color: rgba(242, 113, 28, 0.7);
}
.o-tag--danger {
  border: 1px solid #fa5151;
  background-color: rgba(250, 81, 81, 0.1);
  color: #fa5151;
}
.o-tag--danger.is-disabled {
  color: rgba(250, 81, 81, 0.7);
}
.o-tag--info {
  border: 1px solid #42b8dd;
  background-color: rgba(66, 184, 221, 0.1);
  color: #42b8dd;
}
.o-tag--info.is-disabled {
  color: rgba(66, 184, 221, 0.7);
}
.o-tag--medium {
  height: 28px;
  padding: 0 10px;
  line-height: 26px;
}
.o-tag--suffix {
  transform: translateX(3.5px);
}
.o-tag--small {
  height: 24px;
  padding: 0 8px;
  line-height: 22px;
}
.o-tag--suffix {
  transform: translateX(3px);
}
.o-tag--mini {
  height: 20px;
  padding: 0 5px;
  line-height: 18px;
}
.o-tag--suffix {
  transform: translateX(2.5px);
}
@keyframes tag-fade {
  from {
    transform: scale(0.1);
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}`,i.defaultProps={disabled:!1,size:"default",closable:!1},i.propTypes={disabled:Boolean,size:String,color:String,type:String,closable:Boolean},i=((e,t,a,n)=>{for(var s,r=n>1?void 0:n?O(t,a):t,u=e.length-1;u>=0;u--)(s=e[u])&&(r=(n?s(t,a,r):s(r))||r);return n&&r&&w(t,a,r),r})([m("o-tag")],i);var P=Object.defineProperty,j=Object.getOwnPropertyDescriptor,A=(e,t,a,n)=>{for(var s=n>1?void 0:n?j(t,a):t,r=e.length-1,u;r>=0;r--)(u=e[r])&&(s=(n?u(t,a,s):u(s))||s);return n&&s&&P(t,a,s),s};const k="tag-component";let g=class extends f{installed(){}render(){const e={breakInside:"avoid",padding:"0 0 0 0"};return o("code-demo-container",null,o("code-demo",{title:"\u6807\u7B7E",describe:"\u4E0D\u540C\u7C7B\u578B\u7684\u6807\u7B7E",code:`
\`\`\`html
<o-tag>\u9ED8\u8BA4</o-tag>
<o-tag type="success">\u6210\u529F</o-tag>
<o-tag type="info">\u4FE1\u606F</o-tag>
<o-tag type="warning">\u8B66\u544A</o-tag>
<o-tag type="danger">\u5371\u9669</o-tag>
\`\`\`
          `,style:e},o("div",{slot:"demo",class:l`px-5 py-5`},o("o-tag",null,"\u9ED8\u8BA4"),o("o-tag",{type:"success"},"\u6210\u529F"),o("o-tag",{type:"info"},"\u4FE1\u606F"),o("o-tag",{type:"warning"},"\u8B66\u544A"),o("o-tag",{type:"danger"},"\u5371\u9669"))),o("code-demo",{title:"\u7981\u7528",describe:"\u7981\u7528\u72B6\u6001\u4E0B\u7684\u5448\u73B0",code:`
\`\`\`html
<o-tag disabled>\u7981\u7528</o-tag>
<o-tag disabled type="success">\u6210\u529F</o-tag>
<o-tag disabled type="info">\u4FE1\u606F</o-tag>
<o-tag disabled type="warning">\u8B66\u544A</o-tag>
<o-tag disabled type="danger">\u5371\u9669</o-tag>
\`\`\`
                    `,style:e},o("div",{slot:"demo",class:l`px-5 py-5`},o("o-tag",{disabled:!0},"\u7981\u7528"),o("o-tag",{disabled:!0,type:"success"},"\u6210\u529F"),o("o-tag",{disabled:!0,type:"info"},"\u4FE1\u606F"),o("o-tag",{disabled:!0,type:"warning"},"\u8B66\u544A"),o("o-tag",{disabled:!0,type:"danger"},"\u5371\u9669"))),o("code-demo",{title:"\u5C3A\u5BF8",describe:"\u652F\u6301 4 \u79CD\u5C3A\u5BF8\u5927\u5C0F",code:`
\`\`\`html
<o-tag>\u9ED8\u8BA4\u6807\u7B7E</o-tag>
<o-tag size="medium">\u4E2D\u7B49\u6807\u7B7E</o-tag>
<o-tag size="small">\u5C0F\u578B\u6807\u7B7E</o-tag>
<o-tag size="mini">\u8D85\u5C0F\u6807\u7B7E</o-tag>
\`\`\`
             `,style:e},o("div",{slot:"demo",class:l`px-5 py-5`},o("o-tag",null,"\u9ED8\u8BA4\u6807\u7B7E"),o("o-tag",{size:"medium"},"\u4E2D\u7B49\u6807\u7B7E"),o("o-tag",{size:"small"},"\u5C0F\u578B\u6807\u7B7E"),o("o-tag",{size:"mini"},"\u8D85\u5C0F\u6807\u7B7E"))),o("code-demo",{title:"\u5173\u95ED",describe:"\u5173\u95ED\u6807\u7B7E",code:`
\`\`\`html
<o-tag closable>\u5173\u95ED\u6807\u7B7E</o-tag>
<o-tag size="medium" closable>\u4E2D\u7B49\u6807\u7B7E</o-tag>
<o-tag size="small" closable>\u5C0F\u578B\u6807\u7B7E</o-tag>
<o-tag size="mini" closable>\u8D85\u5C0F\u6807\u7B7E</o-tag>
\`\`\`
             `,style:e},o("div",{slot:"demo",class:l`px-5 py-5`},o("o-tag",{closable:!0},"\u5173\u95ED\u6807\u7B7E"),o("o-tag",{size:"medium",closable:!0},"\u4E2D\u7B49\u6807\u7B7E"),o("o-tag",{size:"small",closable:!0},"\u5C0F\u578B\u6807\u7B7E"),o("o-tag",{size:"mini",closable:!0},"\u8D85\u5C0F\u6807\u7B7E"))))}};g.css=[E.target,"o-tag{ margin: 4px }"];g=A([m(k)],g);export{g as default};
