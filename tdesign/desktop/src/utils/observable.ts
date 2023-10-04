export function observable(target: any, propertyKey: string) {
  // 保存原始属性值
  let original = target[propertyKey]

  Object.defineProperty(target, propertyKey, {
    get() {
      console.log('Getting ', propertyKey)
      return original
    },
    set(value) {
      console.log('Setting ', propertyKey)
      original = value
      try {
        // target.update()
      } catch (err) {
        console.warn(err)
      }
    },
  })
}
