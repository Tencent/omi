# Md2site

Md2site是基于[Omi](https://github.com/AlloyTeam/omi)的一款Markdown转网站工具，使用简单，生成的文件轻巧，功能强大。

## 安装使用 md2site

``` js
$ npm install md2site -g
$ md2site init your_project_name
$ cd your_project_name
$ npm run dev
$ npm run dist
```

### Hexo VS Md2site

|    | Hexo        | Md2site  |
| ------------- |:-------------:|:-----:|
| Markdown支持 | ★★★★★| ★★★★★ |
| 网站文件尺寸    | ★★★☆☆   |   ★★★★★ |
| 上手难度  | ★★★★★| ★★★★★ |
| 二次开发 | ★★★★☆     |   ★★★★★ |
| 主题与插件 | ★★★★★     |   ★★★★☆ |
| 代码指定行高亮 | ★★★★☆    |   ★★★★★ |
| 多语言支持 | ★★★★☆    |   ★★★★★ |
| 响应式 | ★★★★★    |   ★★★★★ |

    注:星星更多的，代表对比获胜。

# Md2site

Transform Markdown to Website base on [Omi](https://github.com/AlloyTeam/omi) Framework.

### Installation
Prerequisites: Node.js (>=6.x), npm version 3+

```
$ npm install md2site -g
```

### Usage

```
$ md2site init                     // in current directory
```
or 
```
$ md2site init your_project_name   // in new directroy named project name
```

md2site will run 'npm install' to install dependencies.

### Write your markdown and preview

Write your markdowns and config the website in docs folder, you can run the command to preview the docs:

``` js
$ npm run dev
```

### Generate the website

``` js
$ npm run dist
```

