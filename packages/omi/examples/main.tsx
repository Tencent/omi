switch (location.hash) {
  case '#base':
    import('./base')
    break
  case '#signal':
    import('./signal')
    break
  default:
    import('./todo-app')
}
