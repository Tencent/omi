import { bind } from 'omi'

class Snake {
  body: number[]
  dir: 'up' | 'right' | 'down' | 'left'

  constructor() {
    this.body = [3, 1, 2, 1, 1, 1]
    this.dir = 'right'
  }

  move(eating) {
    const b = this.body
    if (!eating) {
      b.pop()
      b.pop()
    }

    switch (this.dir) {
      case 'up':
        b.unshift(b[0], b[1] - 1)
        break
      case 'right':
        b.unshift(b[0] + 1, b[1])
        break
      case 'down':
        b.unshift(b[0], b[1] + 1)
        break
      case 'left':
        b.unshift(b[0] - 1, b[1])
        break
    }
  }

  @bind
  turnUp() {
    if (this.dir !== 'down')
      this.dir = 'up'
  }

  @bind
  turnRight() {
    if (this.dir !== 'left')
      this.dir = 'right'
  }

  @bind
  turnDown() {
    if (this.dir !== 'up')
      this.dir = 'down'
  }

  @bind
  turnLeft() {
    if (this.dir !== 'right')
      this.dir = 'left'
  }
}

export default Snake