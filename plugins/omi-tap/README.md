## omi-tap

Support tap event in your [Omi](https://github.com/AlloyTeam/omi) project.

---

## Install

``` js
npm install omi-tap
```

## Usage

```js
import 'omi-tap';

class App extends Component {
    tapHandler(evt) {
        alert('Hello Omi + Parcel!')
    }

    render() {
        return (
            <div>
                <h1 omi-tap tap={this.tapHandler}>Hello Omi + Parcel 📦 🚀</h1>
            </div>
        )
    }
}

Omi.render(new App(),"#container");
```

# Debug The Project

```
yarn global add parcel-bundler
```
or:
```
npm install -g parcel-bundler
```

then:
```
npm start
```
or
```
parcel example/index.html --open
```

# License
This content is released under the [MIT](http://opensource.org/licenses/MIT) License.
