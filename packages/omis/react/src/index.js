import React from 'react';
import ReactDOM from 'react-dom';

import omis from './omis'

class Store {
  data = {
    count: 1,
    msg: 'omis',
    num: Math.random()
  }
  sub = () => {
    this.data.count--
  }
  add = () => {
    this.data.count++
  }
  random = () => {
    this.data.num = Math.random()
  } 
}

const Counter = omis({
  render() {
    const $ = omis.store
    return <>
      <button onClick={$.sub}>-</button>
      <span>{$.data.count}</span>
      <button onClick={$.add}>+</button>
      <div>{Math.random()}</div>
    </>
  },
  use: ['count']
})

const App = omis({
  render() {
    const $ = omis.store
    return <div>
      <div>{$.data.msg}</div>
      <button onClick={$.random}>Click me to updateSelf-{$.data.num}</button>
      <div>{$.data.count}</div>
      <Counter></Counter>
    </div>
  },
  store: new Store(),
  useSelf: ['num']
})


ReactDOM.render(<App />, document.getElementById('root'));



// export class Grandmother extends React.Component {
//   info = {
//     lastName: "Sanchez"
//   };

//   render() {
//     return (
//       <Context.Provider value={this.info}>
//         <Mother />
//       </Context.Provider>
//     );
//   }
// }


// const Child = () => {
//   return <Context.Consumer>{context => <p>{context.lastName}</p>}</Context.Consumer>;
// };
