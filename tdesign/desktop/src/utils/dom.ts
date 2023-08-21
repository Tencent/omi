// 用于判断是否可使用 dom
export const canUseDocument = !!(typeof window !== 'undefined' && window.document && window.document.createElement)

// 获取 css vars
export const getCssVarsValue = (name: string, element?: HTMLElement) => {
  if (!canUseDocument) return

  const el = element || document.documentElement
  return getComputedStyle(el).getPropertyValue(name)
}
