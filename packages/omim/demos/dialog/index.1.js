import dialog from '../../src/dialog/index.tsx'

// dialog.confirm({
//   confirmText: '确认',
//   cancelText: '取消',
//   msg: '确认删除吗？',
//   confirm: function () {
//     console.log('aaa')
//   }
// })

// dialog.alert({
//   confirmText: '确认',
//   msg: '确认删除吗？',
//   confirm: function () {
//     console.log('aaa')
//   }
// })


dialog.prompt({
  confirmText: '确认',
  cancelText: '取消',
  title:'用户信息输入',
  subtitle:'输入你的用户名',
  confirm: function (val) {
    console.log(val)
  }
})
