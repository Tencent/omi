## Table  

Data is presented and processed in the form of tables.

## Usage

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