import { MockMethod } from 'vite-plugin-mock'

export default [{
  url: '/api/getTable',
  method: 'get',
  response: ({ query }) => {
    return {
      data: [
        {
          id: 1,
          name: 'xwang',
          age: 18,
          address: 'Tencent'
        },
        {
          id: 2,
          name: 'dntzhang',
          age: 12,
          address: 'Tencent',
          $config: {
            bgColor: 'rgb(247 176 176 / 32%)'
          }
        },
        {
          id: 3,
          name: 'lucy',
          age: 12,
          address: 'Tencent'
        },
        {
          id: 4,
          name: 'john',
          age: 12,
          address: 'Tencent',
          $config: {
            bgColor: 'rgb(230 162 60 / 34%)'
          }
        },
        {
          id: 5,
          name: 'tim',
          age: 12,
          address: 'Tencent'
        },
        {
          id: 6,
          name: 'tim',
          age: 12,
          address: 'Tencent'
        },
        {
          id: 7,
          name: 'tim',
          age: 12,
          address: 'Tencent'
        },
        {
          id: 8,
          name: 'tim',
          age: 12,
          address: 'Tencent'
        }
      ]
    }
  },
},
] as MockMethod[]
