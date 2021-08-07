# 计算几何支持

## 简介

当前 Kity 缺少计算几何的支持，很多高级功能需要改支持。

## 支持接口列表

CG.isPointInsideBox()
CG.isBoxIntersect()
CG.isPointInPath()
CG.getBezierBox()
CG.getPathBox()
CG.getSubPath()
CG.getPathPosition()
CG.getPathIntersection()
CG.getPathLength()
CG.transformPath()

## CG.isPointInsideBox( point, box )

判断一个点是否在指定的矩形区域内。

```js
var box = { x: 0, y: 0, width: 20, height: 20 };
var p1 = { x: 10, y: 10 };
var p2 = { x: 100, y: 100 };

CG.isPointInsideBox( p1, box ); // true
CG.isPointInsideBox( p2, box ); // false
```

## CG.isBoxIntersect()