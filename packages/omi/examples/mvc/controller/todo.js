import todo from '../model/todo'
import tvd from '../view-data/todo'
import ovd from '../view-data/other'
import shared from '../view-data/shared'

export function add(text) {
  todo.add(text)
  tvd.update(todo)
  ovd.update()
  tvd.update()
}

export function getAll() {
  todo.getAll(function() {
    tvd.update(todo)
    ovd.update()
    tvd.update()
  })
}

export function changeSharedData() {
  shared.projName = 'I love omi-mvc.'
  ovd.update()
  tvd.update()
}
