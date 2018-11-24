import todo from '../model/todo'
import viewData from '../view-data/todo'

export function add(text) {
  todo.add(text)
  viewData.sync(todo)
}

export function getAll() {
  todo.fetch(function() {
    viewData.sync(todo)
  })
}
