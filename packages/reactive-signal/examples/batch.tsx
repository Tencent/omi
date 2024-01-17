import { effect, signal } from '@/index'


const count = signal(3)

const dispose = effect(() => {
  console.log(count.value)
})

dispose()

count.value = 4



