let id = 0

export default class TodoItem {
  constructor(text, completed) {
    this.id = id++
    this.text = text
    this.completed = completed || false
  }

  clone() {
    return new TodoItem(this.text, this.completed)
  }
}
