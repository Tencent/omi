import{W as i,h as e,t as s,s as u,a as h}from"./index.21a106c3.js";import"./index.2c438922.js";import"./admin-docs.50d6c298.js";import"./index.af44ab89.js";import"./container.fda4d956.js";import"./___vite-browser-external_commonjs-proxy.1d27663c.js";var n=Object.defineProperty,x=Object.getOwnPropertyDescriptor,k=(r,o,t,l)=>{for(var c=l>1?void 0:l?x(o,t):o,d=r.length-1,a;d>=0;d--)(a=r[d])&&(c=(l?a(o,t,c):a(c))||c);return l&&c&&n(o,t,c),c};const m="checkbox-component";let b=class extends i{install(){}render(){return e("code-demo-container",null,e("code-demo",{title:"\u590D\u9009\u6846",describe:"\u57FA\u7840\u6F14\u793A",code:`
\`\`\`jsx
<o-checkbox label='Label'> </o-checkbox>

<o-checkbox checked={true} label='checked'> </o-checkbox>

<o-checkbox id="myCheckbox" indeterminate={true} label='indeterminate'> </o-checkbox>

<o-checkbox disabled={true} label='disabled'> </o-checkbox>

<o-checkbox disabled={true} checked={true} label='disabled checked={true}'> </o-checkbox>
\`\`\`
          `},e("div",{slot:"demo",class:s`flex flex-col justify-around  px-5 py-5`},e("div",null,e("o-checkbox",{label:"Label"}," ")),e("div",null,e("o-checkbox",{checked:!0,label:"checked"}," ")),e("div",null,e("o-checkbox",{id:"myCheckbox",indeterminate:!0,label:"indeterminate"}," ")),e("div",null,e("o-checkbox",{disabled:!0,label:"disabled"}," ")),e("div",null,e("o-checkbox",{disabled:!0,checked:!0,label:"disabled checked"}," ")))))}};b.css=u.target;b=k([h(m)],b);export{b as default};
