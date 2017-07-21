## v1.7.5

* 再次修复 select 选中的问题,  `option.setAttribute('selected', 'selected')` 改成  `option.selected  = true`

## v1.7.4

* 再次修复 组件 update 时候新加的组件 installed 方法不执行的问题

## v1.7.3

* 支持 o-autofocus='{{xxx?"":""}}' 、o-checked='{{xxx?"":""}}' 等任意属性如果为null、空会自动移除该属性的特性
* 修复 组件 update 时候新加的组件 installed 方法不执行的问题
* 修复 scoped css 遇到 @-webkit-keyframe 替换的问题