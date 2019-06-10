import router from './omiu/router'
import Table from './omiu/table'
import Home from './view/home'

router.get('/', () => {

  return Home
})

router.get('/', () => {
  const table = new Table({
    dataSource: [{
      id: 1,
      name: 'xwang',
      age: 18,
      address: 'Tencent'
    }, {
      id: 2,
      name: 'dntzhang',
      age: 12,
      address: 'Tencent',
      checked: true
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
    }

    ],
    columns =[{
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
  })

  return table

})


// const express = require('express')
// const app = express()

// app.get('/', function (req, res) {
//   res.send('Hello World')
// })

// app.listen(3000)
