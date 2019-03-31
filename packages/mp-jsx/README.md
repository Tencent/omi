## mp-jsx

> 原生小程序插上 JSX 的翅膀

mp-jsx 是什么？众所周知，JSX 可以表达一切想表达的 UI 结构，mp-jsx 让开发者直接在原生小程序使用 JSX 写 WXML，实时编译，实时预览。

![](https://github.com/Tencent/omi/raw/master/assets/mp-jsx.jpg)

- JSX 代替 WXML 书写结构，精简高效
- 对原生小程序零入侵
- 支持 js 和 ts
- 实时编译，实时预览
- 输出 WXML 自动美化

## 立即开始

```bash
$ npm i omi-cli -g              
$ omi init-jsx my-app    
$ cd my-app        
$ npm start               
```

接着把小程序目录设置为 my-app 目录便可以愉快地开始开发调试了！ 

> `npx omi-cli init-jsx my-app` 也支持(npm v5.2.0+)

生成的目录和官方的模板一致，只不过多了 JSX 文件，只需要修改 JSX 文件就会实时修改 WXML。

也支持 typescript:

```bash           
$ omi init-jsx-ts my-app             
```

其他命令一样。

> `npx omi-cli init-jsx-ts my-app` 也支持(npm v5.2.0+)

## JSX vs WXML

这里是一个真实的案例说明 JSX 的精巧高效的表达能力:

编译前:

```jsx
<view class='pre language-jsx'>
	<view class='code'>
		{tks.map(tk => {
			return tk.type === 'tag' ? <text class={'token ' + tk.type}>{tk.content.map(stk => {
				return stk.deep ? stk.content.map(sstk => {
					return <text class={'token ' + sstk.type}>{sstk.content || sstk}</text>
				}) : <text class={'token ' + stk.type}>{stk.content || stk}</text>
			})}</text> : <text class={'token ' + tk.type}>{tk.content || tk}</text>
		})}
	</view>
</view>
```

编译后:

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

欢迎使用 Omi 的 mp-jsx 大幅提高开发效率，Have fun!

## License

MIT © Tencent
