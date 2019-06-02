## Table

Table for displaying two-dimensional data.

## Usage

```html
<m-table id="myTable"></m-table>

<script>
  const table = document.querySelector('#myTable')
  table.checkbox = true
  table.dataSource = [{
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

  table.columns = [{
    title: 'Name',
    key: 'name',
  }, {
    title: 'Age',
    key: 'age',
  }, {
    title: 'Address',
    key: 'address',
  }, {
    title: 'Actions',
    render: (item) => (
      Omi.html`<span>
        <a href="javascript:;" onClick=${e => {
          table.props.dataSource.splice(table.props.dataSource.indexOf(item), 1)
          table.update()
        }}>Delete</a>
      </span>`
    )
  }]

  table.update()
</script>
```

## Usage in Omi

```jsx
<m-table
  checkbox
  dataSource={this.dataSource}
  columns={this.columns}>
</m-table>
```

## API

### Props

```jsx
{
	dataSource: any[],
	columns: any[],
	checkbox?: boolean
}
```
