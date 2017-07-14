# QQ日迹Omi实战开发，从0到1

相信大家对Omi应该都不陌生了，如果还有不了解的同学先看看这里。了解并使用Omi之后你会发现真的回不去了~~~

[精通Omi框架](https://github.com/AlloyTeam/omi/blob/master/tutorial/all.md)

先简单说一下吧，Omi就是一个可以快速开发项目的组件化框架，和vue／react一样为了节省生产力的。想了解Omi和vue还有react区别的，上面文档有讲解，或者加入群256426170，可以面对面咨询Omi作者dnt。我这篇文章将使用Omi从0到1来完成一个移动端的项目，让大家了解Omi开发的方便快捷。

</br>
  
# 开发准备：
这次我们挑选了一个日迹发现页来作为例子开发，如果有用手机QQ的同学，应该有知道“日迹”这个项目，这次我们就挑选了一个日迹的一个发现页，入口在手机QQ -> 动态 -> 日迹 -> 右上角发现
发现页如下

<img src="http://www.alloyteam.com/wp-content/uploads/2017/07/1-169x300.jpg" alt="" width="169" height="300" class="alignnone size-medium wp-image-12861" />

开发一个移动端页面和PC上开发是一样的，首先要分析页面划分模块，发现页很简单，可以看成一个列表，然后里面每一块是一个item
如果不用组件化的话，ul+li是不是就可以上手干了～但我们要告别原始社会的开发方式，采用Omi框架进行开发，下面就正式开始开发～
</br>
# 开发过程：
</br>
## 1/ 脚手架
开发一个项目(一个页面也是一个项目)，首先我们需要脚手架，脚手架可以从历史项目中复制过来，也可以自己重新搭建。使用Omi的话就方便很多啦，我们只需要下面两步

```
    npm install omi-cli -g
    omi-cli init [project name]
```

然后脚手架就OK了，下面简单的看一下脚手架，了解一下项目结构

<img src="http://www.alloyteam.com/wp-content/uploads/2017/07/2-204x300.png" alt="" width="204" height="300" class="alignnone size-medium wp-image-12862" />

下面那些.babelrc／.eslintrc／package.json等就不说了
先看目录，config是配置目录，里面有基础配置和项目配置，一般我们不需要修改
tools里面是构建相关，webpack.base.js是基础配置，然后测试环境和生产环境的区分就靠script.js了
  
src是开发的目录，也是我们代码所在地，打开src再看一下

<img src="http://www.alloyteam.com/wp-content/uploads/2017/07/3.png" alt="" width="214" height="171" class="alignnone size-full wp-image-12863" />

应该还是很好理解的，page是页面，这里面每个目录就意味着有一个页面。页面的入口是目录下的main
  
component是组件，组件也是以文件夹为粒度来的，里面一定有一个js文件，然后组件相关的资源文件，样式文件也都放在js的同一目录下，比如这样

<img src="http://www.alloyteam.com/wp-content/uploads/2017/07/4-193x300.png" alt="" width="193" height="300" class="alignnone size-medium wp-image-12864" />
  
组件的图片／样式和js都有了，那外面的css／img／js呢？是一些全局资源和公共方法等，这样一来复用就极为方便了。
  
## 2/ 正式开发
首先我们引入一下rem统一的js代码，现在来说用rem还是比px方便很多的，代码如下：

```js
    ;(function(win) {
        var doc = win.document;
        var docEl = doc.documentElement;
        var tid;

        function refreshRem() {
            var width = docEl.getBoundingClientRect().width;
            if (width > 540) { // 最大宽度
                width = 540;
            }
            var rem = width / 10; // 将屏幕宽度分成10份， 1份为1rem
            docEl.style.fontSize = rem + 'px';
        }

        win.addEventListener('resize', function() {
            clearTimeout(tid);
            tid = setTimeout(refreshRem, 300);
        }, false);
        win.addEventListener('pageshow', function(e) {
            if (e.persisted) {
                clearTimeout(tid);
                tid = setTimeout(refreshRem, 300);
            }
        }, false);

        refreshRem();

    })(window);
```

这样我们就将不同屏幕下的rem与px转换统一了，视觉稿上面的px单位除以37.5就可以了，这一步也可以在构建的时候做

接下来我们考虑到项目是一个长列表，说到长列表就肯定离不开滚动，**说到滚动就想到了安卓下局部滚动会很卡**。那么这里可以用全局滚动搞定么？可以的，因为页面本身不复杂。
那么复杂的情景下，必须是局部滚动的场景怎么办呢？AlloyTouch欢迎你~解决各类滚动问题，而且有Omi插件的无缝支持版本。

[使用omi-touch](https://github.com/AlloyTeam/omi/tree/master/plugins/omi-touch)

准备工作都考虑完善之后我们就开始写第一个组件了！第一个组件可以看成是整个列表的一个包裹盒，盒子里面不仅有list，还有按钮和一些其他的玩意
先上一下代码

```js
    import List from '../list/index';

    Omi.tag('List', List);

    class Main extends Omi.Component {
        constructor(data) {
            super(data);

            this.inTouch = false;
            this.touchXY = [];
            this.data.loadWord = '正在加载中...';
        }

        style() {
            return `
                .record {
                    position: fixed;
                    bottom: 0.533333rem;
                    left: 50%;
                    -webkit-transform: translateX(-50%);
                    transform: translateX(-50%);
                    background-image: url(${require('./img/record.png')});
                    width: 2.000000rem;
                    height: 2.000000rem;
                    background-size: 100% 100%;
                }
                .isend {
                    position: relative;
                    text-align: center;
                    margin: 0 auto;
                    margin-left: -12px;
                    padding: 12px 0;
                    font-size: 14px;
                    color: rgba(119, 119, 119, 1);
                }
            `;
        }

        render() {
            return `
            <div class="main">
                <List omi-id="list"></List>
                <div class="record" ontouchmove="handleTouchMove(this, event)" ontouchstart="handleTouchStart(this, event)" ontouchend="handleTouchEnd(this, event)"></div>
                <div class="isend">${this.data.loadWord}</div>
            </div>`;
        }
        handleTouchMove(dom, e) {
            this.inTouch = false;
        }
        handleTouchStart(dom, e) {
            this.inTouch = true;

            this.touchXY[0] = e.touches[0].screenX;
            this.touchXY[1] = e.touches[0].screenY;
        }
        handleTouchEnd(dom, e) {
            console.log(e.changedTouches[0]);

            var diffX = Math.abs(e.changedTouches[0].screenX - this.touchXY[0]);
            var diffY = Math.abs(e.changedTouches[0].screenY - this.touchXY[1]);

            if(this.inTouch && diffX < 30 && diffY < 30) {
                // handle tap event....
                this.inTouch = false;
            }
            e.preventDefault();
            
        }
    }

    export default Main;
```

超级简单明了，constructor是组件的构造函数，也是生命周期的开始，因为我们包裹盒的组件一直存在，所以没有用上其他生命周期的方法。但Omi对组件生命周期的控制可是非常强大的，如下图

<img src="http://images2015.cnblogs.com/blog/105416/201703/105416-20170322083548924-1871234168.jpg" alt=""  />

接着是style和render，这里是用模版字符串写css和html，很方便，但如果觉得麻烦也可以用文件的形式，后面会说

下面三个是啥呢？是自己模拟的tap，因为移动端下onclick有300ms的延迟，所以我们用的点击都是模拟的。tap用语言描述就是一次点击，我们要保证touchend时候手指的位置不能距离touchstart的位置太远，而且end和start期间不能触发touchmove，这也就是自己实现tap的核心了。

如果有zepto的话本身可以用ontap事件，不必自己去写，但是我这里没有引入zepto，而且zepto本身是jquery类似的写法，和框架开发还是比较背驰的。那么我们就只能自己写这么多代码去模拟么？？
当然不是！因为我们有alloyfinger-omi版，我们只需要这样

安装:

```
npm install omi-finger
```

使用:
```js
    import OmiFinger from 'omi-finger';
    OmiFinger.init();
```

[使用omi-finger](https://github.com/AlloyTeam/omi/tree/master/plugins/omi-finger)

就可以了！alloytouch里面的手势操作omi-finger都可以用，而且用起来也超级方便！

```js
    ......
    render() {
        return `
        <div class="main">
            <List omi-id="list"></List>
            <div class="record" omi-finger tap="handleTap"></div>
            <div class="isend">${this.data.loadWord}</div>
        </div>`;
    }

    handleTap() {
        // handle tap event....
    }
    ......
```

这样就可以了，这就是Omi插件体系的好处，顺带一提alloytouch也可以像finger这样使用~

这样最外层的包裹组件就已经ok了，我们来看核心的list组件。
再上代码

```js
    class List extends Omi.Component {
        constructor(data) {
            super(data);

            this.length = 0;

            this.data.leftList = [];
            this.data.rightList = [];

        }
        style() {
            return require('./_index.less');
        }

        render() {
            return `
                <div class="wrap clear" omi-finger tap="handleTap">
                <div class="left">
                    ${
                        this.data.leftList.map((a, b) => 
                            `<Item data="data.leftList[${b}]"></Item>`
                        ).join('')
                    }
                </div>

                <div class="right">
                    ${
                        this.data.rightList.map((a, b) => 
                            `<Item data="data.rightList[${b}]"></Item>`
                        ).join('')
                    }
                </div>
            </div>`;
        }
        add(data) {
            for(let i = 0; i < data.length; i++) {
                // handle data


                if(i % 2 === 0) {
                    this.data.leftList.push(info);
                } else {
                    this.data.rightList.push(info);
                }
            }

            this.update();
        }
        handleTap(e) {

            // handle tap;

        }
        reset() {
            this.data.leftList = [];
            this.data.rightList = [];
        }
    }
```
首先可以看到和main不同的是，这里我们就把css给抽离成文件的形式了，纯看个人喜好。不过有一些需要注意的地方：
**1. 全局css只需要在文件中import就可以了
2. 局部css或者less文件名必须以_开头，loader会针对进行操作，就像上面的代码一样
3. html抽离成文件的话需要用模版引擎的方式，上面代码用的是ES6模版字符串，这样的话是无法抽离成文件的。**

**omi.js默认的模版引擎是soda**，如果还有喜欢ejs、mustache语法的同学，虽然omi.js本身没有内置该写法，但是用omi.mustache.js却将其默认为内置模版引擎
具体的情况如下：

* omi.js 使用 sodajs 为内置指令系统
* omi.art.js 使用 art-template 为内置模版引擎
* omi.lite.js 不包含任何模板引擎
* omi.mustache.js 使用 mustache.js为内置模版引擎

接下来重点讲的就是其中的**循环生成子组件部分**。
循环渲染有多种方式，刚刚代码部分用的是ES6执行map，然后获取到数组中每一个元素，渲染
我们也可以使用omi中内置的soda模版的指令方式，如下代码也可以实现同样的功能

```js
    render() {
        return `
            <div class="wrap clear" omi-finger tap="handleTap">
            <div class="left">
                <Item o-repeat="item in leftList" group-data="data.leftList"></Item>
            </div>

            <div class="right">
                <Item o-repeat="item in rightList" group-data="data.rightList"></Item>
            </div>
        </div>`;
    }
```

我们在add方法中进行数据的处理，这里组件的data下面有两个数组，分别是左右两边的。注意这里add方法最后有调用一个update()方法，**omi本身没有双向绑定，将更新的操作交给了开发者。**当然如果希望双向绑定的话也可以引入Mobx之类的第三方库。

list组件里面有一个item组件，这个item组件就是最后一个啦，它需要从list中接受到自己的数据，然后将数据给展示出来
数据传递的方式有很多种，简单的说一下

* on-* 代表传递父组件向子组件注入的回调函数，比on-page-change="pageChangeHandler"
* data-* 代表直接传递字符串
* :data-* 代表传递javascript表达式，比如data-num="1" 代表传递数字1而非字符串，data-num="1+1"可以传递2。
* ::data-* 代表传递父组件的属性，比如上面的::data-items="data.items"就代表传递this.data.items给子组件
* data 代表传递父组件的属性，比如data="user"代表传递this.user给子组件
* :data 代表传递javascript表达式，比如data="{ name : 'dntzhang' , age : 18 }"代表传递{ name : 'dntzhang' , age : 18 }给子组件
* group-data 代表传递父组件的数组一一映射到子组件

我们采用的是第x种，然后item中就是简单的展示啦

```js
    class Item extends Omi.Component {
        constructor(data) {
            super(data);
            console.log('data', data);
        }
        style() {
            return require('./_index.less');
        }
        render() {
            return `
                <div class="item">
                    <div class="card" vid="${this.data.vid}" shoot="${this.data.shoot}" uin="${this.data.uin}">
                        <div class="pic" style="background-image: url(${this.data.pic})"></div>
                        <div class="txt">
                            <div class="head" style="background-image: url(${this.data.head})"></div>
                            <div class="other">
                                <div class="nick" data-content='${this.data.nick}'>${this.data.nick}</div>
                                <div class="info">
                                    <span class="watch"><i></i>${this.data.watch}</span>
                                    <span class="like"><i></i>${this.data.like}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }
    }

    export default Item;
```

## 3/ 构建相关
开发过程中我们只需要**npm start**，然后就可以专注的撸代码了
可以用默认的localhost:9000端口进行访问
也可以修改config目录下的config.js文件，用路由的方式访问，比如我这样

```js
    module.exports = {
        "webserver": "//xxx.qq.com/mobile/",
        "cdn": "",
        "port": "9000",
        "route": "/mobile/"
    };
```

当然我这里是有配置代理的，将xxx.qq.com/mobile指向了本地的localhost:9000
当你开发完成后，只需要运行

```
**npm run dist**
```
生产环境的代码就已经搞定了~接下来就是部署、提测...

# 结语
文章一些cgi、util相关的代码就省略掉了，主要目的是讲解omi的开发。虽然是一个很小的页面，不过可以看出来用omi+omi-cli开发还是很简单的哈~omi的能力当然不止这一点点，我这篇文章只是抛砖引玉，大家想解放生产力的话~快来使用omi吧~
在线体验地址，请使用手机QQ扫描下方二维码
<img src="http://www.alloyteam.com/wp-content/uploads/2017/07/6.png" alt="" width="245" height="244" class="alignnone size-full wp-image-12866" />
github地址：

* [omi](https://github.com/AlloyTeam/omi)
* [omi-cli](https://github.com/AlloyTeam/omi-cli)

有问题的话可以留言大家一起交流~