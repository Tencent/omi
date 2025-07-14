import { signal } from 'omi'

interface UserData {
  name: string
  age: number
  job: string
}

export const userData = signal<UserData | null>(null)