//mock
const list = [
  {
    text: 'Task One'
  },
  {
    text: 'Task Two'
  }
]

export function getAll(callback) {
  callback(JSON.parse(JSON.stringify(list)))
}

export function add(item) {
  list.push({
    text: item.text
  })
}
