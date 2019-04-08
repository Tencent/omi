## mps

> 原生小程序插上 JSX 和 Less 的翅膀

mps 是什么？为什么需要 mps？先列举几个现状:

* 目前小程序开发使用最多的技术依然是原生小程序
* 原生小程序的 API 在不断完善和进化中
* JSX 是表达能力和编程体验最好的 UI 表达式
* JSX 可以表达一切想表达的 UI 结构也就能够描述任意 WXML

所以，就有了 mps，**mp + sweet**。 让开发者直接在原生小程序使用 JSX 写 WXML，用 Less 写 WXSS，实时编译，实时预览。

![](https://github.com/Tencent/omi/raw/master/assets/mps.png)

- JSX 代替 WXML 书写结构，精简高效
- 对原生小程序零入侵
- 支持 JS 和 TS
- 实时编译，实时预览
- 输出 WXML 自动美化

## 效果预览

![](https://github.com/Tencent/omi/raw/master/assets/mps.gif)

## 立即开始

```bash
$ npm i omi-cli -g              
$ omi init-mps my-app    
$ cd my-app        
$ npm start               
```

接着把小程序目录设置为 my-app 目录便可以愉快地开始开发调试了！ 

> `npx omi-cli init-mps my-app` 也支持(npm v5.2.0+)

生成的目录和官方的模板一致，只不过多了 JSX 文件，只需要修改 JSX 文件就会实时修改 WXML。

也支持 typescript:

```bash           
$ omi init-mps-ts my-app             
```

其他命令一样。

> `npx omi-cli init-mps-ts my-app` 也支持(npm v5.2.0+)

## mps-cloud

mps 也支持云开发：

```bash
$ npm i omi-cli -g              
$ omi init-mps-cloud my-app    
$ cd my-app/miniprogram      
$ npm start               
```

## JSX vs WXML

这里是一个真实的案例说明 JSX 的精巧高效的表达能力:

编译前的 JSX:

```jsx
<view class='pre language-jsx'>
  <view class='code'>
    {tks.map(tk => {
      return tk.type === 'tag' ? <text class={'token ' + tk.type}>{
        tk.content.map(stk => {
          return stk.deep ? stk.content.map(sstk => {
            return <text class={'token ' + sstk.type}>{sstk.content || sstk}</text>
          }) : <text class={'token ' + stk.type}>{stk.content || stk}</text>
        })}</text> : <text class={'token ' + tk.type}>{tk.content || tk}</text>
    })}
  </view>
</view>
```

编译后 WXML:

```jsx
<view class="pre language-jsx">
  <view class="code">
    <block wx:for="{{tks}}" wx:for-item="tk" wx:for-index="_anonIdx4">
      <block wx:if="{{tk.type === 'tag'}}"
        ><text class="{{'token ' + tk.type}}"
          ><block
            wx:for="{{tk.content}}"
            wx:for-item="stk"
            wx:for-index="_anonIdx2"
            ><block wx:if="{{stk.deep}}"
              ><text
                class="{{'token ' + sstk.type}}"
                wx:for="{{stk.content}}"
                wx:for-item="sstk"
                wx:for-index="_anonIdx3"
                >{{sstk.content || sstk}}</text
              >
            </block>
            <block wx:else
              ><text class="{{'token ' + stk.type}}"
                >{{stk.content || stk}}</text
              >
            </block>
          </block>
        </text>
      </block>
      <block wx:else
        ><text class="{{'token ' + tk.type}}">{{tk.content || tk}}</text>
      </block>
    </block>
  </view>
</view>
```

## 老项目使用 mps

拷贝以下文件到小程序根目录:

* _scripts 目录所有文件
* package.json
* gulpfile.js

设置 project.config.json 里的 packOptions.ignore 忽略以上的文件，然后:

``` bash
$ npm install
$ npm start
```

## mps 约定

公共的 less 文件必须放在 common-less 目录，@import 使用的时候不需要写路径。

## 推荐搭配

既然用了原生小程序的方案，所有可以轻松使用 mps + [omix](https://github.com/Tencent/omi/tree/master/packages/omix) 搭配一起使用。

欢迎使用腾讯 Omi 团队集合京东 O2Team 智慧联合打造的 mps 大幅提高开发效率，Have fun!

## License

MIT © Tencent

Open Source Software Licensed Under the MIT License:

@tarojs/transformer-wx 1.2.22
Copyright (c) 2019 O2Team
