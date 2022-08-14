export function cssStringPlugin() {
  return {
    name: "css-string",
    transform(code, id) {
      if (id.endsWith('.css')) {
        return {
          code: `export default ${JSON.stringify(code)};`,
          map: { mappings: "" }
        }
      }
    }
  }
}
