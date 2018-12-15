import vm from '../../view-model/other'
import create from '../../utils/create'

create.Component(vm, {

  ready: function() {

  },

  methods: {
    onTap: function(e) {
      vm.update()
    }
  }
})
