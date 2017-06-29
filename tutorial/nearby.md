## 写在前面
Omi很适合大型复杂的Web页面开发，例如一些Web在线工具的开发。但是制作这种简单的QQ附近用户列表Web页，也不会有大炮哄蚊子的感觉。

项目开始之前，实现选择一个脚手架。可以使用[omi-cli](https://github.com/AlloyTeam/omi/tree/master/cli)快速创建项目脚手架。脚手架主要基于 Gulp + Webpack + Babel + BrowserSync 进行开发和部署。

Gulp用来串联整个流程，Webpack + Babel让你可以写ES6和打包，BrowserSync用来帮你刷浏览器，不用F5了。

这里需要注意的是，BrowserSync会启动localhost:3000导致你的AJAX请求跨域而无法拿到数据。

![](http://images2015.cnblogs.com/blog/105416/201702/105416-20170222184323476-1150194475.png)


所以，要使用Fiddler并配置Extention：

![](http://images2015.cnblogs.com/blog/105416/201702/105416-20170222184331445-1124037886.png)


## 目录

![](http://images2015.cnblogs.com/blog/105416/201702/105416-20170222184337726-1825094998.png)


目录结构也是和[Omi Github上的scaffolding](https://github.com/AlloyTeam/omi/tree/master/scaffolding)一样。
组件全放在component目录，公共的工具库放在common，其他资源文件放在asset里。

## 命令

开发
```js
npm run dev
```

发布
```js
npm run dist
```

## 开始写码

万事具备，开始写码。先写组件：

```js
import Omi from 'omi'

class UserList extends Omi.Component {
    constructor(data) {
        super(data)
    }

    install() {
        this.data.uin_info || (this.data.uin_info = [])
        this.data.uin_info.forEach(user => {
            this.prepareData(user)
        })
    }
    
    prepareData(user){
        user.desc_d = user.desc.split("&nbsp;")[0]
        user.desc_t = user.desc.split("&nbsp;")[1]
        user.isBoy = user.sex === "男"
        user.qlogo = user.url.replace("http://", location.protocol + "//").replace(/&amp;/g, "&")
        if (user.profession_desc) {
            user.hasProfession_desc = true
        }
    }
    
    appendUsers (users) {
        users.uin_info && users.uin_info.forEach(user =>{
            this.prepareData(user)
            this.data.uin_info.push(user)
        })
        this.update()
    }

    sendGift(uin, nick, qlogo) {
        //送礼物并关闭webview,此处省略
        //..
        //..
    }

    render() {
        return `
<div class="user_list">
    {{#uin_info}}
    <div class="item" onclick="sendGift('{{uin}}','{{nick}}','{{qlogo}}')">
        <div class="qlogo">
            <img style="width: 70px;" src="{{qlogo}}" />
        </div>
        <div class="main b1 bb">
            <div class="nick">{{{nick}}}</div>
            <div class="icons">
                {{#isBoy}}<span class="boy_age"><img src="component/user_list/boy.png" alt="" /><span>{{age}}</span></span> {{/isBoy}}
               {{^isBoy}}<span class="girl_age"><img src="component/user_list/girl.png" alt="" /><span>{{age}}</span></span> {{/isBoy}}
                {{#hasProfession_desc}} <span class="profession"><span>{{profession_desc}}</span></span> {{/hasProfession_desc}}
            </div>
            <div class="action">{{{intro}}}</div>
        </div>
        <div class="distance_info">{{desc_d}} · {{desc_t}}</div>
    </div>
    {{/uin_info}}
    <div style="text-align:center;font-size:13px;line-height:30px;height:30px;"><span class="loading"></span> 加载中...</div>
</div>
`
    }

    style() {
        return `


.qlogo {
    overflow: hidden;
    width: 70px;
    height: 70px;
    -webkit-border-radius: 50%;
    border-radius: 50%;
    position: absolute;
    top: 10px;
    left: 12px;
}
...
...
..这里省略大量.....
...
...

.distance_info {
    position: absolute;
    top: 15px;
    right: 9px;
    color: #7B7B84;
    font-size: 10px;
}

        `
    }
}

export default UserList
```

组件里面有5个方法:

* constructor 组件的构造函数，生命周期的一部分，其实在super上面和super调用下面可以对data做一些处理。super之上不能拿到this
* install 组件的初始化安装，生命周期的一部分，这里也可以拿到用户传进的data进行处理
* prepareData 对数据进行一些处理来满足模板的渲染
* appendUsers 新增数据，用来处理用户向下滚动的load more 的行为的时候调用
* sendGift 送礼物，点击每一项的时候会有送礼物的行为，业务相关，可以无视..

其他两个方法的render和style用来生成组件的HTML和局部CSS，不再叙述。
render里面使用了[mustache.js](https://github.com/janl/mustache.js)模板引擎；
如果使用omi.lite.js版本(不包含[mustache.js](https://github.com/janl/mustache.js)模板引擎)的话，你也可以使用ES6 map去遍历数据生成HTML，或者重写 Omi.template去使用任意你喜欢的模板引擎，非常灵活方便。

这里友情提醒一下，如果使用webstorm的话，可以把js version设置成JSX Harmony或者ECMAScript 6，这样才是写ES6+的姿势。

![](http://images2015.cnblogs.com/blog/105416/201702/105416-20170222184433148-472636444.png)


下面来看index.js:

```js
import Root from './config.js'
import Omi from 'omi'
import UserList from '../component/user_list/index.js'

Omi.makeHTML('UserList', UserList)

class Main extends Omi.Component {
    constructor(data) {
        super(data)
    }

    installed() {
        window.onscroll = () => this.loadMore()
        this.requestData(data => this.list.appendUsers(data))
    }

    loadMore() {
        const body = document.body,
            html = document.documentElement,
            height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight),
            vp_height = window.innerHeight

        if (height - document.body.scrollTop - vp_height < 200) {
            this.requestData(data => this.list.appendUsers(data))
        }
    }

    requestData(callback) {
        if (Root.isDev) {
            require.ensure([], ()=> {
                callback(require('./mock_data.js').default)
            })
        }else{
        	//ajax 请求数据，这里省略
        }
    }

    render() {
        return `
    <div class="main">
        <UserList name="list" />
    </div>`
    }
}

Omi.render(new Main(),'body')
```

通过Omi.makeHTML('UserList', UserList)这句代码，UserList变成了可以嵌套至render方法中的标签。如：

```js
 render() {
        return `
    <div class="main">
        <UserList name="list" />
    </div>`
    }
```

下面这行代码，是监听滚动，快滚动到底部的时候在loadMore里面会去请求。

```js
window.onscroll = () => this.loadMore()
```

通过height - document.body.scrollTop - vp_height < 200判断用户快要滚动底部，滚动到底部有个加载更多的行为，即：

```js
if (height - document.body.scrollTop - vp_height < 200) {
    this.requestData(data => this.list.appendUsers(data))
}
```

requestData是去服务器请求分页的数据，请求成功，会去调用this.list.appendUsers进行数据的添加。
慢着？this.list哪里来的？appendUsers又是哪里定义的方法？且看下面：

```js
 <UserList name="list" />
```

上面标记的name，让你可以直接通过this.list访问到UserList对象的实例，所以也就可以调用它的appendUsers方法！

再来看下数据模拟：

```js
if (Root.isDev) {
        require.ensure([], ()=> {
            callback(require('./mock_data.js').default)
        })
    }
```

这里在dev环境下是mock数据，使用了require.ensure，这样当你npm run dist的时候，mock的数据就不会被打包进js里了！！

## 最后

好了，就这么多，Omi让代码真心方便简洁~~~

### 相关地址

* [演示地址](http://alloyteam.github.io/omi/example/old-bak/qq-nearby/dev/index.html)
* [源码地址](https://github.com/AlloyTeam/omi/tree/master/example/old-bak/qq-nearby)
