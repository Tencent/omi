import{W as d,h as o,t as n,s as b,a as p}from"./index.2b48b3a4.js";import"./ac-unit-outlined.e53aa4eb.js";import"./accessible-rounded.8ce11e19.js";import"./add-ic-call-rounded.dfdf8b49.js";import"./admin-docs.754e7d21.js";import"./index.7201295b.js";import"./container.5cc2ff92.js";import"./encode.47cdd865.js";import"./___vite-browser-external_commonjs-proxy.2e3e84b6.js";var s=Object.defineProperty,y=Object.getOwnPropertyDescriptor,m=(t,e,l,i)=>{for(var u=i>1?void 0:i?y(e,l):e,a=t.length-1,r;a>=0;a--)(r=t[a])&&(u=(i?r(e,l,u):r(u))||u);return i&&u&&s(e,l,u),u};const g="button-component";let c=class extends d{installed(){}render(){const t={breakInside:"avoid",padding:"0 0 0 0"};return o("code-demo-container",null,o("code-demo",{title:"\u6309\u94AE",describe:"\u4E0D\u540C\u7C7B\u578B\u7684\u6309\u94AE",code:`
\`\`\`html
<o-button text="Default"></o-button>
<o-button type="primary">Primary</o-button>
<o-button type="warning">Warning</o-button>
<o-button type="danger">Danger</o-button>
<o-button type="info">Info</o-button>
<o-button type="primary">
  <o-icon-ac-unit-outlined></o-icon-ac-unit-outlined> Icon
</o-button>
<o-button type="danger"
>Icon <o-icon-accessible-rounded></o-icon-accessible-rounded>
</o-button>
\`\`\`
          `,style:t},o("div",{slot:"demo",class:n`px-5 py-5`},o("o-button",{text:"Default"}),o("o-button",{type:"primary"},"Primary"),o("o-button",{type:"warning"},"Warning"),o("o-button",{type:"danger"},"Danger"),o("o-button",{type:"info"},"Info"),o("o-button",{type:"primary"},o("o-icon-ac-unit-outlined",null)," Icon"),o("o-button",{type:"danger"},"Icon ",o("o-icon-accessible-rounded",null)))),o("code-demo",{title:"\u7981\u7528",describe:"\u7981\u7528\u72B6\u6001\u4E0B\u7684\u5448\u73B0",code:`
\`\`\`html
<o-button disabled>Default</o-button>
<o-button disabled type="primary">Primary</o-button>
<o-button disabled type="warning">Warning</o-button>
<o-button disabled type="danger">Danger</o-button>
<o-button disabled type="info">Info</o-button>
<o-button disabled type="primary">
  <o-icon-ac-unit-outlined></o-icon-ac-unit-outlined> Icon
</o-button>
<o-button disabled type="danger"
>Icon <o-icon-accessible-rounded></o-icon-accessible-rounded>
</o-button>
\`\`\`
                    `,style:t},o("div",{slot:"demo",class:n`px-5 py-5`},o("o-button",{disabled:!0},"Default"),o("o-button",{disabled:!0,type:"primary"},"Primary"),o("o-button",{disabled:!0,type:"warning"},"Warning"),o("o-button",{disabled:!0,type:"danger"},"Danger"),o("o-button",{disabled:!0,type:"info"},"Info"),o("o-button",{disabled:!0,type:"primary"},o("o-icon-ac-unit-outlined",null)," Icon"),o("o-button",{disabled:!0,type:"danger"},"Icon ",o("o-icon-accessible-rounded",null)))),o("code-demo",{title:"\u6734\u7D20\u6309\u94AE",describe:"\u6734\u7D20\u72B6\u6001\u4E0B\u7684\u6309\u94AE\uFF0C\u989C\u8272\u4E0D\u7A81\u51FA",code:`
\`\`\`html
<o-button plain>Plain</o-button>
<o-button plain type="primary">Primary</o-button>
<o-button plain type="warning">Warning</o-button>
<o-button plain type="danger">Danger</o-button>
<o-button plain type="info">Info</o-button>
<o-button plain type="primary">
  <o-icon-ac-unit-outlined></o-icon-ac-unit-outlined> Icon
</o-button>
<o-button plain type="danger"
>Icon <o-icon-accessible-rounded></o-icon-accessible-rounded>
</o-button>

<o-button plain type="primary">
  <o-icon-ac-unit-outlined></o-icon-ac-unit-outlined>
</o-button>
<o-button plain type="danger">
  <o-icon-accessible-rounded></o-icon-accessible-rounded>
</o-button>
\`\`\`
                              `,style:t},o("div",{slot:"demo",class:n`px-5 py-5`},o("o-button",{plain:!0},"Plain"),o("o-button",{plain:!0,type:"primary"},"Primary"),o("o-button",{plain:!0,type:"warning"},"Warning"),o("o-button",{plain:!0,type:"danger"},"Danger"),o("o-button",{plain:!0,type:"info"},"Info"),o("o-button",{plain:!0,type:"primary"},o("o-icon-ac-unit-outlined",null)," Icon"),o("o-button",{plain:!0,type:"danger"},"Icon ",o("o-icon-accessible-rounded",null)),o("o-button",{plain:!0,type:"primary"},o("o-icon-ac-unit-outlined",null)),o("o-button",{plain:!0,type:"danger"},o("o-icon-accessible-rounded",null)))),o("code-demo",{title:"Loading \u6309\u94AE",describe:"\u70B9\u51FB\u8BF7\u6C42\u8FDC\u7A0B\u7684\u670D\u52A1\u7ECF\u5E38\u7528\u5230\u5B83",code:`
\`\`\`html
<o-button plain loading>Plain</o-button>
<o-button plain loading type="primary">Primary</o-button>
<o-button plain loading type="warning">Warning</o-button>
<o-button plain loading type="danger">Danger</o-button>
<o-button plain loading type="info">Info</o-button>

<o-button plain loading type="primary">
  <o-icon-ac-unit-outlined></o-icon-ac-unit-outlined>
</o-button>
<o-button plain loading type="danger">
  <o-icon-accessible-rounded></o-icon-accessible-rounded>
</o-button>
\`\`\`
                                        `,style:t},o("div",{slot:"demo",class:n`px-5 py-5`},o("o-button",{plain:!0,loading:!0},"Plain"),o("o-button",{plain:!0,loading:!0,type:"primary"},"Primary"),o("o-button",{plain:!0,loading:!0,type:"warning"},"Warning"),o("o-button",{plain:!0,loading:!0,type:"danger"},"Danger"),o("o-button",{plain:!0,loading:!0,type:"info"},"Info"),o("o-button",{plain:!0,loading:!0,type:"primary"},o("o-icon-ac-unit-outlined",null)),o("o-button",{plain:!0,loading:!0,type:"danger"},o("o-icon-accessible-rounded",null)))),o("code-demo",{title:"\u5C3A\u5BF8",describe:"\u652F\u6301 4 \u79CD\u5C3A\u5BF8\u5927\u5C0F",code:`
\`\`\`html
<o-button>Default</o-button>
<o-button size="medium">Medium</o-button>
<o-button size="small">Small</o-button>
<o-button size="mini">Mini</o-button>
\`\`\`
             `,style:t},o("div",{slot:"demo",class:n`px-5 py-5`},o("o-button",null,"Default"),o("o-button",{size:"medium"},"Medium"),o("o-button",{size:"small"},"Small"),o("o-button",{size:"mini"},"Mini"))),o("code-demo",{title:"\u5706\u89D2\u6309\u94AE",describe:"\u5706\u89D2\u7684\u6309\u94AE",code:`
\`\`\`html
<o-button round>Default</o-button>
<o-button round size="medium">Medium</o-button>
<o-button round size="small">Small</o-button>
<o-button round size="mini">Mini</o-button>
\`\`\`
             `,style:t},o("div",{slot:"demo",class:n`px-5 py-5`},o("o-button",{round:!0},"Default"),o("o-button",{round:!0,size:"medium"},"Medium"),o("o-button",{round:!0,size:"small"},"Small"),o("o-button",{round:!0,size:"mini"},"Mini"))),o("code-demo",{title:"ICON \u6309\u94AE",describe:"\u5F53\u4E0D\u9700\u8981\u6587\u5B57\u63CF\u8FF0\u6309\u94AE\u7684\u65F6\u5019\u4F7F\u7528",code:`
\`\`\`html
<o-button circle>
<o-icon-ac-unit-outlined></o-icon-ac-unit-outlined>
</o-button>
<o-button type="primary" circle>
<o-icon-ac-unit-outlined></o-icon-ac-unit-outlined>
</o-button>
<o-button type="warning" circle>
<o-icon-ac-unit-outlined></o-icon-ac-unit-outlined>
</o-button>
<o-button type="danger" circle>
<o-icon-ac-unit-outlined></o-icon-ac-unit-outlined>
</o-button>
<o-button type="info" circle>
<o-icon-ac-unit-outlined></o-icon-ac-unit-outlined>
</o-button>
<o-button type="primary" plain circle>
<o-icon-ac-unit-outlined></o-icon-ac-unit-outlined>
</o-button>
<o-button type="warning" plain circle>
<o-icon-ac-unit-outlined></o-icon-ac-unit-outlined>
</o-button>
<o-button type="danger" plain circle>
<o-icon-ac-unit-outlined></o-icon-ac-unit-outlined>
</o-button>
<o-button type="info" plain circle>
<o-icon-ac-unit-outlined></o-icon-ac-unit-outlined>
</o-button>
\`\`\`
                       `,style:t},o("div",{slot:"demo",class:n`px-5 py-5`},o("o-button",{circle:!0},o("o-icon-ac-unit-outlined",null)),o("o-button",{type:"primary",circle:!0},o("o-icon-ac-unit-outlined",null)),o("o-button",{type:"warning",circle:!0},o("o-icon-ac-unit-outlined",null)),o("o-button",{type:"danger",circle:!0},o("o-icon-ac-unit-outlined",null)),o("o-button",{type:"info",circle:!0},o("o-icon-ac-unit-outlined",null)),o("o-button",{type:"primary",plain:!0,circle:!0},o("o-icon-ac-unit-outlined",null)),o("o-button",{type:"warning",plain:!0,circle:!0},o("o-icon-ac-unit-outlined",null)),o("o-button",{type:"danger",plain:!0,circle:!0},o("o-icon-ac-unit-outlined",null)),o("o-button",{type:"info",plain:!0,circle:!0},o("o-icon-ac-unit-outlined",null)))),o("code-demo",{title:"\u5757\u7EA7\u5143\u7D20",describe:"\u901A\u8FC7 block \u5C5E\u6027\u63A7\u5236",code:"\n```html\n<o-button block>Block button</o-button>\n```\n          ",style:t},o("div",{slot:"demo",class:n`px-5 py-5`},o("o-button",{block:!0},"Block button"))))}};c.css=[b.target,"o-button{ margin: 4px }"];c=m([p(g)],c);export{c as default};
