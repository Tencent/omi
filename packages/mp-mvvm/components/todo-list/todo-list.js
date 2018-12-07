import vm from '../../view-model/todo'

Component({
  properties: {
    items: {
      type: Array,
      value: []
    }
  },

  ready: function() {},

  methods: {
    checkboxChange: function(e) {
      vm.toogleComplete(e.currentTarget.dataset.id)
    },
    remove:function(e){
      vm.remove(e.currentTarget.dataset.id)
    }
  }
})
