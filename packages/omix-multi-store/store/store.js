import { data as dataA, changeName } from 'store-a.js'
import { data as dataB, changeAge } from 'store-b.js'

const store = {
  data:{
    a: dataA,
    b: dataB
  },
  a: { changeName },
  b: { changeAge }
}

export default store
