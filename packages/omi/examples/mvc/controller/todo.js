import todo from '../model/todo'
import tvd from '../view-data/todo'
import ovd from '../view-data/other'

export function add(text) {
  todo.add(text)
  tvd.update(todo)
  ovd.update()
}

export function getAll() {
  todo.getAll(function() {
    tvd.update(todo)
    ovd.update()
  })
}
