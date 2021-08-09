let id = 0


export function genId() {
  id += 1
  return id
}

export function resetId() {
  id = 0
}
