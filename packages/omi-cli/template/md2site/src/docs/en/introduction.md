## Introduction 

Md2site is a fast, simple & powerful tool that can be used for transformation of markdown to website powered by [Omi framework](https://github.com/Tencent/omi).

## Features

* Complete markdown syntax support
* Line Highlighting of code block with Simple syntax
* Multi-Language Support
* Responsive design
* Dynamic loading of MD files
* Based on [Omio framework](https://github.com/Tencent/omi/tree/master/packages/omio) and [omi-router](https://github.com/Tencent/omi/tree/master/packages/omi-router)

## Usage

``` bash {2}
npm i omi-cli -g           
omi init-md2site my-app  
cd my-app           
npm start               
npm run build            
```

> `npx omi-cli init-md2site my-app` is also supported(npm v5.2.0+).

Directory description:

```
├─ config
├─ public
├─ scripts
├─ src
│  ├─ assets
│  ├─ docs           //Store all your md of docs 
│  │   ├─ en         //Store all your md of docs 
│  │   ├─ zh-cn      //Store all your md of docs 
│  │   └─ config.js  //Config of your app
│  ├─ elements       //Store all custom elements
│  ├─ store          //Store all this store of pages
│  ├─ index.js       //Entry js of compiler，will build to index.html
│  └─ zh-cn.js       //Entry js of compiler，will build to zh-cn.html
```


### Table Test

|    | Hexo        | Md2site  |
| ------------- |:-------------:|:-----:|
| Markdown support | ★★★★★| ★★★★★ |
| File size of generated website | ★★★☆☆   |   ★★★☆☆ |
| Difficulty of getting started  | ★★★☆☆| ★★★☆☆ |
|  Secondary development | ★★★★☆     |   ★★★★☆ |
| Themes and plugins  | ★★★★☆     |   ★★★★☆ |
| Code highlight | ★★★★☆    |   ★★★★☆ |
| Multi language support | ★★★★☆    |   ★★★★☆ |
| Responsive | ★★★★★    |   ★★★★★ |