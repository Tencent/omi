import { define, WeElement } from '../../../src/omi'
import vm from '../view-model/todo'

define('todo-list', class extends WeElement {
  css() {
    return `
    span{
       color: #888;
       font-size: 11px;
     }

    .completed{
      color: #d9d9d9;
      text-decoration: line-through;
    }
   `
  }

  onChange = (evt, id) => {
    if (evt.target.checked) {
      vm.complete(id)
    } else {
      vm.uncomplete(id)
    }
  }

  render(props) {
    console.log(props.items)
    return (
      <ul>
        {props.items.map(item => (
          <li class={item.completed && 'completed'}>
            <input
              type="checkbox"
              onChange={evt => {
                this.onChange(evt, item.id)
              }}
            />
            {item.text}{' '}
            <span>by {item.author.firstName + item.author.lastName}</span>
          </li>
        ))}
      </ul>
    )
  }
})
