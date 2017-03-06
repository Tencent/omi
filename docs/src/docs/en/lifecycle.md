## Lifecycle

| Name | Meaning | Occasion |
| :-------------: | :-------------: | :-----: |
| constructor | The constructor | When new a constructor |
| install | The installation. We can process the data that user pass | When instantiate |
| installed | Complete the installation. It'll trigger after HTML being inserted to the page. Please note that it'll trigger when component being removed and restored | **Instantiation and existence** |
| uninstall | Uninstall the component. It'll trigger when remove is executed | When destroy |
| beforeUpdate | Before update | When existence |
| afterUpdate | After update | When existence |

## Illustration

![lc](http://images2015.cnblogs.com/blog/105416/201701/105416-20170119153018546-1566368987.png)

It should be noted that the installed will be executed during the instantiation, which is not shown above. For example, it'll executed when a component is removed and restored, or when the new component is being added.

### Examples

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

<a href="http://alloyteam.github.io/omi/website/redirect.html?type=lifecycle" target="_blank">Click me for the live demo</a>