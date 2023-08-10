# CONTRIBUTING

`tdesign-omi` 包含 `web-omi` 代码和一个子仓库，子仓库指向 `tdesign-common`仓库

## 开发

### 安装依赖

```bash
npm i
```

### 本地开发

```bash
npm run start
```

浏览器访问 <http://127.0.0.1:17000>

### 目录结构

```text
├── examples // 组件文档与 demos
├── script // 构建代码
├── site // 站点代码
├── src // 组件代码
├── test // 测试文件
```

### 组件页路由配置

每一个组件页，都是一个 md 文件，参考 `/site/config/index.js` 已有定义，直接按照模板添加即可

```js
{
  title: '基础组件',
  type: 'component', // 组件文档
  children: [
    {
      title: 'Button 按钮',
      name: 'button',
      component: () => import(`@/examples/components/button/button.md`),
    },
    {
      title: 'Icon 图标',
      name: 'icon',
      component: () => import(`@/examples/components/icon/icon.md`),
    },
    ...
  ],
},
```

### md 文件 demo 引用

文档 demo 排列与 common 仓库中的 UI demo 展示一致

```markdown
{{ base }}
[demo 描述（可不填）]
```

### demo 调试

当一个 md 文件插入了很多个 demo 之后，一些组件生命周期方法调试起来会变得困难，若想对某个 demo 单独调试，可以访问路由：/demos/组件名/demo 名，

例如：<http://127.0.0.1:17000/omi/demos/button/base>

### 单元测试 & e2e 测试文档

[组件测试文档](./test/README.md)

## git

### 分支

主仓库遵循使用 `git flow` 规范，新组件分支从 `develop checkout`：[https://nvie.com/posts/a-successful-git-branching-model/](https://nvie.com/posts/a-successful-git-branching-model/)

如果是贡献组件，则从 `develop checkout` 分支如：`feature/button`，记得如果同时要在子仓库开发 UI，子仓库也要 `checkout` 同名分支

> 关于 fork

以下内容处理 `fork` 仓库后，远端仓库的更新如何同步到 `fork` 仓库

```bash
# 建立 upstream remote
git remote add upstream git@github.com:Tencent/omi.git

# 更新 upstream
git fetch upstream develop

# 合并 upstream develop 到本地
git checkout develop

git merge upstream/develop
```

## 提交说明

项目使用基于 angular 提交规范：[https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-conventional](https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-conventional)

每次提交会自动触发提交验证

- 使用工具 commitizen 协助规范 git commit 信息
- fix & feat 的提交会被用来生成 changelog
- 提交会触发 git pre-commit 检查，修复提示的 eslint 错误，

## 公共子仓库 tdesign-common

本项目以子仓库的形式引入 `tdesign-common` 公共仓库，对应 `src/\_common` 文件夹
公共仓库中包含

- 一些公共的工具函数
- 组件库 `UI` 开发内容，既 `html` 结构和 `css` 样式（React/Vue 共用）

### 初始化子仓库

- 初次克隆代码后需要初始化子仓库： `git submodule init && git submodule update`
- git submodule update 之后子仓库不指向任何分支，只是一个指向某一个提交的游离状态

### 子仓库开发

子仓库组件分支从 `develop checkout` 示例：`feature/button`，提交代码时先进入子仓库完成提交，然在回到主仓库完成提交

- 先进入 `src/\_common` 文件夹，正常将样式修改添加提交
- 回到主仓库，此时应该会看到 `src/\_common` 文件夹是修改状态，按照正常步骤添加提交即可

## 关于组件库 UI

UI 开发（html & css）是多个框架共用的，比如 React-web/Vue-web/omi web。各个框架组件实现应该要复用 UI 开发的 html 结构，引用其组件 css 与 demo css（本仓库已在入口处引用了），UI 开发一般可由单独的 UI 开发同学认领完成或各框架组件开发同学的其中一名同学完成

- 如果开发前已有某个组件的 UI 开发内容，直接在主仓库使用即可
- 如果没有，且你也负责 UI 开发：参考 UI 开发规范完成 UI 开发内容、然后再开发主仓库组件
- 如果没有，且 UI 开发工作已有其他同学负责或认领：可以先在主仓库开发组件功能，待 UI 开发输出之后对齐即可

如果 UI 内容和样式（其他同学负责开发）还未完成，而你开发组件功能时需要写一些样式，可以直接在组件文件夹先写一个临时的 less 文件，在 js 中引入即可，如：

```bash
├── button.less
├── button.tsx
```

```js
// button.tsx

// 先引入临时的样式文件用于开发功能，待 UI 开发完成之后需要与 UI 样式对齐并删除 less 文件
import './button.less';
```

## 开发规范

UI 开发规范参考子仓库 README [子仓库 README](https://github.com/Tencent/tdesign-common/blob/main/style/web/README.md)

### 新建组件

```shell
npm run generate:component
```

### API 规范

API 会由管理员统一生成

### 前缀

组件和 `css` 前缀以 `t-` 开头，无论 `js` 还是 `css` 都使用变量定义前缀，方便后续替换

### css

组件样式在 `common` 子仓库开发，遵循 [tdesign-common 仓库 UI 开发规范](https://github.com/Tencent/tdesign-common/blob/main/style/web/README.md)
