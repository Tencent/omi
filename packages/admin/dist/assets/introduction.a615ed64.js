var n=`## What's Omiu ?

Omiu is a cross framework UI component library developed based on [OMI](https://github.com/tencent/omi), which outputs custom elements of standard web components. Any component can be used in any framework or frameless environment such as react, Vue, preact, OMI or native JS at the same time, which is very convenient. Overall, omiu has these characteristics:

> [Omiu Codepen Collection](https://codepen.io/collection/XBJjke)

* Cross frameworks 
* Integrated [all the MUI Icon](https://tencent.github.io/omi/components/icon/demos/icon.html)
* Mobile terminal and PC share one set of components
* Theme switching support at runtime (color, font, and fillets)
* Components directly decoupled, independently polished, independently released, independently quoted
* Extended HTML capabilities. You can pass false to an element through the string \`'0'\` or the string \`'false'\`

## Usage

### Install by script

\`\`\`html
<script src="https://unpkg.com/omi"><\/script>
<script src="https://unpkg.com/@omiu/button"><\/script>

<o-button>I am button</o-button>
\`\`\`

### Install by npm

\`\`\` bash
npm install @omiu/button
\`\`\`

Import to use it:

\`\`\`js
import '@omiu/button'
\`\`\`

Then use it in any framework, such as Omi, react, Vue or angular:

\`\`\` html
<o-button>I am button</o-button>
\`\`\`

You can also use native JS:

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

## HTML Extension 

When the default value is true and you need to pass false to the element, it used to be a historical problem. OMI has solved this problem perfectly. You can set it through the string \`'0'\` or the string \`'false'\`.

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


## Using omiu in Vue

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

## Using omiu in preact

\`\`\`tsx
import { useState, h } from 'preact'
import '@omiu/icon-button'

export default function SomeComponent(props) {
    const [result, setSwitch] = useState(false)

    return (
      <div>
        <p>The switch is {result ? 'on' : 'off'}</p>
        <o-icon-button color="red" icons="['favorite', 'favorite_border']" onchange={e => setSwitch(e.detail.isOn)}>
        </o-icon-button>
      </div>
    )
}
\`\`\`


## Using omiu in react

\`\`\`tsx
import { useState } from 'react'
import '@omiu/icon-button'

export default function SomeComponent(props) {
    const [result, setSwitch] = useState(false)

    return (
      <div>
        <p>The switch is {result ? 'on' : 'off'}</p>
        {// bind event by addEventListener}
        <o-icon-button color="red" icons="['favorite', 'favorite_border']">
        </o-icon-button>
      </div>
    )
}
\`\`\`



## Event triggering and binding best practices

Due to the need for cross framework, in order to unify component behavior in event binding, best practices for component development and use are given here. The event triggering of the omiu component is in the form of lowercase dash:

\`\`\`js
this.fire('change')
this.fire('my-event')
\`\`\`

In Omi or Preact :

\`\`\`jsx
<my-ele onChange={this.changeHandler} onMyEvent={this.myEventHandler}></my-ele>
\`\`\`

In Omi or Preact :

\`\`\`jsx
<my-ele onchange={this.changeHandler} onmy-event={this.myEventHandler}></my-ele>
\`\`\`

In Vue:

\`\`\`html
<my-ele @change="changeHandler" @my-event="myEventHandler"></my-ele>
\`\`\`

In React or JS:

\`\`\`jsx
myEl.addEventListener('my-event', (evt) => {})
\`\`\`

## Contribution

Build:

\`\`\`bash
npm run build
\`\`\`

Build Demo:

\`\`\`bash
npm start 
\`\`\`

Generate the docs:

\`\`\`bash
npm run docs
\`\`\`

Public to npm:

\`\`\`bash
npm publish --access public
\`\`\`


`;export{n as default};
