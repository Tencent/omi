## 生命周期

|name   |avatars   |company   | 
|---|---|---|
| constructor  | 构造函数 | new的时候 |
| install  | 初始化安装，这可以拿到用户传进的data进行处理 | 实例化 |
| installed    | 安装完成，HTML已经插入页面之后执行  |  实例化  |
| uninstall | 卸载组件。执行remove方法会触发该事件    |   销毁时 |
| beforeUpdate | 更新前     |   存在期 |
| afterUpdate | 更新后     |    存在期 |
| beforeRender | render函数执行之前     |    存在期和实例化 |

## 示意图

![lc](http://images2015.cnblogs.com/blog/105416/201703/105416-20170322083548924-1871234168.jpg)
       
### 举个例子

```js
class Timer extends Omi.Component {
    constructor(data) {
        super(data);
    }

    install () {
        this.data = {secondsElapsed: 0};
    }

    tick() {
        this.data.secondsElapsed++;
        this.update();
    }

    installed(){
        this.interval = setInterval(() => this.tick(), 1000);
    }

    uninstall() {
        clearInterval(this.interval);
    }


    style () {
        return `
        .num { color:red; }
        `;
    }

    render () {
        return `<div>Seconds Elapsed:<span class="num"> {{secondsElapsed}}</span></div>`;
    }
}
```

<a href="http://alloyteam.github.io/omi/website/redirect.html?type=lifecycle" target="_blank">点击这里→在线试试</a>
