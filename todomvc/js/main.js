import Omi from '../../src/index.js'
import Todo from './todo.js'
import TodoStore from './todo-store.js'


let store = new TodoStore()

Omi.useStore(store,true)

Omi.render(new Todo(),'#todoapp')