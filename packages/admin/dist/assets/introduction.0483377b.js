var n=`## Omiu \u662F\u4EC0\u4E48\uFF1F

Omiu \u662F\u57FA\u4E8E [Omi](https://github.com/Tencent/omi) \u5F00\u53D1\u7684\u8DE8\u6846\u67B6 UI \u7EC4\u4EF6\u5E93\uFF0C\u8F93\u51FA\u6807\u51C6 Web Components \u7684 Custom Elements\uFF0C\u4EFB\u610F\u7EC4\u4EF6\u53EF\u4EE5\u540C\u65F6\u5728 React\u3001Vue\u3001Preact\u3001Omi \u6216\u8005\u539F\u751F JS \u7B49\u4EFB\u610F\u6846\u67B6\u6216\u65E0\u6846\u67B6\u4E2D\u4F7F\u7528\uFF0C\u975E\u5E38\u65B9\u4FBF\u3002\u603B\u4F53\u6765\u770B\uFF0COmiu \u6709\u8FD9\u4E9B\u7279\u6027:

> [Omiu Codepen \u5408\u96C6](https://codepen.io/collection/XBJjke)

* \u8DE8\u6846\u67B6\u4F7F\u7528
* \u96C6\u6210 MUI [\u6D77\u91CF ICON](https://tencent.github.io/omi/components/icon/demos/icon.html)
* \u79FB\u52A8\u7AEF\u548C PC \u5171\u7528\u4E00\u5957\u7EC4\u4EF6
* \u8FD0\u884C\u65F6\u7684\u4E3B\u9898\u5207\u6362\u652F\u6301(\u989C\u8272\u3001\u5B57\u4F53\u548C\u5706\u89D2)
* \u7EC4\u4EF6\u76F4\u63A5\u89E3\u8026\uFF0C\u72EC\u7ACB\u6253\u78E8\uFF0C\u72EC\u7ACB\u53D1\u5E03\uFF0C\u72EC\u7ACB\u5F15\u7528
* \u6269\u5C55\u4E86 HTML \u80FD\u529B\uFF0C\u4F60\u53EF\u4EE5\u901A\u8FC7\u5B57\u7B26\u4E32 \`'0'\` \u6216\u8005\u5B57\u7B26\u4E32 \`'false'\` \u4F20\u9012 false \u7ED9\u5143\u7D20

## \u4F7F\u7528\u6307\u5357

### \u901A\u8FC7 script

\`\`\`html
<script src="https://unpkg.com/omi"><\/script>
<script src="https://unpkg.com/@omiu/button"><\/script>

<o-button>I am button</o-button>
\`\`\`

### \u901A\u8FC7 npm

\`\`\` bash
npm install @omiu/button
\`\`\`

\u7136\u540E\u5BFC\u5165\uFF08\u81EA\u52A8\u5168\u5C40\u6CE8\u518C\uFF09:

\`\`\`js
import '@omiu/button'
\`\`\`

\u7136\u540E\u5728\u4EFB\u610F\u6846\u67B6\u4E2D\u4F7F\u7528\uFF0C\u6BD4\u5982 Omi, React, Vue or Angular:

\`\`\` html
<o-button>I am button</o-button>
\`\`\`

\u4E5F\u53EF\u4EE5\u539F\u751F JS \u4F7F\u7528\uFF1A

\`\`\`js
var button = document.createElement('o-button')
button.innerHTML = 'I am omiu button'
document.body.append(button)
button.addEventListener('click', function () {
  console.log('Clicked!')
})

//or
//document.body.innerHTML = '<o-button>I am omiu button</o-button>'
\`\`\`

## HTML \u6269\u5C55 

\u5F53\u9ED8\u8BA4\u503C\u4E3A true\uFF0C\u9700\u8981\u4F20\u9012 false \u7ED9 element \u7684\u65F6\u5019\uFF0C\u4EE5\u524D\u662F\u5386\u53F2\u96BE\u9898\uFF0COmi \u5B8C\u7F8E\u89E3\u51B3\u4E86\u8FD9\u4E00\u70B9\uFF0C\u4F60\u53EF\u4EE5\u901A\u8FC7\u5B57\u7B26\u4E32 \`'0'\` \u6216\u8005 \u5B57\u7B26\u4E32 \`'false'\` \u6765\u8BBE\u7F6E\u3002

\`\`\`js
define('my-element', class extends WeElement {
  static defaultProps = {
    show: true
  }

 static propTypes = {
    show: Boolean
  }

  render(props) {
    ...
    ...
  }
})
\`\`\`

Use:

\`\`\`html
<my-element show="false"></my-element>
\`\`\`

or

\`\`\`html
<my-element show="0"></my-element>
\`\`\`

## React \u4E2D\u4F7F\u7528 omiu

\`\`\`tsx
import { useState } from 'react'
import '@omiu/icon-button'

export default function SomeComponent(props) {
    const [result, setSwitch] = useState(false)

    return (
      <div>
        <p>The switch is {result ? 'on' : 'off'}</p>
        {//\u4F7F\u7528 addEventListener \u7ED1\u5B9A\u81EA\u5B9A\u4E49\u4E8B\u4EF6}
        <o-icon-button color="red" icons="['favorite', 'favorite_border']">
        </o-icon-button>
      </div>
    )
}
\`\`\`


## Vue \u4E2D\u4F7F\u7528 Omiu

\`\`\`html
<script>
import '@omiu/icon-button'

export default {
  name: 'HelloWorld',
  data: function() {
    return {
      result: false
    }
  },
  methods: {
    myEvent: function(evt) {
      this.result = evt.detail.isOn
    }
  }
}
<\/script>

<template>
  <div class="component">
    <p>The switch is {{result? 'on' : 'off'}}</p>
    <o-icon-button color="red" icons="['favorite', 'favorite_border']" @change="myEvent"></o-icon-button>
  </div>
</template>
\`\`\`

## \u4E8B\u4EF6\u89E6\u53D1\u548C\u7ED1\u5B9A\u6700\u4F73\u5B9E\u8DF5

\u7531\u4E8E\u9700\u8981\u8DE8\u6846\u67B6\uFF0C\u5728\u4E8B\u4EF6\u7ED1\u5B9A\u4E0A\u4E3A\u4E86\u7EDF\u4E00\u7EC4\u4EF6\u884C\u4E3A\u8FD9\u91CC\u7ED9\u9664\u4E86\u7EC4\u4EF6\u5F00\u53D1\u548C\u4F7F\u7528\u7684\u6700\u4F73\u5B9E\u8DF5\u3002Omiu \u7EC4\u4EF6\u7684\u4E8B\u4EF6\u89E6\u53D1\u7EDF\u4E00\u4F7F\u7528\u5C0F\u5199\u7684\u5F62\u5F0F\uFF1A

\`\`\`js
this.fire('change')
this.fire('my-event')
\`\`\`

\u5728 Omi \u4E2D\u8FDB\u884C\u5BF9\u5E94\u7684\u4E8B\u4EF6\u7ED1\u5B9A:

\`\`\`jsx
<my-ele onChange={this.changeHandler} onMyEvent={this.myEventHandler}></my-ele>
\`\`\`

\u5728 Preact \u4E2D\u8FDB\u884C\u5BF9\u5E94\u7684\u4E8B\u4EF6\u7ED1\u5B9A:

\`\`\`jsx
<my-ele onchange={this.changeHandler} onmy-event={this.myEventHandler}></my-ele>
\`\`\`

\u5728 Vue \u4E2D\u8FDB\u884C\u5BF9\u5E94\u7684\u4E8B\u4EF6\u7ED1\u5B9A:

\`\`\`html
<my-ele @change="changeHandler" @my-event="myEventHandler"></my-ele>
\`\`\`

\u5728 React \u548C JS \u4E2D\u8FDB\u884C\u5BF9\u5E94\u7684\u4E8B\u4EF6\u7ED1\u5B9A:

\`\`\`jsx
myEl.addEventListener('my-event', (evt) => {})
\`\`\`

## \u8D21\u732E

### \u4E00\u4E9B\u547D\u4EE4

Build \u7EC4\u4EF6:

\`\`\`bash
npm run build 
\`\`\`

Build \u4F8B\u5B50:

\`\`\`bash
npm start
\`\`\`

\u751F\u6210\u6587\u6863:

\`\`\`bash
npm run docs
\`\`\`

\u53D1\u5E03:

\`\`\`bash
npm publish --access public
\`\`\`
`;export{n as default};
