## 简介

Md2site 是基于 [Omi](https://github.com/Tencent/omi) 的一款 Markdown 转网站工具，使用简单，生成的文件轻巧，功能强大。

## 特性

* 完整 markdown 语法支持
* 代码高亮，特定行高亮
* 多语言支持
* 响应式设计，手机阅读体验友好
* 动态加载 md 文件
* 基于 [Omio framework](https://github.com/Tencent/omi/tree/master/packages/omio) 和 [omi-router](https://github.com/Tencent/omi/tree/master/packages/omi-router)，兼容 IE9+

## 安装

``` bash {2}
npm i omi-cli -g           
omi init-md2site my-app  
cd my-app           
npm start               
npm run build            
```

> `npx omi-cli init-md2site my-app` (npm v5.2.0+ 可以一条命令直接使用).

文件目录描述:

```
├─ config
├─ public
├─ scripts
├─ src
│  ├─ assets
│  ├─ docs           //文档的目录
│  │   ├─ en         //英文文档目录
│  │   ├─ zh-cn      //简体中文目录
│  │   └─ config.js  //配置
│  ├─ elements       //所有组件
│  ├─ store          
│  ├─ index.js       //编译的入口，对应编译成 index.html
│  └─ zh-cn.js       //编译的入口，对应编译成 zh-cn.html
```

### 表格测试

|    | Hexo        | Md2site  |
| ------------- |:-------------:|:-----:|
| Markdown 支持 | ★★★★★| ★★★★★ |
| 输出文件尺寸 | ★★★☆☆   |   ★★★☆☆ |
| 上手难度  | ★★★☆☆| ★★★☆☆ |
| 二次开发 | ★★★★☆     |   ★★★★☆ |
| 主题和插件  | ★★★★☆     |   ★★★★☆ |
| 代码高亮 | ★★★★☆    |   ★★★★☆ |
| 国际化 | ★★★★☆    |   ★★★★☆ |
| 响应式 | ★★★★★    |   ★★★★★ |