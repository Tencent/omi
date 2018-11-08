var compile = require('../scripts/mp/index')

var wxml1 = `
<view wx:for="{{[1, 2, 3, 4, 5, 6, 7, 8, 9]}}" wx:for-item="i">
  <view wx:for="{{[1, 2, 3, 4, 5, 6, 7, 8, 9]}}" wx:for-item="j">
    <view wx:if="{{i <= j}}">
      {{i}} * {{j}} = {{i * j}}
    </view>
  </view>
</view>
`

console.log(compile(wxml1) ===
`function render(){
  return h('view',{},[1,2,3,4,5,6,7,8,9].map((i,index)=>{
        h('view',{},[1,2,3,4,5,6,7,8,9].map((j,index)=>{
        i<=j&&h('view',{},[\`\${i} * \${j} = \${i * j}\`])
      }))
      }))
}`)

var wxml2 = `
<view> {{ message }} </view>
`

console.log(compile(wxml2) ===
`function render(){
  return h('view',null,[\`\${ message }\`])
}`)


var wxml3 = `
<view id="item-{{id}}"> </view>
`

console.log(compile(wxml3) ===
`function render(){
  return h('view',{id: \`item-\${id}\`},[])
}`)

var wxml4 = `
<view wx:if="{{condition}}"> </view>
`

console.log(compile(wxml4) ===
`function render(){
  return condition&&h('view',{},[])
}`)



var wxml5 = `
<checkbox checked="{{ false }}"> </checkbox>
`

console.log(compile(wxml5) ===
`function render(){
  return h('checkbox',{checked: false},[])
}`)


var wxml6 = `
<checkbox checked="false"> </checkbox>
`

console.log(compile(wxml6)===
`function render(){
  return h('checkbox',{checked: \`false\`},[])
}`
)


var wxml7 = `
<view hidden="{{flag ? true : false}}"> Hidden </view>
`

console.log(compile(wxml7)===
`function render(){
  return h('view',{hidden: flag?true:false},[\`Hidden\`])
}`
)


var wxml8 = `
<view> {{a + b}} + {{c}} + d </view>
`

console.log(compile(wxml8)===
`function render(){
  return h('view',null,[\`\${a + b} + \${c} + d\`])
}`
)


var wxml9 = `
<view wx:if="{{length > 5}}"> </view>
`

console.log(compile(wxml9)===
`function render(){
  return length>5&&h('view',{},[])
}`
)



var wxml10 = `
<view>{{"hello" + name}}</view>
`

console.log(compile(wxml10)===
`function render(){
  return h('view',null,[\`\${"hello" + name}\`])
}`
)


var wxml11 = `
<view>{{object.key}} {{array[0]}}</view>
`

console.log(compile(wxml11)===
`function render(){
  return h('view',null,[\`\${object.key} \${array[0]}\`])
}`
)


var wxml12 = `
<view wx:for="{{[zero, 1, 2, 3, 4]}}"> {{item}} </view>
`

console.log(compile(wxml12)===
`function render(){
  return h('view',{},[zero,1,2,3,4].map((item,index)=>{
        \`\${item}\`
      }))
}`
)


var wxml13 = `
<view wx:for="{{array}}">
  {{index}}: {{item.message}}
</view>
`

console.log(compile(wxml13)===
`function render(){
  return h('view',{},array.map((item,index)=>{
        \`\${index}: \${item.message}\`
      }))
}`
)



var wxml14 = `
<view wx:for="{{array}}" wx:for-index="idx" wx:for-item="itemName">
  {{idx}}: {{itemName.message}}
</view>
`

console.log(compile(wxml14)===
`function render(){
  return h('view',{},array.map((itemName,idx)=>{
        \`\${idx}: \${itemName.message}\`
      }))
}`
)



var wxml15 = `
<view>
<view wx:if="{{length > 5}}"> 1 </view>
<view > 3 </view>
</view>
`

console.log(compile(wxml15)===
`function render(){
  return h('view',null,[length>5&&h('view',{},[\`1\`]),h('view',null,[\`3\`])])
}`
)


var wxml16 = `
<view wx:if="{{length > 5}}"> 1 </view>
<view wx:elif="{{length > 2}}"> 2 </view>
<view wx:else> 3 </view>
`

console.log(compile(wxml16)===
`function render(){
  return length>5?h('view',{},[\`1\`]):length>2?h('view',{},[\`2\`]):h('view',{},[\`3\`])
}`
)




var wxml17 = `
<!--index.wxml-->
<view> abc </view>
`

console.log(compile(wxml17)===
`function render(){
  return h('view',null,[\`abc\`])
}`
)

var wxml18 = `
<block wx:for="{{[1, 2, 3]}}">
<view> {{index}}: </view>
<view> {{item}} </view>
</block>`

console.log(compile(wxml18)===
`function render(){
  return h('block',{},[1,2,3].map((item,index)=>{
        h('view',null,[\`\${index}:\`]),h('view',null,[\`\${item}\`])
      }))
}`
)



var demo = `
<view class="container">
  <view class="userinfo">
    <button wx:if="{{!hasUserInfo && canIUse}}" open-type="getUserInfo" bindgetuserinfo="getUserInfo"> 获取头像昵称 </button>
    <block wx:else>
      <image bindtap="bindViewTap" class="userinfo-avatar" src="{{userInfo.avatarUrl}}" mode="cover"></image>
      <text class="userinfo-nickname">{{userInfo.nickName}}</text>
    </block>
  </view>
  <view class="usermotto">
    <text class="user-motto">{{motto}}</text>
  </view>
</view>

`

console.log(compile(demo))

var logs =`
<!--logs.wxml-->
<view class="container log-list">
  <block wx:for="{{logs}}" wx:for-item="log">
    <text class="log-item">{{index + 1}}. {{log}}</text>
  </block>
  <my-ele />
</view>
`

console.log(compile(logs))

console.log(compile('<text>my-child</text>'))

console.log(compile(`
<view>
  <my-child />
  <view>my-ele</view>
</view>

`))
