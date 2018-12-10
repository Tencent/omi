import vm from '../../view-model/todo'
import create from '../../utils/create'

create.Page(vm, {
  onLoad: function() {
    vm.getAll()
  },
  inputHandler: function(e) {
    this.text = e.detail.value
  },
  tapHandler: function() {
    vm.add(this.text)
    this.setData({
      text: ''
    })
  }
})
