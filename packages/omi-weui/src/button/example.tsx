import { WeButton } from './index'

WeButton.define('we-button')


document.body.innerHTML = `

<we-button>主要操作</we-button>
<we-button loading>主要操作</we-button>
<we-button disabled>主要操作</we-button>

<we-button type="default">次要操作</we-button>
<we-button type="default" loading>次要操作</we-button>
<we-button type="default" disabled>次要操作</we-button>

<we-button type="warn">警示操作</we-button>
<we-button type="warn" loading>警示操作</we-button>
<we-button type="warn" disabled>警示操作</we-button>


<we-button size="medium" type="warn">警示操作</we-button>
<we-button size="medium" type="default">次要操作</we-button>
<we-button size="medium" type="warn">警示操作</we-button>

<div style="background: #07c160;padding:20px;margin-top:20px;text-align:center">
  <we-button overlay >overlay 按钮</we-button>
  <we-button overlay size="medium" >overlay 按钮</we-button>
  <we-button overlay size="mini" >overlay 按钮</we-button>
</div>

<div style="text-align:center; margin-bottom:200px">
  <we-button size="mini">按钮</we-button>
  <we-button size="mini" type="default">按钮</we-button>
  <we-button size="mini" type="warn">按钮</we-button>
</div>

<style>
we-button {
  margin-top: 20px;
}
</style>
`
