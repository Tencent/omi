import { render, WeElement, define } from '../../src/omi'

define('my-counter', class extends WeElement {
  static use = [
    'count',
    'arr[0]',
    {
      reverseMotto: [
        'motto',
        target => target.split('').reverse().join('')
      ]
    },
    { name: 'arr[1]' },
    {
      fullName: [
        ['userInfo.firstName', 'userInfo.lastName'],
        (firstName, lastName) => firstName + lastName
      ]
    },
  ]

  sub = () => this.store.sub()
  add = () => this.store.add()
  rename = () => this.store.rename('dnt')
  changeMotto = () => this.store.changeMotto('Hello omi!')
  changeFirstName = () => this.store.changeFirstName('Dnt')

  render() {
    return (
      <div>
        <button onClick={this.sub}>-</button>
        <span>{this.use[0]}</span>
        <button onClick={this.add}>+</button>
        <div>
          <span>{this.use[1]}</span>
          <button onClick={this.rename}>rename</button>
        </div>
        <div>{this.use.reverseMotto}</div><button onClick={this.changeMotto}>change motto</button>
        <div>{this.use.name}</div>
        <div>{this.use[3]}</div>
        <div>
          {this.use.fullName}
          <button onClick={this.changeFirstName}>change first name</button>
        </div>
      </div>
    )
  }
})

render(<my-counter />, 'body', {
  data: {
    count: 0,
    arr: ['china', 'tencent'],
    motto: 'I love omi.',
    userInfo: {
      firstName: 'dnt',
      lastName: 'zhang',
      age: 18
    }
  },
  sub() {
    this.data.count--
  },
  add() {
    this.data.count++
  },
  rename(newName) {
    console.log(1)
    this.data.arr[0] = newName
  },
  changeMotto(motto) {
    this.data.motto = motto
  },
  changeFirstName(firstName) {
    this.data.userInfo.firstName = firstName
  }
})