import Snake from '../models/snake'

const arr = []

const snake = new Snake

for (let i = 0; i < 16; i++) {
  const row = []
  for (let j = 0; j < 16; j++) {
    row.push(0)
  }
  arr.push(row)
}

function tick() {
  for (let i = 0; i < 16; i++) {

    for (let j = 0; j < 16; j++) {
      arr[i][j] = 0
    }
  }

  for (let k = 0, len = snake.body.length; k < len; k += 2) {
    arr[snake.body[k + 1]][snake.body[k]] = 1
  }
}


setInterval(() => {
  snake.move()
  tick()
}, 1000)

export default {
  data: {
    arr
  },
  sub() {
    this.data.count--
  },
  add() {
    this.data.count++
  }
}