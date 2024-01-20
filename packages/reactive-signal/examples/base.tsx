import { signal, computed, effect, } from '@/index'

// Create a signal
const count = signal(0)
// Create a computed signal
const doubleCount = computed(() => count.value * 2)

// Create an effect
effect(() => {
  console.log(` ${count.value} Double Count: ${doubleCount.value}`)
})

// Update the count signal
count.value = 1

