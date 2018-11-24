## 基于 Omi 的 MVC + ViewData 架构设计，分离 Web 视图与业务逻辑

从宏观的角度来看，MVC + ViewData 架构也属性网状架构，网状架构目前来看有:

* Mobx + React
* Hooks + React
* MVC + ViewData + Omi 

大势所趋！简直是前端工程化最佳实践！也可以理解成网状结构是描述和抽象世界的最佳途径。那么网在哪？

* ViewData 与 ViewData 之间相互依赖甚至循环依赖的网状结构
* ViewData 一对一、多对一、一对多、多对多依赖 Models 形成网状结构
* Model 与 Model 之间形成相互依赖甚至循环依赖的网状结构
* View 一对一依赖 ViewData 形成网状结构
* View 多对多依赖 Controller 形成网状结构
* Controller 多对多依赖 Model 和 ViewData 形成网状结构

总结如下：

|| Model| ViewData|View| Controller|
|---|----|----|
|Model|多对多|多对多|无关联|多对多|
|ViewData|多对多|多对多|一对一|多对多|
|View|无关联|一多一|多对多|多对多|

图形描述如下：

