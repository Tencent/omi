switch (location.hash) {
  case '#base':
    import('./base')
    break
  case '#tdesign-icons-omi':
    import('./tdesign-icons-omi')
    break
  case '#signal':
    import('./signal')
    break
  case '#sharing-styles':
    import('./sharing-styles')
    break
  default:
    import('./todo-app')
}
