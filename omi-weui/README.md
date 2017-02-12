## omi-weui

WeUI Components build with Omi

## 安装

``` js
npm install omi-weui
```

## 使用

```js
import { Button, List， dialog } from 'omi-weui'

Omi.makeHTML('Button', Button);
Omi.makeHTML('List', List);

class Hello extends Omi.Component {
    constructor(data) {
        super(data);
        this.listData = {
            items:[
                {name:'item1'},
                {name:'item2'},
                {name:'item3'}]
        };
    }
    
    style () {
        return  `
            wrap{
                width:500px;
            }
         `;
    }
    
    showDialog(){
        dialog.confirm({
            msg:'I am Omi Dialog!',
            yes:function(){
                //alert('you click yes');
            },
            no:function(){
                //alert('you click no');
            }
        })
    }
    
    render() {
        return  `
        <div class="wrap">
            <Button data-text="测试按钮"  onClick="showDialog"  />
            <List data="listData" />
        </div>
        `;

    }
}

Omi.render(new Hello({ name : "Omi" }),"body");
```

## Link

* Github: https://github.com/pasturn/omi-weui
* Contributor: [pasturn](https://github.com/pasturn)  [dntzhang](https://github.com/dntzhang)

# License
This content is released under the [MIT](http://opensource.org/licenses/MIT) License.
