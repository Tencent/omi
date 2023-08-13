import{W as F,h as u,t as l,s as E,a as i}from"./index.2b48b3a4.js";import"./ac-unit-outlined.e53aa4eb.js";import"./accessible-rounded.8ce11e19.js";import"./add-ic-call-rounded.dfdf8b49.js";import"./admin-docs.754e7d21.js";import"./index.7201295b.js";import"./container.5cc2ff92.js";import"./encode.47cdd865.js";import"./___vite-browser-external_commonjs-proxy.2e3e84b6.js";var B=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=(e,t,s,o)=>{for(var a=o>1?void 0:o?n(t,s):t,b=e.length-1,d;b>=0;b--)(d=e[b])&&(a=(o?d(t,s,a):d(a))||a);return o&&a&&B(t,s,a),a};const A="tabs-component";let c=class extends F{installed(){}render(){const e={breakInside:"avoid",padding:"0 0 0 0"};return u("code-demo-container",null,u("code-demo",{title:"\u57FA\u7840\u9009\u9879\u5361",describe:"\u5C55\u793A\u57FA\u7840\u9009\u9879\u5361\u80FD\u529B",code:`
\`\`\`jsx
<o-tabs
  tabs={[{ label: '\u7528\u6237\u7BA1\u7406' }, { label: '\u7CFB\u7EDF\u8BBE\u7F6E' }, { label: '\u6743\u9650\u7BA1\u7406\u4E2D\u5FC3' }]}
  activeIndex={0}>
</o-tabs>
\`\`\`
          `,style:e},u("div",{slot:"demo",class:l`px-5 py-5`},u("o-tabs",{tabs:[{label:"\u7528\u6237\u7BA1\u7406"},{label:"\u7CFB\u7EDF\u8BBE\u7F6E"},{label:"\u6743\u9650\u7BA1\u7406\u4E2D\u5FC3"}],activeIndex:0}))),u("code-demo",{title:"\u5361\u7247\u9009\u9879\u5361",describe:"\u901A\u8FC7\u8BBE\u7F6E type \u4E3A card \u6765\u4F7F\u7528\u5361\u7247\u6837\u5F0F\u7684\u9009\u9879\u5361",code:`
\`\`\`jsx
<o-tabs
  type="card"
  tabs={[{ label: '\u7528\u6237\u7BA1\u7406' }, { label: '\u7CFB\u7EDF\u8BBE\u7F6E' }, { label: '\u6743\u9650\u7BA1\u7406\u4E2D\u5FC3' }]}
  activeIndex={0}>
</o-tabs>
\`\`\`
                    `,style:e},u("div",{slot:"demo",class:l`px-5 py-5`},u("o-tabs",{type:"card",tabs:[{label:"\u7528\u6237\u7BA1\u7406"},{label:"\u7CFB\u7EDF\u8BBE\u7F6E"},{label:"\u6743\u9650\u7BA1\u7406\u4E2D\u5FC3"}],activeIndex:0}))),u("code-demo",{title:"\u53EF\u589E\u52A0\u9879",describe:"\u53EF\u901A\u8FC7 onAddIconClick \u5F39\u51FA\u547D\u540D\u6846\u6765\u6DFB\u52A0 tab",code:`
\`\`\`jsx
<o-tabs
  addable
  onAddIconClick={this.onAddIconClick}
  tabs={[{ label: '\u7528\u6237\u7BA1\u7406' }, { label: '\u7CFB\u7EDF\u8BBE\u7F6E' }, { label: '\u6743\u9650\u7BA1\u7406\u4E2D\u5FC3' }]}
  activeIndex={0}>
</o-tabs>
\`\`\`
                              `,style:e},u("div",{slot:"demo",class:l`px-5 py-5`},u("o-tabs",{addable:!0,tabs:[{label:"\u7528\u6237\u7BA1\u7406"},{label:"\u7CFB\u7EDF\u8BBE\u7F6E"},{label:"\u6743\u9650\u7BA1\u7406\u4E2D\u5FC3"}],activeIndex:0}))),u("code-demo",{title:"\u53EF\u6DFB\u52A0 card \u9009\u9879\u5361",describe:"\u53EF\u901A\u8FC7 onAddIconClick \u5F39\u51FA\u547D\u540D\u6846\u6765\u6DFB\u52A0 tab",code:`
\`\`\`jsx
<o-tabs
  addable
  onAddIconClick={this.onAddIconClick}
  type="card"
  tabs={[{ label: '\u7528\u6237\u7BA1\u7406' }, { label: '\u7CFB\u7EDF\u8BBE\u7F6E' }, { label: '\u6743\u9650\u7BA1\u7406\u4E2D\u5FC3' }]}
  activeIndex={0}>
</o-tabs>
\`\`\`
                                        `,style:e},u("div",{slot:"demo",class:l`px-5 py-5`},u("o-tabs",{addable:!0,type:"card",tabs:[{label:"\u7528\u6237\u7BA1\u7406"},{label:"\u7CFB\u7EDF\u8BBE\u7F6E"},{label:"\u6743\u9650\u7BA1\u7406\u4E2D\u5FC3"}],activeIndex:0}))),u("code-demo",{title:"\u5361\u7247\u5316\u9009\u9879\u5361",describe:"\u901A\u8FC7\u8BBE\u7F6E type \u4E3A border-card \u6765\u4F7F\u7528\u5361\u7247\u6837\u5F0F\u7684\u9009\u9879\u5361",code:`
\`\`\`jsx
<o-tabs
  type="border-card"
  tabs={[{ label: '\u7528\u6237\u7BA1\u7406' }, { label: '\u7CFB\u7EDF\u8BBE\u7F6E' }, { label: '\u6743\u9650\u7BA1\u7406\u4E2D\u5FC3' }]}
  activeIndex={0}>
</o-tabs>
\`\`\`
             `,style:e},u("div",{slot:"demo",class:l`px-5 py-5`},u("o-tabs",{type:"border-card",tabs:[{label:"\u7528\u6237\u7BA1\u7406"},{label:"\u7CFB\u7EDF\u8BBE\u7F6E"},{label:"\u6743\u9650\u7BA1\u7406\u4E2D\u5FC3"}],activeIndex:0}))),u("code-demo",{title:"\u4F4D\u7F6E",describe:"\u53EF\u4EE5\u901A\u8FC7 position \u8BBE\u7F6E\u6807\u7B7E\u7684\u4F4D\u7F6E",code:`
\`\`\`jsx
<o-tabs
  position="right"
  tabs={[{ label: '\u7528\u6237\u7BA1\u7406' }, { label: '\u7CFB\u7EDF\u8BBE\u7F6E' }, { label: '\u6743\u9650\u7BA1\u7406\u4E2D\u5FC3' }]}
  activeIndex={0}>
</o-tabs>
\`\`\`
             `,style:e},u("div",{slot:"demo",class:l`px-5 py-5`},u("o-tabs",{position:"right",tabs:[{label:"\u7528\u6237\u7BA1\u7406"},{label:"\u7CFB\u7EDF\u8BBE\u7F6E"},{label:"\u6743\u9650\u7BA1\u7406\u4E2D\u5FC3"}],activeIndex:0}))),u("code-demo",{title:"\u4F4D\u7F6E",describe:"\u53EF\u4EE5\u901A\u8FC7 position \u8BBE\u7F6E\u6807\u7B7E\u7684\u4F4D\u7F6E",code:`
\`\`\`jsx
<o-tabs
  position="left"
  tabs={[{ label: '\u7528\u6237\u7BA1\u7406' }, { label: '\u7CFB\u7EDF\u8BBE\u7F6E' }, { label: '\u6743\u9650\u7BA1\u7406\u4E2D\u5FC3' }]}
  activeIndex={0}>
</o-tabs>
\`\`\`
                       `,style:e},u("div",{slot:"demo",class:l`px-5 py-5`},u("o-tabs",{position:"left",tabs:[{label:"\u7528\u6237\u7BA1\u7406"},{label:"\u7CFB\u7EDF\u8BBE\u7F6E"},{label:"\u6743\u9650\u7BA1\u7406\u4E2D\u5FC3"}],activeIndex:0}))),u("code-demo",{title:"\u5E95\u90E8 tab",describe:"\u53EF\u4EE5\u901A\u8FC7 position \u8BBE\u7F6E\u6807\u7B7E\u7684\u4F4D\u7F6E",code:`
\`\`\`jsx
<o-tabs
  type="border-card"
  position="bottom"
  tabs={[{ label: '\u7528\u6237\u7BA1\u7406' }, { label: '\u7CFB\u7EDF\u8BBE\u7F6E' }, { label: '\u6743\u9650\u7BA1\u7406\u4E2D\u5FC3' }]}
  activeIndex={0}>
</o-tabs>
\`\`\`
          `,style:e},u("div",{slot:"demo",class:l`px-5 py-5`},u("o-tabs",{type:"border-card",position:"bottom",tabs:[{label:"\u7528\u6237\u7BA1\u7406"},{label:"\u7CFB\u7EDF\u8BBE\u7F6E"},{label:"\u6743\u9650\u7BA1\u7406\u4E2D\u5FC3"}],activeIndex:0}))),u("code-demo",{title:"\u5E26 icon",describe:"\u901A\u8FC7\u5728 tabs \u7684 item \u91CC\u52A0\u5165 icon \u5C5E\u6027\u6765\u8BBE\u7F6E icon",code:`
\`\`\`jsx
<o-tabs
  tabs={[
    { label: '\u7528\u6237\u7BA1\u7406', icon: 'accessible-rounded' },
    { label: '\u7CFB\u7EDF\u8BBE\u7F6E', icon: 'ac-unit-outlined' },
    { label: '\u6743\u9650\u7BA1\u7406\u4E2D\u5FC3', icon: 'accessible-rounded' }
  ]}
  activeIndex={0}>
</o-tabs>
\`\`\`
          `,style:e},u("div",{slot:"demo",class:l`px-5 py-5`},u("o-tabs",{tabs:[{label:"\u7528\u6237\u7BA1\u7406",icon:"accessible-rounded"},{label:"\u7CFB\u7EDF\u8BBE\u7F6E",icon:"ac-unit-outlined"},{label:"\u6743\u9650\u7BA1\u7406\u4E2D\u5FC3",icon:"accessible-rounded"}],activeIndex:0}))),u("code-demo",{title:"\u53EF\u5173\u95ED",describe:"\u901A\u8FC7 closable \u5C5E\u6027\u63A7\u5236",code:`
\`\`\`jsx
<o-tabs
  closable
  tabs={[{ label: '\u7528\u6237\u7BA1\u7406' }, { label: '\u7CFB\u7EDF\u8BBE\u7F6E' }, { label: '\u6743\u9650\u7BA1\u7406\u4E2D\u5FC3' }]}
  activeIndex={0}>
</o-tabs>
\`\`\`
          `,style:e},u("div",{slot:"demo",class:l`px-5 py-5`},u("o-tabs",{closable:!0,tabs:[{label:"\u7528\u6237\u7BA1\u7406"},{label:"\u7CFB\u7EDF\u8BBE\u7F6E"},{label:"\u6743\u9650\u7BA1\u7406\u4E2D\u5FC3"}],activeIndex:0}))),u("code-demo",{title:"\u53EF\u5173\u95ED\u4E14\u5E26\u6709 icon",describe:"\u901A\u8FC7 closable \u5C5E\u6027\u63A7\u5236",code:`
\`\`\`jsx
<o-tabs closable
  tabs={[
    { label: '\u7528\u6237\u7BA1\u7406', icon: 'accessible-rounded' },
    { label: '\u7CFB\u7EDF\u8BBE\u7F6E', icon: 'ac-unit-outlined' },
    { label: '\u6743\u9650\u7BA1\u7406\u4E2D\u5FC3', icon: 'accessible-rounded' }
  ]}
  activeIndex={0}>
</o-tabs>
\`\`\`
          `,style:e},u("div",{slot:"demo",class:l`px-5 py-5`},u("o-tabs",{closable:!0,tabs:[{label:"\u7528\u6237\u7BA1\u7406",icon:"accessible-rounded"},{label:"\u7CFB\u7EDF\u8BBE\u7F6E",icon:"ac-unit-outlined"},{label:"\u6743\u9650\u7BA1\u7406\u4E2D\u5FC3",icon:"accessible-rounded"}],activeIndex:0}))))}};c.css=[E.target,"o-button{ margin: 4px }"];c=r([i(A)],c);export{c as default};
