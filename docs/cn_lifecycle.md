<h2 id="生命周期">生命周期</h2>


|  名称  | 含义        | 时机  |
| :-------------: |:-------------:|: -----:|
| constructor  | 构造函数 | new的时候 |
| install  | 初始化安装，这可以拿到用户传进的data进行处理 | 实例化 |
| installed    | 安装完成，HTML已经插入页面之后执行。注意：组件被remove之后再进行restore也会执行   |   ** 实例化和存在期 ** |
| uninstall | 卸载组件。执行remove方法会触发该事件    |   销毁时 |
| beforeUpdate | 更新前     |   存在期 |
| afterUpdate | 更新后     |    存在期 |

## 示意图

![lc](http://images2015.cnblogs.com/blog/105416/201701/105416-20170119153018546-1566368987.png)
    
需要注意的是installed在实例化期也会执行，上图没有标出。比如组件被移除再进行还原会执行，再比如新增新的组件也会执行。
    
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