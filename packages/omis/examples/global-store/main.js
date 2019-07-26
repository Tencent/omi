import { render, h } from '../../src/omis'

const Counter = function (props, store) {


  return (
    <div>
      <button onClick={store.sub}>-</button>
      <span>{this.using[0]}</span>
      <button onClick={store.add}>+</button>
      <div>
        <span>{this.using[1]}</span>
        <button onClick={store.rename}>rename</button>
      </div>
      <div>{this.using.reverseMotto}</div><button onClick={store.changeMotto}>change motto</button>
      <div>{this.using.name}</div>
      <div>{this.using[3]}</div>
      <div>
        {this.using.fullName}
        <button onClick={store.changeFirstName}>change first name</button>
      </div>
    </div>
  )

}



Counter.store = _ => {
  return {
    add(e) {
      _.$.data.count++

    },
    sub() {
      _.$.data.count--
    },
    rename() {
      _.$.data.arr[0] = 'aa'
    },
    changeMotto() {
      _.$.data.motto = 'ok'
    },
    changeFirstName() {
      _.$.data.userInfo.firstName = 'DNT'
    }
  }
}


const CounterB = function (props, store) {

  return (
    <div>
      <span>{this.$.data.count}</span>
      <ul>
        {this.$.data.arr.map(item => <li>{item}</li>)}
      </ul>
      <button onClick={store.push}>array push</button>
    </div>
  )
}

CounterB.store = _ => ({
  push() {
    _.$.data.arr.push(Math.random())
  }
})


const App = function (props, store) {
  return (
    <div>
      <div>Count from child event: {this.using.motto}</div>
      <Counter onChange={store.changeHandle}></Counter>
      <br></br>
      <br></br>
      <CounterB onChange={store.changeHandle}></CounterB>
    </div>
  )
}

Counter.use = [
  'count', //Direct string, accessible through this.using[0] 
  'arr[0]', //It also supports path, which is accessible through this.using[1]
  //Support JSON
  {
    //Alias, accessible through this.using.reverseMotto
    reverseMotto: [
      'motto', //path
      target => target.split('').reverse().join('')  //computed
    ]
  },
  { name: 'arr[1]' }, //{ alias: path }，accessible through this.using.name
  {
    //alias，accessible through this.using.fullName
    fullName: [
      ['userInfo.firstName', 'userInfo.lastName'], //path array
      (firstName, lastName) => firstName + lastName //computed
    ]
  }
]


CounterB.use = ['count', { list: 'arr' }]
App.use = [{ motto: 'motto' }]


App.store = _ => ({
  count: null,
  changeHandle(count) {
    _.store.count = count
    _.update()
  }
})

render(<App />, 'body', {
  data: {
    count: 0,
    arr: ['china', 'tencent'],
    motto: 'I love omis.',
    userInfo: {
      firstName: 'dnt',
      lastName: 'zhang',
      age: 18
    }
  }
})