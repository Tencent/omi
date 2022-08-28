import{W as E,h as c,t as o,s,a as t}from"./index.2c96a3e1.js";import"./ac-unit-outlined.39c54fcd.js";import"./accessible-rounded.8f232bbe.js";import"./admin-docs.91f3583b.js";import"./index.fc3c29e3.js";import"./container.4e91b93f.js";var b=Object.defineProperty,A=Object.getOwnPropertyDescriptor,h=(d,l,n,u)=>{for(var e=u>1?void 0:u?A(l,n):l,r=d.length-1,a;r>=0;r--)(a=d[r])&&(e=(u?a(l,n,e):a(e))||e);return u&&e&&b(l,n,e),e};const p="tree-component";let i=class extends E{install(){}render(){return c("code-demo-container",null,c("code-demo",{title:"\u6811\u5F62\u63A7\u4EF6",describe:"\u5C55\u793A\u6811\u5F62\u5D4C\u5957\u6570\u636E\u7ED3\u6784\u7684\u7EC4\u4EF6\u3002",code:`
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
          `},c("div",{slot:"demo",class:o`flex justify-around px-5 py-5`},c("o-tree",{style:"width:400px;",data:[{label:"\u4E00\u7EA7 1",sign:"\u25CF",expanded:!0,selected:!0,icon:"ac-unit-outlined",children:[{sign:"1, M",label:"\u4E8C\u7EA7 1-1",children:[{sign:"M",label:"\u4E09\u7EA7 1-1-1",icon:"accessible-rounded",color:"red"}]}]},{label:"\u4E00\u7EA7 2",icon:"accessible-rounded",children:[{label:"\u4E8C\u7EA7 2-1",children:[{label:"\u4E09\u7EA7 2-1-1"}]},{label:"\u4E8C\u7EA7 2-2",children:[{label:"\u4E09\u7EA7 2-2-1"}]}]},{label:"\u4E00\u7EA7 3",icon:"accessible-rounded",children:[{label:"\u4E8C\u7EA7 3-1",icon:"accessible-rounded",children:[{label:"\u4E09\u7EA7 3-1-1",icon:"accessible-rounded"}]},{label:"\u4E8C\u7EA7 3-2",children:[{label:"\u4E09\u7EA7 3-2-1"}]}]}]}))))}};i.css=s.target;i=h([t(p)],i);export{i as default};
