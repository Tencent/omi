## mp-jsx

> 原生小程序插上 JSX 的翅膀

mp-jsx 是什么？它让你直接在原生小程序使用 JSX 写 WXML，实时编译，实时预览。

![](https://github.com/Tencent/omi/raw/master/assets/mp-jsx.jpg)

- JSX 代替 WXML 书写结构，精简高效
- 对原生小程序零入侵
- 支持 js 和 ts
- 实时编译，实时预览

## 立即开始

```bash
$ npm i omi-cli -g              
$ omi init-jsx my-app    
$ cd my-app        
$ npm start               
```
> `npx omi-cli init-jsx my-app` 也支持(npm v5.2.0+)

生成的目录和官方的模板一致，只不过多了 JSX 文件，只需要修改 JSX 文件就会实时修改 WXML。

也支持 typescript:

```bash           
$ omi init-jsx-ts my-app             
```

其他命令一样。

> `npx omi-cli init-jsx-ts my-app` 也支持(npm v5.2.0+)

欢迎使用，大幅提高开发效率。
