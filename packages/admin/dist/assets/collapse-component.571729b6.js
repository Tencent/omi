import{W as i,h as u,t as s,s as d,a as A}from"./index.2b48b3a4.js";import"./index.7201295b.js";import"./admin-docs.754e7d21.js";import"./container.5cc2ff92.js";import"./encode.47cdd865.js";import"./___vite-browser-external_commonjs-proxy.2e3e84b6.js";var a=Object.defineProperty,r=Object.getOwnPropertyDescriptor,c=(o,E,t,F)=>{for(var e=F>1?void 0:F?r(E,t):E,p=o.length-1,l;p>=0;p--)(l=o[p])&&(e=(F?l(E,t,e):l(e))||e);return F&&e&&a(E,t,e),e};const D="collapse-component";let n=class extends i{constructor(){super(...arguments),this.openedA=!1,this.openedB=!1,this.openedC=!1}render(){const o={breakInside:"avoid",padding:"0 0 0 0"};return u("code-demo-container",null,u("code-demo",{title:"\u6298\u53E0",describe:"\u57FA\u7840\u6298\u53E0",code:`
\`\`\`jsx
<o-collapse
  opened={this.openedA}
  >
  <div>
    <p>\u4E00\u5B63\u5EA6\u751F\u4EA7\u539F\u6750\u6599\u91C7\u8D2D\u9879\u76EE \u5F00\u7968\u6210\u529F!</p>
    <p>\u4E8C\u5B63\u5EA6\u751F\u4EA7\u539F\u6750\u6599\u91C7\u8D2D\u9879\u76EE \u5F00\u7968\u6210\u529F!</p>
    <p>\u4E09\u5B63\u5EA6\u751F\u4EA7\u539F\u6750\u6599\u91C7\u8D2D\u9879\u76EE \u5F00\u7968\u6210\u529F\uFF01</p>
  </div>
</o-collapse>
\`\`\`
          `,style:o},u("div",{slot:"demo",class:s`px-5 py-5`},u("o-button",{size:"mini",onClick:()=>{this.openedA=!this.openedA,this.update()}},"toggle"),u("o-collapse",{opened:this.openedA},u("div",null,u("p",null,"\u4E00\u5B63\u5EA6\u751F\u4EA7\u539F\u6750\u6599\u91C7\u8D2D\u9879\u76EE \u5F00\u7968\u6210\u529F!"),u("p",null,"\u4E8C\u5B63\u5EA6\u751F\u4EA7\u539F\u6750\u6599\u91C7\u8D2D\u9879\u76EE \u5F00\u7968\u6210\u529F!"),u("p",null,"\u4E09\u5B63\u5EA6\u751F\u4EA7\u539F\u6750\u6599\u91C7\u8D2D\u9879\u76EE \u5F00\u7968\u6210\u529F\uFF01"))))),u("code-demo",{title:"\u6A2A\u5411\u6298\u53E0",describe:"\u901A\u8FC7 horizontal \u8BBE\u7F6E",code:`
\`\`\`jsx
<o-collapse
  horizontal
  opened={this.openedB}
  >
  <div style="max-height:70px;overflow:auto;">
    <p>\u4E00\u5B63\u5EA6\u751F\u4EA7\u539F\u6750\u6599\u91C7\u8D2D\u9879\u76EE \u5F00\u7968\u6210\u529F!</p>
    <p>\u4E8C\u5B63\u5EA6\u751F\u4EA7\u539F\u6750\u6599\u91C7\u8D2D\u9879\u76EE \u5F00\u7968\u6210\u529F!</p>
    <p>\u4E09\u5B63\u5EA6\u751F\u4EA7\u539F\u6750\u6599\u91C7\u8D2D\u9879\u76EE \u5F00\u7968\u6210\u529F\uFF01</p>
  </div>
</o-collapse>
\`\`\`
          `,style:o},u("div",{slot:"demo",class:s`px-5 py-5`},u("o-button",{size:"mini",onClick:()=>{this.openedB=!this.openedB,this.update()}},"toggle"),u("o-collapse",{horizontal:!0,opened:this.openedB},u("div",{style:"max-height:70px;overflow:auto;"},u("p",null,"\u4E00\u5B63\u5EA6\u751F\u4EA7\u539F\u6750\u6599\u91C7\u8D2D\u9879\u76EE \u5F00\u7968\u6210\u529F!"),u("p",null,"\u4E8C\u5B63\u5EA6\u751F\u4EA7\u539F\u6750\u6599\u91C7\u8D2D\u9879\u76EE \u5F00\u7968\u6210\u529F!"),u("p",null,"\u4E09\u5B63\u5EA6\u751F\u4EA7\u539F\u6750\u6599\u91C7\u8D2D\u9879\u76EE \u5F00\u7968\u6210\u529F\uFF01"))))),u("code-demo",{title:"\u65E0\u52A8\u753B\u6298\u53E0",describe:"\u901A\u8FC7 noAnimation \u63A7\u5236",code:`
\`\`\`jsx
<o-collapse
  noAnimation
  opened={this.openedC}
  >
  <div>
    <p>\u4E00\u5B63\u5EA6\u751F\u4EA7\u539F\u6750\u6599\u91C7\u8D2D\u9879\u76EE \u5F00\u7968\u6210\u529F!</p>
    <p>\u4E8C\u5B63\u5EA6\u751F\u4EA7\u539F\u6750\u6599\u91C7\u8D2D\u9879\u76EE \u5F00\u7968\u6210\u529F!</p>
    <p>\u4E09\u5B63\u5EA6\u751F\u4EA7\u539F\u6750\u6599\u91C7\u8D2D\u9879\u76EE \u5F00\u7968\u6210\u529F\uFF01</p>
  </div>
</o-collapse>
\`\`\`
          `,style:o},u("div",{slot:"demo",class:s`px-5 py-5`},u("o-button",{size:"mini",onClick:()=>{this.openedC=!this.openedC,this.update()}},"toggle"),u("o-collapse",{noAnimation:!0,opened:this.openedC},u("div",null,u("p",null,"\u4E00\u5B63\u5EA6\u751F\u4EA7\u539F\u6750\u6599\u91C7\u8D2D\u9879\u76EE \u5F00\u7968\u6210\u529F!"),u("p",null,"\u4E8C\u5B63\u5EA6\u751F\u4EA7\u539F\u6750\u6599\u91C7\u8D2D\u9879\u76EE \u5F00\u7968\u6210\u529F!"),u("p",null,"\u4E09\u5B63\u5EA6\u751F\u4EA7\u539F\u6750\u6599\u91C7\u8D2D\u9879\u76EE \u5F00\u7968\u6210\u529F\uFF01"))))))}};n.css=[d.target];n=c([A(D)],n);export{n as default};
