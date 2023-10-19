let id = 0

export function genNode() {
  return {
    name: `my-el${id++}`
  }
}