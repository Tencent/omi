# Fragment

在使用 JSX/TSX 渲染 HTML 结构的时候，很多场景根节点不是必须的，况且 Web Components 的 ShadowRoot 接口本身就是一个 DOM 子树的根节点， 它与文档的主 DOM 树分开渲染。OMI 框架可以通过 Fragment 能力渲染无根节点的多个节点。

```tsx
<>
  <h1>Test</h1>
  <p>Test</p>
</>
```

通过`h.f`也可以达到同样的效果:

```tsx
<h.f>
  <h1>Test</h1>
  <p>Test</p>
</h.f>
```


恭喜你学会了使用 Fragment！