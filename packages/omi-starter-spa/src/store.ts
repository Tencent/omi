import { signal } from "omi"

export const userState = signal<{ name: string, age: number }>({
  name: '',
  age: 0
})