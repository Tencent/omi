import tailwindcss from '@tailwindcss/postcss'

const postcssDarkModeHost = (opts = {}) => {
  // Work with options here
  return {
    postcssPlugin: 'postcssDarkModeHost',
    Rule(rule) {
      // Transform CSS AST here
      if (rule.selector.startsWith(':is(.dark ')) {
        rule.selector = rule.selector.replace(':is(.dark ', ':is(:host(.dark) ')
      }
    },
  }
}
postcssDarkModeHost.postcss = true

export default {
  plugins: [
    tailwindcss,
    postcssDarkModeHost(),
  ],
}
