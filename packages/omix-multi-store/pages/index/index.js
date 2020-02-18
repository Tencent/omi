import create from '../../utils/create'
import store from '../../store/store'

create(store, {
  use: ['a.name', 'b'],
  computed: {
    reverseName() {
      return this.a.name.split('').reverse().join('')
    }
  },
  data: {
    value: "内部数据"
  },
  onLoad: function () {
    setTimeout(_ => {
      store.a.changeName()
    }, 1000)

    setTimeout(_ => {
      store.b.changeAge()
    }, 2000)
  }
})
