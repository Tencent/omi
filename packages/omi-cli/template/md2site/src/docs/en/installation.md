## Introduction 

Md2site is a fast, simple & powerful framework that can be used for transformation of markdown to website based on [Omi](https://github.com/Tencent/omi).

## Usage

``` js {2}
$ npm install md2site -g
$ md2site init your_project_name
$ cd your_project_name
$ npm run dev
$ npm run dist
```


```js
import { render, WeElement, define } from 'omi'

define('my-counter', class extends WeElement {
    static observe = true
    
    data = {
      count: 1
    }

    sub = () => {
      this.data.count--
    }

    add = () => {
      this.data.count++
    }

    render() {
      return (
        <div>
          <button onClick={this.sub}>-</button>
          <span>{this.data.count}</span>
          <button onClick={this.add}>+</button>
        </div>
      )
    }
  })

render(<my-counter />, 'body')
```


### Hexo VS Md2site

|    | Hexo        | Md2site  |
| ------------- |:-------------:|:-----:|
| Markdown support | ★★★★★| ★★★★★ |
| File size of generated website | ★★★☆☆   |   ★★★☆☆ |
| Difficulty of getting started  | ★★★☆☆| ★★★☆☆ |
|  Secondary development | ★★★★☆     |   ★★★★☆ |
| Themes and plugins  | ★★★★☆     |   ★★★★☆ |
| Code specifies row highlight | ★★★★☆    |   ★★★★☆ |
| Multi language support | ★★★★☆    |   ★★★★☆ |
| Responsive | ★★★★★    |   ★★★★★ |




## Usage

``` js
$ npm install md2site -g
$ md2site init your_project_name
$ cd your_project_name
$ npm run dev
$ npm run dist
```



## Usage

``` js
$ npm install md2site -g
$ md2site init your_project_name
$ cd your_project_name
$ npm run dev
$ npm run dist
```




## Usage

``` js
$ npm install md2site -g
$ md2site init your_project_name
$ cd your_project_name
$ npm run dev
$ npm run dist
```


## Usage

``` js
$ npm install md2site -g
$ md2site init your_project_name
$ cd your_project_name
$ npm run dev
$ npm run dist
```


## Usage

``` js
$ npm install md2site -g
$ md2site init your_project_name
$ cd your_project_name
$ npm run dev
$ npm run dist
```
