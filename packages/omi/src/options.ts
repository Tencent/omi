export const options = {
  mixin: {} as Record<string, unknown>,
  // 全局样式
  globalCSS: [] as CSSStyleSheet[],
}

export function mixin(obj: Record<string, unknown>) {
  Object.assign(options.mixin, obj)
}

// 注入全局样式
export function globalCSS(css: CSSStyleSheet) {
  if (!options.globalCSS.includes(css)) {
    options.globalCSS.push(css)
  }
}
