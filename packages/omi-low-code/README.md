# Omi Low Code



## Setup

Install dependencies:

```bash
npm i
```
or

```bash
npm install -g yarn
yarn
```


## Development


```bash
npm start
```




## Build


```bash
npm run build
```

（demo）新增一个物料组件基类BaseMaterials、以及延伸的布局组件（layout文件夹内）和按钮组件（instance文件夹内）。增加对应的测试页面test。可以基于此进行物料组件schema优化和扩展。

TODO：首页需要区分侧边栏和渲染区域。

├─components
│  │  ....
│  │
│  ├─materials
│  │  │  base-material.tsx
│  │  │
│  │  ├─instance
│  │  │      button.tsx
│  │  │
│  │  └─layout
│  │          single-layout.tsx
├─pages
│  │  home.tsx
│  │  test.tsx
...
