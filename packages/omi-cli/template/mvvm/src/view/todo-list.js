import { define } from 'omi'

define('todo-list', function(props) {
  this.useCss(`
	 span{
			color: #888;
			font-size: 11px;
		}
	`)

  return (
    <ul>
      {props.items.map(item => (
        <li key={item.id}>
          {item.text} <span>by {item.fullName}</span>
        </li>
      ))}
    </ul>
  )
})
