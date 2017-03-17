import TodoData from './todo-data.js';


let todoData = new TodoData()

setTimeout(function(){

    let result = {
        items: ["aa","bb"]
    };

    todoData.data.items = result.items;
    todoData.data.length = todoData.data.items.length
    todoData.beReady();
},3000)



export default todoData;