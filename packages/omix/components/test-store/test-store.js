import create from '../../utils/create'


create({
  use: ['logs'],
  computed: {
    logsLength() {
      return this.logs.length
    }
  }
})
