
import TodoApp from './todo-app.js'
import TodoStore from './todo-store.js'


let app = new TodoApp()
let store = new TodoStore({
    items: [
        {id: 1, text: 'Omi'},
        {id: 2, text: 'React'},
        {id: 3, text: 'preact'}
    ],
    text: ''
},{
    add: (text)=>{ 
        app.update()
    }
})


Omi.render(app, 'body', store)
