/// <reference types="vite/client" />

declare module 'tdesign-site-components' {
  const registerLocaleChange: any
  export { registerLocaleChange }
}

declare module 'omi-router' {
  const route: any
  export { route }
}

declare module '*.md' {
  const s: string
  export default s
}
