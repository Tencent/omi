## Omi 5.0 发布 - Web 前端 MVVM 王者归来

### 写在前面

Omi 正式发布 5.0，依然专注于 View，但是对 MVVM 架构更加友好的集成，彻底分离视图与业务逻辑的架构。

![mvvm](../assets/mvvm.png)

### MVVM 演化

MVVM 其实本质是由 MVC、MVP 演化而来。

![mvvm](../assets/mvc-mvp.jpg)

目的都是分离视图和模型，但是在 MVC 中，视图依赖模型，耦合度太高，导致视图的可移植性大大降低，在 MVP 模式中，视图不直接依赖模型，由 P(Presenter)负责完成 Model 和 View 的交互。MVVM 和 MVP 的模式比较接近。ViewModel 担任这 Presenter 的角色，并且提供 UI 视图所需要的数据源，而不是直接让 View 使用 Model 的数据源，这样大大提高了 View 和 Model 的可移植性，比如同样的 Model 切换使用 Flash、HTML、WPF 渲染，比如同样 View 使用不同的 Model，最要 Model 和 ViewModel 映射好，View 可以改动很小甚至不用改变。

### Mapper

当然 MVVM 这里会出现一个问题, Model 里的数据映射到 ViewModel 提供该视图绑定，怎么映射？手动映射？自动映射？在 ASP.NET MVC 中，有强大的 [AutoMapper](https://www.c-sharpcorner.com/UploadFile/tirthacs/using-automapper-in-mvc/) 用来映射。针对 JS 环境，我特地封装了 [mapper.js](https://github.com/Tencent/omi/blob/master/packages/omi-cli/template/mvvm/src/view-model/mapper.js) 用来映射 Model 到 ViewModel。

```js
const testObj = {
  same: 10,
  bleh: 4,
  firstName: 'dnt',
  lastName: 'zhang',
  a: {
    c: 10
  }
}

const vmData = mapper({
  from: testObj,
  to: { aa: 1 },
  rule: {
    dumb: 12,
    func: function () {
      return 8
    },
    b: function () {
      //可递归映射
      return mapper({ from: this.a })
    },
    bar: function () {
      return this.bleh
    },
    //可以重组属性
    fullName: function () {
      return this.firstName + this.lastName
    },
    //可以映射到 path
    'd[2].b[0]': function () {
      return this.a.c
    }
  }
})
```

### Omi MVVM 实战



### 小结

从宏观的角度来看，Omi 的 MVVM 架构也属性网状架构，网状架构目前来看有:

* Mobx + React
* Hooks + React
* MVVM (Omi) 

大势所趋！简直是前端工程化最佳实践！也可以理解成网状结构是描述和抽象世界的最佳途径。那么网在哪？

* ViewModel 与 ViewModel 之间相互依赖甚至循环依赖的网状结构
* ViewModel 一对一、多对一、一对多、多对多依赖 Models 形成网状结构
* Model 与 Model 之间形成相互依赖甚至循环依赖的网状结构
* View 一对一依赖 ViewModel 形成网状结构

总结如下：

|| Model| ViewModel|View|
|---|----|----|
|Model|多对多|多对多|无关联|
|ViewModel|多对多|多对多|一对一|
|View|无关联|一多一|多对多|


## Star & Fork

* [https://github.com/Tencent/omi](https://github.com/Tencent/omi)