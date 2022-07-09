import{W as r,t as n,h as e,j as l,k as m,l as p,m as g,b as h,d as v,s as w,a as A}from"./index.b72266dd.js";import"./admin-docs.5b8c974c.js";import"./index.aaba6d37.js";import"./container.72a55c4c.js";import"./___vite-browser-external_commonjs-proxy.21afce51.js";var D=`\`\`\`js
//\u663E\u793A Loading
showLoading('\u52A0\u8F7D\u4E2D')

setTimeout(() => {
  //\u9690\u85CF Loading
  hideLoading()
}, 2000)
\`\`\`
`,F=`\`\`\`js
//\u663E\u793A Success
showSuccess('\u652F\u6301\u6210\u529F')

setTimeout(() => {
  //\u9690\u85CF Success
  hideSuccess()
}, 2000)
\`\`\`
`,L=`\`\`\`js
//\u663E\u793A Loading
showWarning('\u52A0\u8F7D\u4E2D')

setTimeout(() => {
  //\u9690\u85CF Loading
  hideWarning()
}, 2000)
\`\`\`
`,b=Object.defineProperty,f=Object.getOwnPropertyDescriptor,C=(u,o,i,t)=>{for(var s=t>1?void 0:t?f(o,i):o,a=u.length-1,d;a>=0;a--)(d=u[a])&&(s=(t?d(o,i,s):d(s))||s);return t&&s&&b(o,i,s),s};const E="toast-component";let c=class extends r{installed(){}render(){return n`px-2 w-full md:w-6/12`,e("code-demo-container",null,e("code-demo",{class:n``,title:"\u57FA\u672C",describe:"\u6700\u7B80\u5355\u7684 Loading",code:D},e("div",{slot:"demo",class:n`px-5 py-5`},e("o-button",{size:"mini",onclick:u=>{h(),setTimeout(()=>{v()},2e3)}},"\u663E\u793A Loading \u63D0\u793A"))),e("code-demo",{title:"\u4E0D\u540C\u5C3A\u5BF8",describe:"\u652F\u6301\u4F20\u5165 size \u63A7\u5236\u5927\u5C0F",code:F},e("div",{slot:"demo",class:n`px-5 py-5`},e("o-button",{size:"mini",onclick:u=>{p("\u652F\u4ED8\u6210\u529F"),setTimeout(()=>{g()},2e3)}},"\u663E\u793A Success \u63D0\u793A"))),e("code-demo",{title:"\u4E0D\u540C\u989C\u8272",describe:"\u652F\u6301\u4F20\u5165 color \u63A7\u5236\u989C\u8272",code:L},e("div",{slot:"demo",class:n`px-5 py-5`},e("o-button",{size:"mini",onclick:u=>{l("\u652F\u4ED8\u5931\u8D25"),setTimeout(()=>{m()},2e3)}},"\u663E\u793A Warning \u63D0\u793A"))))}};c.css=w.target;c=C([A(E)],c);export{c as default};
