## omi-tap

Support tap event in your [Omi](https://github.com/AlloyTeam/omi) project.

---

## Install

``` js
npm install omi-tap
```

## Usage

```js
import Omi from 'omi';
import OmiTap from 'omi-tap';

class App extends Component {

    constructor(){
        super()
        this.tapHandler = this.tapHandler.bind(this)
  }

    tapHandler(evt) {
        alert('Hello Omi + Parcel!')
    }

    render() {
        return (
            <div>
                <OmiTap onTap={this.tapHandler}>
                    <h1>Hello Omi + Parcel 📦 🚀</h1>
                </OmiTap>
            </div>
        )
    }
}

Omi.render(<App />,"#container");
```

# License
This content is released under the [MIT](http://opensource.org/licenses/MIT) License.
