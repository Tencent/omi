## Table  

表格的形式展现和处理数据。

## 使用

```js
define('my-app', class extends WeElement {
  dataSource = [{
    id: 1,
    name: 'xwang',
    age: 18,
    address: '腾讯大厦'
  }, {
    id: 2,
    name: 'dntzhang',
    age: 12,
    address: '滨海大厦'
  }, {
    id: 3,
    name: 'dntzhang2',
    age: 12,
    address: '滨海大厦'
  }, {
    id: 4,
    name: 'dntzhang3',
    age: 12,
    address: '滨海大厦'
  }, {
    id: 5,
    name: 'dntzhang4',
    age: 12,
    address: '滨海大厦'
  }]

  columns = [{
    title: '姓名',
    key: 'name',
  }, {
    title: '年龄',
    key: 'age',
  }, {
    title: '住址',
    key: 'address',
  }, {
    title: '操作',
    render: (item) => (
      <span>
        <a href="javascript:;" onClick={e => { this.removeItem(item) }}>Delete</a>
      </span>
    )
  }]

  removeItem = (item) => {
    this.table.removeItem(item)
  }

  render() {
    return (
      <o-table 
        ref={e => { this.table = e }} 
        dataSource={this.dataSource} 
        columns={this.columns}>
      </o-table>
    )
  }
})
```

## API

### Props

|  **Name**  | **Type**        | **Defaults**  | **Details**  |
| ------------- |:-------------:|:-----:|:-------------:|
| dataSource  | json array |   --    |           |
| columns  | json array |   --    |           |