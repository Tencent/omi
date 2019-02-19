export default {
  data: {
    logs: [],
    motto: 'Hello World',
		reverseMotto() {
      return this.motto.split('').reverse().join('')
    }
  }
}