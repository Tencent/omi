import create from '../../utils/create'


create({
  use: ['logs', 'motto'],
  computed: {
    logsLength() {
      return this.logs.length
    }
  }
})
