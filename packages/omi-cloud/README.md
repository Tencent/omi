# Omi Cloud 源码

### 小程序码

![](../../assets/omi-cloud.jpg)

### 郑重说明

关于上面的小程序，由于源码把`evt.currentTarget`写成了`evt.target`，导致你点击主页列表 Item 的文字的时候进入详情页会无限 loading，因为 evt.target.dataset.id 为 undefined，请不要点击到文字进入详情，请点击 Item 的空白区域进入详情！这个 bug 会在下一版本中修复~。广大程序员也要引以为戒，不要犯这么低级的错误，忘记 current，用户两行泪！修复提交的详情：https://github.com/Tencent/omi/commit/44bf1c70c1ab02aa061ebd0bd14893c483e6946c

### 快速小程序云开发

```bash
$ npm i omi-cli -g 
$ omi init-cloud my-app     
$ cd my-app          
$ npm start          
```

### 依赖的数据表

![](../../assets/omi-cloud-db.jpg)


![](../../assets/omi-cloud-db-todo.jpg)