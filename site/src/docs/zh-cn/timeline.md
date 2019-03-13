## Timeline 

时间线.

## 使用

```js
<o-timeline data={[
  { msgA: '2018.11.11', msgB: '15:22:09', msgC: 'create project', msgD: '[sub msg]' },
  { msgA: '2018.11.11', msgB: '15:22:09', msgC: 'delete readme', msgD: '[sub msg]' },
  { msgA: '2018.11.11', msgB: '15:22:09', msgC: 'update readme', msgD: '[sub msg]' },
  { msgA: '2018.11.11', msgB: '15:22:09', msgC: 'others', msgD: '[sub others]' }
]} />
```

## API

### Props

|  **Name**  | **Type**        | **Defaults**  | **Details**  |
| ------------- |:-------------:|:-----:|:-------------|
| data         | json array|    --       |  数组项的结构: <br> { <br>　msgA: '2018.11.11',<br>　msgB: '15:22:09', <br>　msgC: 'create project',<br>　msgD: '[sub msg]' <br>}     |　