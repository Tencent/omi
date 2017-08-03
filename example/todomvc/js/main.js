import Omi from '../../src/index.js'
import Todo from './todo.js'
import TodoStore from './todo-store.js'

Omi.render(new Todo(),'#todoapp',{
    store: new TodoStore(),
    autoStoreToData: true
})