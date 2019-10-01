import React from 'react';
import ReactDOM from 'react-dom';

import omis from './omis/index'

class Store {
  data = {
    count: 1
  }
  sub = () => {
    this.data.count--
  }
  add = () => {
    this.data.count++
  }
}

const Counter = omis({
  render() {
    return <>
      <button onClick={omis.store.sub}>-</button>
      <span>{omis.store.data.count}</span>
      <button onClick={omis.store.add}>+</button>
    </>
  },
  use: ['count']
})

const App = omis({
  render() {
    return <div>
      <div>{omis.store.data.count}</div>
      <Counter></Counter>
    </div>
  },
  store: new Store()
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
