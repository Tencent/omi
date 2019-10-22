import create from '../../utils/create'
import store from '../../store/store'

create(store, {
  use: ['a.name', 'b'],
  onLoad: function () {
    setTimeout(_ => {
      store.a.changeName()
    }, 1000)

    setTimeout(_ => {
      store.b.changeAge()
    }, 2000)
  }
})
