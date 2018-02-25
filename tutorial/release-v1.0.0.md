## 腾讯发布 Omix 1.0 - 用 JSX 创建用户界面

![http://images2017.cnblogs.com/blog/105416/201708/105416-20170807145434955-1872305404.png](http://images2017.cnblogs.com/blog/105416/201708/105416-20170807145434955-1872305404.png)

今天，腾讯正式开源发布 Omix 1.0， 让开发者使用 JSX 或 hyperscript 创建用户界面。

* [Github](https://github.com/AlloyTeam/omix)

## 功能特性

* 超级快的速度, [点击这里体验一下](https://alloyteam.github.io/omix/example/perfs)
* 超小的尺寸, 7 KB (gzip)
* 良好的兼容性 IE8
* 完整支持JSX
* 支持局部 CSS, 不用费尽心思去想选择器了，让CSS更加简单
* 更自由的更新，每个组件都有 update 方法，可以自由选择最佳更新的时机，也可和第三方库集成实现双向绑定，退可以自己手动更新。进可攻退可守
* 灵活的插件体系和丰富的插件生态
    * [omi-router](https://github.com/AlloyTeam/omix/tree/master/plugins/omi-router) : Omi专属的官方Router插件.
    * [omi-finger](https://github.com/AlloyTeam/omix/tree/master/plugins/omi-finger) Omi的[AlloyFinger](https://github.com/AlloyTeam/AlloyFinger)插件，支持各种触摸事件和手势
    * [omi-transform](https://github.com/AlloyTeam/omix/tree/master/plugins/omi-transform) Omi的[transformjs](https://alloyteam.github.io/AlloyTouch/transformjs/)插件，快速方便地设置DOM的CSS3 Transform属性
    * [omi-touch](https://github.com/AlloyTeam/omix/tree/master/plugins/omi-touch) Omi的[AlloyTouch](https://github.com/AlloyTeam/AlloyTouch)插件，Omi项目的触摸运动解决方案（支持触摸滚动、旋转、翻页、选择等等）
* 喜欢模板引擎、ES6模板字符串的可以使用 Omix 的API大体相同的兄弟框架 [Omi](https://github.com/AlloyTeam/omi)，而且上面的插件 Omi 和 Omix 都可以共享使用
## Omix 

### 使用 JSX 

``` js
class Hello extends Omi.Component {
    render() {
        return <div> Hello {this.data.name}!</div>
    }
}


class App extends Omi.Component {
    install() {
        this.name = 'Omi'
    }

    handleClick(e) {
        this.name = 'Omix' 
        this.update()
    }

    style() {
        return `h3{
	            color:red;
	            cursor: pointer;
	        }`
    }

    render() {
        return <div>
	            <Hello name={this.name} />
	            <h3 onclick={this.handleClick.bind(this)}>Scoped css and event test! click me!</h3>
	        </div>
    }
}

Omi.render(new App(), '#container')
```

## 其他JSX 语法
```
// JSX
<ul id="bestest-menu">
  {items.map( item =>
    <li class="item" {...attrs(item.id)}>{item.title}</li>
  )}
</ul>
```


```
// JSX
<MyList>{items.map(item => 
    <MyItem id={item.id} title={item.title} />
)}</MyList>
```

```
<MyComponent someProp={{x: 1, y: 2}}/>
```


## 插件举例

Omix 对插件体系进行了升级，使用方便比从前更加简便，这里拿 omi-finger 作为例子, omi-finger 是 Omi的[AlloyFinger](https://github.com/AlloyTeam/AlloyFinger)插件，让你轻松在Omi项目里支持各种触摸事件和手势:


### 通过npm安装 

``` js
npm install omi-finger
```

### 使用

```js
import Omi from 'omix';
import 'omi-finger';

class App extends Omi.Component {
    handleTap(evt){
        this.refs.touchArea.innerHTML+='<br/>Tap';
    }

    handleSwipe(evt){
        this.refs.touchArea.innerHTML+='<br/>Swipe-'+ evt.direction;
    }

    render() {
        return  <div>
	            <div omi-finger ref="touchArea" tap="handleTap"  swipe="handleSwipe" >
	                Tap or Swipe Me!
	            </div>
	        </div>
    }
}

Omi.render(new App(),"#container");
```

是不是超级简便。还在等什么，用到就是赚到，赶紧开始阅读 [中文文档](https://github.com/AlloyTeam/omix/tree/master/docs) 或者在 [Omi REPL](https://alloyteam.github.io/omix/repl/) 把玩一下！


# License
This content is released under the [MIT](http://opensource.org/licenses/MIT) License.
