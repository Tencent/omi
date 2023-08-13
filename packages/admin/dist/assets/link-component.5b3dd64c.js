import{W as u,h as e,t as d,s as c,a as p}from"./index.2b48b3a4.js";import"./index.esm.dc804846.js";import"./ac-unit-outlined.e53aa4eb.js";import"./accessible-rounded.8ce11e19.js";import"./admin-docs.754e7d21.js";import"./index.7201295b.js";import"./container.5cc2ff92.js";import"./encode.47cdd865.js";import"./___vite-browser-external_commonjs-proxy.2e3e84b6.js";var y=Object.defineProperty,k=Object.getOwnPropertyDescriptor,m=(i,o,r,l)=>{for(var n=l>1?void 0:l?k(o,r):o,t=i.length-1,a;t>=0;t--)(a=i[t])&&(n=(l?a(o,r,n):a(n))||n);return l&&n&&y(o,r,n),n};const b="link-component";let s=class extends u{install(){}render(){const i={breakInside:"avoid",padding:"0 0 0 0"};return e("code-demo-container",null,e("code-demo",{title:"\u6587\u5B57\u94FE\u63A5",describe:"Base",code:`
\`\`\`jsx
<o-link target="_blank" href="https://tencent.github.io/omi/">Default</o-link>
<o-link type="primary">Primary</o-link>
<o-link type="danger">Danger</o-link>
<o-link type="primary">
  <o-icon-ac-unit-outlined></o-icon-ac-unit-outlined> Icon
</o-link>
<o-link type="danger">Icon <o-icon-accessible-rounded></o-icon-accessible-rounded>
</o-link>
\`\`\`
          `,style:i},e("div",{slot:"demo",class:d`flex justify-around px-5 py-5`},e("o-link",{target:"_blank",href:"https://tencent.github.io/omi/"},"Default"),e("o-link",{type:"primary"},"Primary"),e("o-link",{type:"danger"},"Danger"),e("o-link",{type:"primary"},e("o-icon-ac-unit-outlined",null)," Icon"),e("o-link",{type:"danger"},"Icon ",e("o-icon-accessible-rounded",null)))),e("code-demo",{title:"\u7981\u7528",describe:"Disabled",code:`
\`\`\`jsx
<o-link disabled>Default</o-link>
<o-link disabled type="primary">Primary</o-link>
<o-link disabled type="danger">Danger</o-link>
<o-link disabled type="primary">
  <o-icon-ac-unit-outlined></o-icon-ac-unit-outlined> Icon
</o-link>
<o-link disabled type="danger">Icon <o-icon-accessible-rounded></o-icon-accessible-rounded>
</o-link>
\`\`\`
          `,style:i},e("div",{slot:"demo",class:d`flex justify-around px-5 py-5`},e("o-link",{disabled:!0},"Default"),e("o-link",{disabled:!0,type:"primary"},"Primary"),e("o-link",{disabled:!0,type:"danger"},"Danger"),e("o-link",{disabled:!0,type:"primary"},e("o-icon-ac-unit-outlined",null)," Icon"),e("o-link",{disabled:!0,type:"danger"},"Icon ",e("o-icon-accessible-rounded",null)))),e("code-demo",{title:"\u53BB\u4E0B\u5212\u7EBF",describe:"Underline False",code:'\n```jsx\n<o-link underline={0}>Default</o-link>\n<o-link underline={0} type="primary">Primary</o-link>\n<o-link underline={0} type="danger">Danger</o-link>\n```\n          ',style:i},e("div",{slot:"demo",class:d`flex justify-around px-5 py-5`},e("o-link",{underline:0},"Default"),e("o-link",{underline:0,type:"primary"},"Primary"),e("o-link",{underline:0,type:"danger"},"Danger"))))}};s.css=c.target;s=m([p(b)],s);export{s as default};
