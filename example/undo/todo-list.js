class TodoList extends Omi.Component {
    removeItem(id){
        this.$store.remove(id)
    }

    render() {
        return (
            <ul>
                {this.$store.items.map(item => (
                    <li data-id={item.id}>{item.text} <button onClick={(id)=>{this.removeItem(item.id)}}>Delete</button></li>
                ))}
            </ul>
        )
    }
}

export default TodoList