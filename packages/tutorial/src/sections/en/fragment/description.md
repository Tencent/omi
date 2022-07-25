# Fragment

When rendering HTML structures with jsx/tsx, many scene root nodes are not necessary. Moreover, the shadowRoot interface of web components itself is the root node of a DOM subtree, which is rendered separately from the main DOM tree of the document. Omi framework can render multiple nodes without root nodes through fragment.

```tsx
<>
  <h1>Test</h1>
  <p>Test</p>
</>
```

The same effect can be achieved through 'h.f':

```tsx
<h.f>
  <h1>Test</h1>
  <p>Test</p>
</h.f>
```

Congratulations on learning to use fragment!