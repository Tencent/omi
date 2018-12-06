
import vm from '../../view-model/todo'
import create from '../../utils/create'

create.Page(vm, {
  data:{
    value:''
  },
  onLoad: function () {
    vm.getAll()
  },
  tapHandler:function(){
    vm.add('abc')
    this.setData({
      value:''
    })
  }
})

