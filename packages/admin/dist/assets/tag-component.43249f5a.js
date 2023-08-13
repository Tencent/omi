import{h as e,i as p,W as c,e as b,a as g,t as n,s as f}from"./index.2b48b3a4.js";import"./admin-docs.754e7d21.js";import"./index.7201295b.js";import"./container.5cc2ff92.js";import"./encode.47cdd865.js";import"./___vite-browser-external_commonjs-proxy.2e3e84b6.js";var m=Object.defineProperty,x=(o,t,a)=>t in o?m(o,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):o[t]=a,B=(o,t,a)=>(x(o,typeof t!="symbol"?t+"":t,a),a),y=`.o-tag{display:inline-flex;justify-content:center;align-items:center;box-sizing:border-box;height:30px;line-height:28px;font-size:12px;padding:0 12px;margin:.5rem;color:#333;border:1px solid #999;border-radius:2px;background-color:#fcfcfc;animation:tag-fade .2s ease-in;opacity:1;transition:all .2s ease-in}.o-tag.is-disabled{color:#999;border-color:transparent}.o-tag--suffix{cursor:pointer;transform:translateX(30px,6)}.o-tag.is-closed{transform:translate(15px);opacity:0}.o-tag--primary{border:1px solid #07c160;background-color:#07c1601a;color:#07c160}.o-tag--primary.is-disabled{color:#07c160b3}.o-tag--success{border:1px solid #07c160;background-color:#07c1601a;color:#07c160}.o-tag--success.is-disabled{color:#07c160b3}.o-tag--warning{border:1px solid #f2711c;background-color:#f2711c1a;color:#f2711c}.o-tag--warning.is-disabled{color:#f2711cb3}.o-tag--danger{border:1px solid #fa5151;background-color:#fa51511a;color:#fa5151}.o-tag--danger.is-disabled{color:#fa5151b3}.o-tag--info{border:1px solid #42b8dd;background-color:#42b8dd1a;color:#42b8dd}.o-tag--info.is-disabled{color:#42b8ddb3}.o-tag--medium{height:28px;padding:0 10px;line-height:26px}.o-tag--suffix{transform:translate(3.5px)}.o-tag--small{height:24px;padding:0 8px;line-height:22px}.o-tag--suffix{transform:translate(3px)}.o-tag--mini{height:20px;padding:0 5px;line-height:18px}.o-tag--suffix{transform:translate(2.5px)}@keyframes tag-fade{0%{transform:scale(.1);opacity:0}to{opacity:1}}
`;const E=/\B([A-Z])/g,h=function(o){return o.replace(E,"-$1").toLowerCase()};function C(o,t){var a;p(h("OIcon"+t),(a=class extends c{render(){return e("svg",{viewBox:"0 0 24 24"},o)}},B(a,"css",`:host {
  fill: currentColor;
  width: 1em;
  height: 1em;
  display: inline-block;
  vertical-align: -0.125em;
  transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  flex-shrink: 0;
  user-select: none;
}`),a))}C(e("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");var v=Object.defineProperty,F=Object.getOwnPropertyDescriptor,D=(o,t,a,u)=>{for(var s=u>1?void 0:u?F(t,a):t,i=o.length-1,l;i>=0;i--)(l=o[i])&&(s=(u?l(t,a,s):l(s))||s);return u&&s&&v(t,a,s),s};let r=class extends c{constructor(){super(...arguments),this.closed=!1}render(o){const t=b(o,"o-tag",{["o-tag--"+o.size]:o.size,["o-tag--"+o.type]:o.type,"is-disabled":o.disabled,"is-closed":this.closed});return e("div",{...t,onClick:a=>o.onClick&&o.onClick(a)},e("slot",null),o.closable&&e("span",{class:"o-tag--suffix",onClick:a=>{this.closed=!0,this.update(),o.onClose&&o.onClose(a)}},e("o-icon-close",null)))}};r.css=y;r.defaultProps={disabled:!1,size:"default",closable:!1};r.propTypes={disabled:Boolean,size:String,color:String,type:String,closable:Boolean};r=D([g("o-tag")],r);var _=Object.defineProperty,z=Object.getOwnPropertyDescriptor,w=(o,t,a,u)=>{for(var s=u>1?void 0:u?z(t,a):t,i=o.length-1,l;i>=0;i--)(l=o[i])&&(s=(u?l(t,a,s):l(s))||s);return u&&s&&_(t,a,s),s};const P="tag-component";let d=class extends c{installed(){}render(){const o={breakInside:"avoid",padding:"0 0 0 0"};return e("code-demo-container",null,e("code-demo",{title:"\u6807\u7B7E",describe:"\u4E0D\u540C\u7C7B\u578B\u7684\u6807\u7B7E",code:`
\`\`\`html
<o-tag>\u9ED8\u8BA4</o-tag>
<o-tag type="success">\u6210\u529F</o-tag>
<o-tag type="info">\u4FE1\u606F</o-tag>
<o-tag type="warning">\u8B66\u544A</o-tag>
<o-tag type="danger">\u5371\u9669</o-tag>
\`\`\`
          `,style:o},e("div",{slot:"demo",class:n`px-5 py-5`},e("o-tag",null,"\u9ED8\u8BA4"),e("o-tag",{type:"success"},"\u6210\u529F"),e("o-tag",{type:"info"},"\u4FE1\u606F"),e("o-tag",{type:"warning"},"\u8B66\u544A"),e("o-tag",{type:"danger"},"\u5371\u9669"))),e("code-demo",{title:"\u7981\u7528",describe:"\u7981\u7528\u72B6\u6001\u4E0B\u7684\u5448\u73B0",code:`
\`\`\`html
<o-tag disabled>\u7981\u7528</o-tag>
<o-tag disabled type="success">\u6210\u529F</o-tag>
<o-tag disabled type="info">\u4FE1\u606F</o-tag>
<o-tag disabled type="warning">\u8B66\u544A</o-tag>
<o-tag disabled type="danger">\u5371\u9669</o-tag>
\`\`\`
                    `,style:o},e("div",{slot:"demo",class:n`px-5 py-5`},e("o-tag",{disabled:!0},"\u7981\u7528"),e("o-tag",{disabled:!0,type:"success"},"\u6210\u529F"),e("o-tag",{disabled:!0,type:"info"},"\u4FE1\u606F"),e("o-tag",{disabled:!0,type:"warning"},"\u8B66\u544A"),e("o-tag",{disabled:!0,type:"danger"},"\u5371\u9669"))),e("code-demo",{title:"\u5C3A\u5BF8",describe:"\u652F\u6301 4 \u79CD\u5C3A\u5BF8\u5927\u5C0F",code:`
\`\`\`html
<o-tag>\u9ED8\u8BA4\u6807\u7B7E</o-tag>
<o-tag size="medium">\u4E2D\u7B49\u6807\u7B7E</o-tag>
<o-tag size="small">\u5C0F\u578B\u6807\u7B7E</o-tag>
<o-tag size="mini">\u8D85\u5C0F\u6807\u7B7E</o-tag>
\`\`\`
             `,style:o},e("div",{slot:"demo",class:n`px-5 py-5`},e("o-tag",null,"\u9ED8\u8BA4\u6807\u7B7E"),e("o-tag",{size:"medium"},"\u4E2D\u7B49\u6807\u7B7E"),e("o-tag",{size:"small"},"\u5C0F\u578B\u6807\u7B7E"),e("o-tag",{size:"mini"},"\u8D85\u5C0F\u6807\u7B7E"))),e("code-demo",{title:"\u5173\u95ED",describe:"\u5173\u95ED\u6807\u7B7E",code:`
\`\`\`html
<o-tag closable>\u5173\u95ED\u6807\u7B7E</o-tag>
<o-tag size="medium" closable>\u4E2D\u7B49\u6807\u7B7E</o-tag>
<o-tag size="small" closable>\u5C0F\u578B\u6807\u7B7E</o-tag>
<o-tag size="mini" closable>\u8D85\u5C0F\u6807\u7B7E</o-tag>
\`\`\`
             `,style:o},e("div",{slot:"demo",class:n`px-5 py-5`},e("o-tag",{closable:!0},"\u5173\u95ED\u6807\u7B7E"),e("o-tag",{size:"medium",closable:!0},"\u4E2D\u7B49\u6807\u7B7E"),e("o-tag",{size:"small",closable:!0},"\u5C0F\u578B\u6807\u7B7E"),e("o-tag",{size:"mini",closable:!0},"\u8D85\u5C0F\u6807\u7B7E"))))}};d.css=[f.target,"o-tag{ margin: 4px }"];d=w([g(P)],d);export{d as default};
