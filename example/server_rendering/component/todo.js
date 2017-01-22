if ( typeof module === "object" && typeof module.exports === "object" ) {
    var makeList  =require('./list');
}

function makeTodo(Omi){
    makeList(Omi);
    var Todo =  Omi.create("Todo",{
        add :function(evt) {
            evt.preventDefault();
            this.textBox = this.node.querySelector("input");
            this.list.data.items.push(this.textBox.value);
            this.update();
            this.textBox.value = "";
        },
        install:function(){
            this.childrenData[0] = this.data;
        },
        style:function () {
            return `
            h3 { color:red; }
            button{ color:green;}
            `;
        },
        render:function(){
            return `
<div>
    <h3>TODO</h3>
    <List  name="list"  />
    <form onsubmit="add(event)" >
        <input type="text"  />
        <button>Add #{{items.length}}</button>
    </form>
</div>
            `;
        }
    })

    return Todo;
}

if ( typeof module === "object" && typeof module.exports === "object" ) {
    module.exports =  makeTodo ;
} else {
    this.makeTodo = makeTodo;
}