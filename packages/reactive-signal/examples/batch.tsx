import { batch, effect, signal } from '@/index'


const count = signal(3)

const dispose = effect(() => {
  console.error(count.value)
})

// dispose()

batch(() => {
  count.value = 1
  count.value = 2
  count.value = 3
})

count.value = 4



