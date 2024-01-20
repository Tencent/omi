import { signal, computed } from '@/index'

// Define signal B1 with an initial value of 3
const B1 = signal(3)
// Define signal C1 with an initial value of 6
const C1 = signal(6)
// Define signal A1 with a computed value of B1 + C1
const A1 = computed(() => B1.value + C1.value)

// Signal chain reaction: Define signal A2 with a computed value of A1 + C1
const A2 = computed(() => A1.value + C1.value)

// When the value of signal B1 changes, the value of signal A1 is automatically recomputed
B1.value = 4
// Log the value of signal A1 as 10
console.log(A1.value)
// Log the value of signal A2 as 16
console.log(A2.value)

