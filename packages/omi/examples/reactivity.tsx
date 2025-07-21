import { signal, computed } from 'omi'

// 定义信号 B1， 信号值 3
const B1 = signal(3)
// 定义信号 C1， 信号值 6
const C1 = signal(6)
// 定义 A1 信号， 信号值为 B1 + C1
const A1 = computed(() => B1.value + C1.value)

// 当 B1 信号值变化时，会自动重新计算 A1 信号值
B1.value = 4
// 打印 A1 信号值为 10
console.log(A1)
