import{W as i,h as e,t as s,s as u,a as h}from"./index.de005dcb.js";import"./index.ea61b45e.js";import"./admin-docs.67a445ae.js";import"./index.5a8b6bde.js";import"./container.61250fb3.js";import"./___vite-browser-external_commonjs-proxy.48cf562a.js";var n=Object.defineProperty,x=Object.getOwnPropertyDescriptor,k=(r,o,t,l)=>{for(var c=l>1?void 0:l?x(o,t):o,d=r.length-1,a;d>=0;d--)(a=r[d])&&(c=(l?a(o,t,c):a(c))||c);return l&&c&&n(o,t,c),c};const m="checkbox-component";let b=class extends i{install(){}render(){return e("code-demo-container",null,e("code-demo",{title:"\u590D\u9009\u6846",describe:"\u57FA\u7840\u6F14\u793A",code:`
\`\`\`jsx
<o-checkbox label='Label'> </o-checkbox>

<o-checkbox checked={true} label='checked'> </o-checkbox>

<o-checkbox id="myCheckbox" indeterminate={true} label='indeterminate'> </o-checkbox>

<o-checkbox disabled={true} label='disabled'> </o-checkbox>

<o-checkbox disabled={true} checked={true} label='disabled checked={true}'> </o-checkbox>
\`\`\`
          `},e("div",{slot:"demo",class:s`flex flex-col justify-around  px-5 py-5`},e("div",null,e("o-checkbox",{label:"Label"}," ")),e("div",null,e("o-checkbox",{checked:!0,label:"checked"}," ")),e("div",null,e("o-checkbox",{id:"myCheckbox",indeterminate:!0,label:"indeterminate"}," ")),e("div",null,e("o-checkbox",{disabled:!0,label:"disabled"}," ")),e("div",null,e("o-checkbox",{disabled:!0,checked:!0,label:"disabled checked"}," ")))))}};b.css=u.target;b=k([h(m)],b);export{b as default};
