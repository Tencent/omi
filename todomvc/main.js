import Omi from '../../src/index.js'
import Todo from './js/todo.js'
import TodoStore from './js/todo-store.js'


let store = new TodoStore()

Omi.useStore(store,true)

Omi.render(new Todo(),'#todoapp')