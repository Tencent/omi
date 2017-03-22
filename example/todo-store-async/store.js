import TodoStore from './todo-store.js';


//let todoStore = new TodoStore({
//    items: ["omi","store"]
//},true)



let todoStore = new TodoStore()
setTimeout(()=>{
    todoStore.data.items = ["omi","store"];
    todoStore.data.length = todoStore.data.items.length
    todoStore.beReady();
},2000)



export default todoStore;