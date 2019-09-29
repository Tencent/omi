English | [简体中文](./README.CN.md) 

# Omio

> Omi for old browsers(IE8+)

---

## Use immediately

```bash
$ npx omi-cli init-o my-app   
$ cd my-app           
$ npm start                     
$ npm run build               
```

> If you want use babel7 + webpack4(not friendly to IE), please use `npx omi-cli init my-app`   

## Differences to omi

Omio has the same grammar as omi, but there are also some differences:

* Omio does not support slot, please use `props.children` instead like react 
* Reset.css is valid in omio, but not in omi

## Use in omi project

``` bash
npm i omio
```

## Omiu

> Omi ui.

Simple UI framework, compatible with omi and omio.

* [English Docs](https://tencent.github.io/omi/packages/omiu/examples/build/index.html)
* [中文文档](https://tencent.github.io/omi/packages/omiu/examples/build/zh-cn.html)

### Webpack Alias

If you want to use omio under existing omi projects, no code changes are required through the following configuration:

```js
module.exports = {
  //...
  resolve: {
    alias: {
      omi: 'omio'
    }
  }
};
```

## License

[MIT](https://github.com/Tencent/omi/blob/master/LICENSE) © [dntzhang](https://github.com/dntzhang)
