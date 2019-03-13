## InputTable  

Editable table.

## 使用

```js
define('my-app', class extends WeElement {
  dataSource = [{
    id: 1,
    name: 'xwang',
    age: 18,
    address: 'Tencent'
  }, {
    id: 2,
    name: 'dntzhang',
    age: 12,
    address: 'Tencent'
  }, {
    id: 3,
    name: 'lucy',
    age: 12,
    address: 'Tencent'
  }, {
    id: 4,
    name: 'john',
    age: 12,
    address: 'Tencent'
  }, {
    id: 5,
    name: 'tim',
    age: 12,
    address: 'Tencent'
  }]

  columns = [{
    title: 'Name',
    key: 'name',
  }, {
    title: 'Age',
    key: 'age',
  }, {
    title: 'Address',
    key: 'address',
  }]


  render() {
    return (
      <o-input-table
        dataSource={this.dataSource}
        columns={this.columns}>
      </o-input-table>
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