# Omi树组件omi-tree编写指南

[Omi框架](https://github.com/AlloyTeam/omi)能够以少量的代码声明式地编写可拖拽移动节点的树形组件。
通常树组件能够考验UI框架的健壮性，因为需要使用到UI框架的如下特性：

* 组件嵌套
* 组件传值
* 组件批量传值
* 组件依赖自身递归嵌套(nest-self)
* 子、孙或炎黄子孙访问根组件实例

下面来介绍下使用　omi-tree　的开发全过程。你也可以无视文章，先体验一把和直接编辑源码试一把：

[omi-tree playground](https://alloyteam.github.io/omi/example/playground/tree.html)

## 类划分

* tree.js 树组件的根容器类，包含节点移动，根据id获取节点等通用方法，这里把其排除在tree-node之外
* tree-node.js 树节点，自递归嵌套组件，因为tree-node中可以包含tree-node

树的数据规则：

``` js
{
    name: 'Root',
    children: [
        {
            name: 'A',
            id: 1,
            children: [
                { id: 4, name: 'A1', children: [] },
                { id: 7, name: 'A2', children: [] }
            ]
        },
        {
            name: 'B',
            id: 2,
            children: [
                { id: 5, name: 'B1', children: [] },
                { id: 8, name: 'B2', children: [] }
            ]
        },
        {
            name: 'C',
            id: 3, children: [
            { id: 6, name: 'C1', children: [] },
            { id: 9, name: 'C2', children: [] }
        ]
        }
    ]
}
```

可以看到，每个节点都有唯一的id来标识，每个节点也有children属性来存放自己的子节点的信息。

## 组件HTML结构

tree结构:

```js
<ul>
  <tree-node o-repeat="child in children" group-data="data.children"></tree-node>
</ul>
```

* 通过 o-repeat 生成所有 tree-node
* group-data 把 data.children 的数据批量传递给各个 tree-node

这里需要特别注意的是:

* o-repeat 等所有指令对应的 scope 数据是 this.data
* group-data，data等等 的 scope 是 this

tree-node结构:

```js
<li data-node-id="{{id}}"  draggable="true"  ondragstart="dragStartHandler" ondragleave="dragLeaveHandler"  ondrop="dropHandler" ondragover="dragOverHandler" >
    <div data-node-id="{{id}}">{{name}}</div>
    <ul data-node-id="{{id}}" o-if="children.length > 0">
        <tree-node o-repeat="child in children" group-data="data.children"></tree-node>
    </ul>
</li>
```

可以看到每个tree-node都标记了draggable代表可以拖拽，drag和drop的支持情况大家可以caniuse一把。

* 每个tree-node 既是拖拽对应，也是drop容器对象
* li、div和ul都标记了 data-node-id 来存放id在dom元素上方便js里读取和传递

## 完整代码解析

先看tree:

``` js
class Tree extends Omi.Component {
    //移动节点
    moveNode(id, parentId) {
        if (id === parentId) {
            return
        }

        if(this.check(parentId, id)) {
            let parent = this.getChildById(parentId, this.data.children)
            let child = this.removeChildById(id, this.data.children)
            parent.children.push(child)
            this.update()
        }
    }
    //验证子节点的孩子节点是否包含父亲节点，这里主要是为了防止把父节点拖拽到自己的孩子节点当中，这是个错误的逻辑操作
    check(parentId, childId){
        let current = this.getChildById(childId, this.data.children),
            children = current.children
        for (let i = 0, len = children.length; i < len; i++) {
            let child = children[i]
            if (child.id === parentId) {
                return false
            }

            let errorIds = this.check(parentId, child.id )
            if (!errorIds) {
                return false
            }
        }

        return true
    }
    //根据id移除child节点数据
    removeChildById(id, children) {

        for (let i = 0, len = children.length; i < len; i++) {
            let child = children[i]
            if (child.id === id) {
                children.splice(i, 1)
                return child
            }

            let target = this.removeChildById(id, child.children)
            if (target) {
                return target
            }

        }
    }
    //根据id获取child节点数据
    getChildById(id, children) {
        for (let i = 0, len = children.length; i < len; i++) {
            let child = children[i]
            if (child.id === id) {
                return child
            }

            let target = this.getChildById(id, child.children)
            if (target) {
                return target
            }
        }
    }

    render() {
        return `<ul>
                  <tree-node o-repeat="child in children" group-data="data.children"></tree-node>
              </ul>`
    }
}

//生成标签用于声明式嵌入其他组件
Omi.tag('tree', Tree)
```

下面来看 tree-node:

``` js
class TreeNode extends Omi.Component {

    dropHandler(evt) {
        //通过evt.dataTransfer.getData接收传递过来的数据
        this.getRootInstance(this.parent).moveNode(parseInt(evt.dataTransfer.getData("node-id")), parseInt(evt.target.dataset['nodeId']))
        this.node && this.node.classList.remove('drag-over')
        evt.stopPropagation()
        evt.preventDefault()

    }

    getRootInstance(parent){
        if(parent.moveNode){
            return parent
        }else{
            return this.getRootInstance(parent.parent)
        }

    }

    dragOverHandler(evt){
        this.node.classList.add('drag-over')
        evt.stopPropagation()
        evt.preventDefault()
    }

    dragLeaveHandler(){
        this.node.classList.remove('drag-over')
    }
    
    dragStartHandler(evt){
        //设置要传递的数据
        evt.dataTransfer.setData("node-id",this.data.id)
        evt.stopPropagation()
    }
    
    //局部样式，drag-over是拖拽在node之上的一个激活样式
    style(){
        return `
            .drag-over{
                border:1px dashed black;
            }
        `
    }

    render(){
        return `
                <li data-node-id="{{id}}"  draggable="true"  ondragstart="dragStartHandler" ondragleave="dragLeaveHandler"  ondrop="dropHandler" ondragover="dragOverHandler" >
                    <div data-node-id="{{id}}">{{name}}</div>
                    <ul data-node-id="{{id}}" o-if="children.length > 0">
                        <tree-node o-repeat="child in children" group-data="data.children"></tree-node>
                    </ul>
                </li>
            `
    }
}

//生成标签用于声明式嵌入其他组件
Omi.tag('tree-node',TreeNode)
```

* dragStart的时候通过evt.dataTransfer.setData设置需要传递的数据，这里存放了拖拽的节点id
* drop的时候通过evt.dataTransfer.getData读取传递过来的数据，这里取drag的node的节点id
* 通过 o-if="children.length > 0" 决定是否生成 ul 标签
* getRootInstance组件是递归去调取tree的对象的实例（因为tree-node可能包含tree-node,所以需要递归读parent）
* 拿到tree的实例之后，调用tree的对象的实例的moveNode方法去移动节点，moveNode的本质就是修改节点数据，然后update组件

到此位置，复杂的拖拽移动都完成了。增删改查就更加简单了，大家可以接着试试~~~

## Omi相关

* Omi官网[omijs.org](http://www.omijs.org)
* Omi的Github地址[https://github.com/AlloyTeam/omi](https://github.com/AlloyTeam/omi)
* 如果想体验一下Omi框架，可以访问 [Omi Playground](http://alloyteam.github.io/omi/example/playground/)
* 如果想使用Omi框架或者开发完善Omi框架，可以访问 [Omi使用文档](https://github.com/AlloyTeam/omi/tree/master/docs#omi使用文档)
* 如果你想获得更佳的阅读体验，可以访问 [Docs Website](http://alloyteam.github.io/omi/website/docs.html)
* 如果你懒得搭建项目脚手架，可以试试 [omi-cli](https://github.com/AlloyTeam/omi/tree/master/cli)
* 如果你有Omi相关的问题可以 [New issue](https://github.com/AlloyTeam/omi/issues/new)
* 如果想更加方便的交流关于Omi的一切可以加入QQ的Omi交流群(256426170)
