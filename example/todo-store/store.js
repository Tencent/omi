import TodoStore from './todo-store.js';


let todoStore = new TodoStore()

//setTimeout(function(){

    let result = {
        items: ["aa","bb"]
    };

    todoStore.data.items = result.items;
    todoStore.data.length = todoStore.data.items.length
    //todoStore.beReady();
//},3000)



export default todoStore;