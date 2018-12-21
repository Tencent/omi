import { render, WeElement, h, define } from 'omi'
import './todo-item'
import './todo-input'

class MyTodo extends WeElement {
  css() {
    return `
      h1 {
        font-size: 100px;
        font-weight: 100;
        text-align: center;
        color: rgba(175, 47, 47, 0.15);
      }

      section {
        background: #fff;
        margin: 130px 0 40px 0;
        position: relative;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
      }

      #list-container {
        margin: 0;
        padding: 0;
        list-style: none;
        border-top: 1px solid #e6e6e6;
      }
    `
  }

  static get data() {
    return { list: null }
  }

  addItem = (e) => {
    // ... odesn't work with jstransform...  
    let a = this.store.data.list;
    let b = [{
      id: this.store.data.list.length,
      text: e.detail.data,
      checked: false
    }];
    this.store.data.list = a.concat(b);
  }

  removeItem = (e) => {
    const itemIndex = this.store.data.list.findIndex(el => el.id === e.detail.data);
    let a = this.store.data.list.slice(0, itemIndex);
    let b = this.store.data.list.slice(itemIndex + 1);
    this.store.data.list = a.concat(b);
  }

  toggleItem = (e) => {
    const item = this.store.data.list.find(el => el.id === e.detail.data);
    this.store.data.list[e.detail.data] = Object.assign({}, item, {
        checked: !item.checked
    });
  }

  render() {
    return (
      <div>
        <h1>Todos Omi</h1>
        <section>
          <todo-input onSubmit={this.addItem}></todo-input>
          <ul id="list-container">
          {
            this.store.data.list.map(todo => (
              <todo-item text={todo.text} checked={todo.checked} index={todo.id}
                  onRemoved={this.removeItem}
                  onChecked={this.toggleItem}></todo-item>
            ))
          }  
          </ul>
        </section>
      </div>
    )
  }
}

define('my-todo', MyTodo)

const store = {
  data: {
    list: [{
        id: 0,
        text: 'my initial todo',
        checked: false
    }, {
        id: 1,
        text: 'Learn about Web Components',
        checked: true
    }]
  }
}
render(
  <div>
    <a href="https://vogloblinsky.github.io/web-components-benchmark/" id="back">⬅ Back to other implementations</a>
    <my-todo></my-todo>
  </div>
, 'body', store)