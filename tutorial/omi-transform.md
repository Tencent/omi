## Omi官方插件系列 - omi-transform介绍

[Omi框架](https://github.com/AlloyTeam/omi/)正式发布了[omi-transform](https://github.com/AlloyTeam/omi/tree/master/plugins/omi-transform)作为Omi组件化开发特效运动解决方案，让你轻松在Omi项目里快速简便支持CSS3 Transform设置。先说说 [transform.js](http://alloyteam.github.io/AlloyTouch/transformjs/) (npm上的名字是 css3transform)。transform.js作为移动Web特效解决方案，在手Q兴趣部落、日迹、QQ群、QQ附近等项目中广泛使用，以激进的**修改**DOM属性为代价，带来极为便利的可编程性。

你可以通过[http://alloyteam.github.io/AlloyTouch/transformjs/](http://alloyteam.github.io/AlloyTouch/transformjs/)快速了解它。

上面官网的例子都是原声js的，transformjs也拥有react版本，你也可以在react中以声明式的方式使用transformjs：

``` js
render() {
    return (
        <Transform
          translateX={100}
          scaleX={0.5}
          originX={0.5}>
          <div>sth</div>
        </Transform>
    );
}
```

## 3分钟掌握omi-transform

### 演示

[http://alloyteam.github.io/omi/plugins/omi-transform/example/simple/](http://alloyteam.github.io/omi/plugins/omi-transform/example/simple/)

### 通过npm安装 

``` js
npm install omi-transform
```

### 使用

```js
import Omi from 'omi';
import OmiTransform from '../../omi-transform.js';

OmiTransform.init();

class App extends Omi.Component {
    constructor(data) {
        super(data);
    }

    installed(){
        setInterval(function(){
            this.refs.test.rotateZ += 0.1;
        }.bind(this));
    }

    render() {
        return  `
            <div omi-transform class="test" ref="test" rotateZ="45" translateX="100" perspective="400">
                omi-transform
            </div>

        `;
    }
}

Omi.render(new App(),"#container");
```

* 在需要使用transformjs的DOM上标记 omi-transform 和 ref="xxx" 
* 在组件函数里便可以使用 this.refs.xxx 来读取或者设置 css transform属性
* this.refs.xxx 支持 "translateX", "translateY", "translateZ", "scaleX", "scaleY", "scaleZ", "rotateX", "rotateY", "rotateZ", "skewX", "skewY", "originX", "originY", "originZ", "perspective"这些属性设置和读取
* 没有标记perspective的话代码没有透视投影

## 性能对比

因为react版本会有diff过程，然后apply diff to dom的过程，state改变不会整个innerHTML全部替换，所以对浏览器渲染来说还是很便宜，但是在js里diff的过程的耗时还是需要去profiles一把，如果耗时严重，不在webworker里跑还是会卡住UI线程导致卡顿，交互延缓等。所以要看一看CPU的耗时还是很有必要的。

下面数据是对比omi-transform和react-transform，两种方式使用chrome profiles了一把。

**先看总耗时对比**：

react-transform：
![](http://images2015.cnblogs.com/blog/105416/201612/105416-20161219093619916-74108507.png)

omi-transform：
![](http://images2015.cnblogs.com/blog/105416/201612/105416-20161219093636291-1750787495.png)


- react在8739秒内CPU耗时花费了近似**1686ms**
- Omi方式在9254ms秒内CPU耗时花费近似**700ms**

在不进行profiles就能想象到react是一定会更慢一些，因为state的改变要走把react生命周期走一遍，但是可以看到react的耗时还是在可以接受的范围，没有慢到难以接受。

而Omi的方式则和传统的原生js的耗时一模一样。以为运动过程不进行DOMI Diff!!

慢着？不进行Diff？意思就是组件不进行update？
意思就是万一组件update，所有运动的状态都会丢失？Omi怎么解决这个问题？

## 状态保存

组件里的某个DOM在运动过程中，可能会由于其他逻辑，进行update。有可能是用户交互，有可能是数据返回的回调。所以，update前后，DOM的状态的保留显得尤其重要，不然的话就会有闪烁、跳跃的效果或者其他显示逻辑错误。

``` js
	...
    constructor(data) {
        super(data);
		//初始状态
        this.rotateZ  = 45;
    }

    installed(){
        setInterval(() =>{
            //sync for update 记录同步到this.rotateZ
            this.rotateZ = this.refs.test.rotateZ += 0.1;
        });
    }

    render() {
    	//通过 ${this.rotateZ} 设置rotateZ
        return  `
            <div omi-transform class="test" ref="test" rotateZ="${this.rotateZ}" translateX="100" perspective="400" >
                omi-transform
            </div>

        `;
    }
    ...
```

上面的所有例子和代码可以在[这里](https://github.com/AlloyTeam/omi/tree/master/plugins/omi-transform/example)找到。

## Omi相关

* Omi官网[omijs.org](http://www.omijs.org)
* Omi的Github地址[https://github.com/AlloyTeam/omi](https://github.com/AlloyTeam/omi)
* 如果想体验一下Omi框架，可以访问 [Omi Playground](http://alloyteam.github.io/omi/example/playground/)
* 如果想使用Omi框架或者开发完善Omi框架，可以访问 [Omi使用文档](https://github.com/AlloyTeam/omi/tree/master/docs#omi使用文档)
* 如果你想获得更佳的阅读体验，可以访问 [Docs Website](http://alloyteam.github.io/omi/website/docs.html)
* 如果你懒得搭建项目脚手架，可以试试 [omi-cli](https://github.com/AlloyTeam/omi/tree/master/cli)
* 如果你有Omi相关的问题可以 [New issue](https://github.com/AlloyTeam/omi/issues/new)
* 如果想更加方便的交流关于Omi的一切可以加入QQ的Omi交流群(256426170)

![](http://images2015.cnblogs.com/blog/105416/201702/105416-20170208095745213-1049686133.png)