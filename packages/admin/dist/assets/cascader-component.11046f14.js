import{W as n,h as e,t,s as i,a as b}from"./index.2b48b3a4.js";import"./index.es.c7c945d1.js";import"./admin-docs.754e7d21.js";import"./index.7201295b.js";import"./container.5cc2ff92.js";import"./encode.47cdd865.js";import"./___vite-browser-external_commonjs-proxy.2e3e84b6.js";var v=Object.defineProperty,p=Object.getOwnPropertyDescriptor,m=(a,u,s,o)=>{for(var l=o>1?void 0:o?p(u,s):u,c=a.length-1,d;c>=0;c--)(d=a[c])&&(l=(o?d(u,s,l):d(l))||l);return o&&l&&v(u,s,l),l};const E="cascader-component";let r=class extends n{installed(){}render(){const a={breakInside:"avoid",padding:"0 0 0 0",overflow:"visible"},u=[{value:"components",label:"\u7EC4\u4EF6",children:[{value:"basic",label:"\u57FA\u7840",children:[{value:"input",label:"\u8F93\u5165\u6846"},{value:"button",label:"\u6309\u94AE"},{value:"card",label:"\u5361\u7247"}]},{value:"form",label:"\u8868\u5355",children:[{value:"select",label:"\u9009\u62E9\u5668"}]},{value:"advanced",label:"\u9AD8\u7EA7",children:[{value:"tree",label:"\u6811"},{value:"cascader",label:"\u7EA7\u8054\u9009\u62E9\u5668"}]}]},{value:"author",label:"\u4F5C\u8005",children:[{value:"dntzhang",label:"\u5F53\u8010\u7279"},{value:"YunYouJun",label:"\u4E91\u6E38\u541B"}]},{value:"disabled",label:"\u7981\u7528",disabled:!0}];return e("code-demo-container",null,e("code-demo",{title:"\u7EA7\u8054\u9009\u62E9\u5668",describe:"\u6839\u636E\u9009\u9879\u6811\u6DF1\u5EA6\u751F\u6210\u7EA7\u8054\u9009\u62E9\u83DC\u5355",code:`
\`\`\`js
// \u53EF\u9009\u9879
const options = [
  {
    value: 'components',
    label: '\u7EC4\u4EF6',
    children: [
      {
        value: 'basic',
        label: '\u57FA\u7840',
        children: [
          {
            value: 'input',
            label: '\u8F93\u5165\u6846'
          },
          {
            value: 'button',
            label: '\u6309\u94AE'
          },
          {
            value: 'card',
            label: '\u5361\u7247'
          }
        ]
      },
      {
        value: 'form',
        label: '\u8868\u5355',
        children: [
          {
            value: 'select',
            label: '\u9009\u62E9\u5668'
          }
        ]
      },
      {
        value: 'advanced',
        label: '\u9AD8\u7EA7',
        children: [
          {
            value: 'tree',
            label: '\u6811'
          },
          {
            value: 'cascader',
            label: '\u7EA7\u8054\u9009\u62E9\u5668'
          }
        ]
      }
    ]
  },
  {
    value: 'author',
    label: '\u4F5C\u8005',
    children: [
      {
        value: 'dntzhang',
        label: '\u5F53\u8010\u7279'
      },
      {
        value: 'YunYouJun',
        label: '\u4E91\u6E38\u541B'
      }
    ]
  },
  {
    value: 'disabled',
    label: '\u7981\u7528',
    disabled: true
  }
]
\`\`\`

\`\`\`html
// jsx or tsx
<o-cascader options={options}></o-cascader>
\`\`\`
          `,style:a},e("div",{slot:"demo",class:t`px-5 py-5`},e("o-cascader",{options:u}))),e("code-demo",{title:"\u7981\u7528",describe:"\u7981\u7528\u72B6\u6001\u4E0B\u7684\u5448\u73B0",code:`
\`\`\`html
<o-cascader
  disabled
  value={['components', 'basic', 'card']}
  options={options}
></o-cascader>
\`\`\`
                    `,style:a},e("div",{slot:"demo",class:t`px-5 py-5`},e("o-cascader",{disabled:!0,value:["components","basic","card"],options:u}))),e("code-demo",{title:"\u5C3A\u5BF8",describe:"\u652F\u6301 4 \u79CD\u5C3A\u5BF8\u5927\u5C0F",code:`
\`\`\`html
<o-cascader options={options}></o-cascader>
<o-cascader size="medium" options={options}></o-cascader>
<o-cascader size="small" options={options}></o-cascader>
<o-cascader size="mini" options={options}></o-cascader>
\`\`\`
             `,style:a},e("div",{slot:"demo",class:t`px-5 py-5`},e("o-cascader",{options:u}),e("br",null),e("br",null),e("o-cascader",{size:"medium",options:u}),e("br",null),e("br",null),e("o-cascader",{size:"small",options:u}),e("br",null),e("br",null),e("o-cascader",{size:"mini",options:u}))))}};r.css=[i.target];r=m([b(E)],r);export{r as default};
