import{W as E,h as c,t as o,s as t,a as s}from"./index.2b48b3a4.js";import"./ac-unit-outlined.e53aa4eb.js";import"./accessible-rounded.8ce11e19.js";import"./admin-docs.754e7d21.js";import"./index.7201295b.js";import"./container.5cc2ff92.js";import"./encode.47cdd865.js";import"./___vite-browser-external_commonjs-proxy.2e3e84b6.js";var b=Object.defineProperty,A=Object.getOwnPropertyDescriptor,h=(d,l,n,u)=>{for(var e=u>1?void 0:u?A(l,n):l,r=d.length-1,i;r>=0;r--)(i=d[r])&&(e=(u?i(l,n,e):i(e))||e);return u&&e&&b(l,n,e),e};const p="tree-component";let a=class extends E{install(){}render(){return c("code-demo-container",null,c("code-demo",{title:"\u6811\u5F62\u63A7\u4EF6",describe:"\u5C55\u793A\u6811\u5F62\u5D4C\u5957\u6570\u636E\u7ED3\u6784\u7684\u7EC4\u4EF6\u3002",code:`
\`\`\`html
<o-tree style="width:400px;" 
data={[{
  label: '\u4E00\u7EA7 1',
  sign: '\u25CF',
  expanded: true,
  selected: true,
  icon: 'ac-unit-outlined',
  children: [{
    sign: '1, M',
    label: '\u4E8C\u7EA7 1-1',
    children: [{
      sign: 'M',
      label: '\u4E09\u7EA7 1-1-1',
      icon: 'accessible-rounded',
      color: 'red'
    }]
  }]
}, {
  label: '\u4E00\u7EA7 2',
  icon: 'accessible-rounded',
  children: [{
    label: '\u4E8C\u7EA7 2-1',
    children: [{
      label: '\u4E09\u7EA7 2-1-1'
    }]
  }, {
    label: '\u4E8C\u7EA7 2-2',
    children: [{
      label: '\u4E09\u7EA7 2-2-1'
    }]
  }]
}, {
  label: '\u4E00\u7EA7 3',
  icon: 'accessible-rounded',
  children: [{
    label: '\u4E8C\u7EA7 3-1',
    icon: 'accessible-rounded',
    children: [{
      label: '\u4E09\u7EA7 3-1-1',
      icon: 'accessible-rounded'
    }]
  }, {
    label: '\u4E8C\u7EA7 3-2',
    children: [{
      label: '\u4E09\u7EA7 3-2-1'
    }]
  }]
}]}>
</o-tree>
\`\`\`
          `},c("div",{slot:"demo",class:o`flex justify-around px-5 py-5`},c("o-tree",{style:"width:400px;",data:[{label:"\u4E00\u7EA7 1",sign:"\u25CF",expanded:!0,selected:!0,icon:"ac-unit-outlined",children:[{sign:"1, M",label:"\u4E8C\u7EA7 1-1",children:[{sign:"M",label:"\u4E09\u7EA7 1-1-1",icon:"accessible-rounded",color:"red"}]}]},{label:"\u4E00\u7EA7 2",icon:"accessible-rounded",children:[{label:"\u4E8C\u7EA7 2-1",children:[{label:"\u4E09\u7EA7 2-1-1"}]},{label:"\u4E8C\u7EA7 2-2",children:[{label:"\u4E09\u7EA7 2-2-1"}]}]},{label:"\u4E00\u7EA7 3",icon:"accessible-rounded",children:[{label:"\u4E8C\u7EA7 3-1",icon:"accessible-rounded",children:[{label:"\u4E09\u7EA7 3-1-1",icon:"accessible-rounded"}]},{label:"\u4E8C\u7EA7 3-2",children:[{label:"\u4E09\u7EA7 3-2-1"}]}]}]}))))}};a.css=t.target;a=h([s(p)],a);export{a as default};
