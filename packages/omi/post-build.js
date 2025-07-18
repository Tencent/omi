const fs = require('fs')

const outputFile = 'dist/omi.umd.js'
const customCode = `if(typeof window!=='undefined'){window.omi=window.Omi};`

fs.readFile(outputFile, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err)
    return
  }

  const sourceMappingIndex = data.lastIndexOf(
    '//# sourceMappingURL=omi.umd.js.map',
  )
  const updatedData = [
    data.slice(0, sourceMappingIndex),
    customCode,
    '\n',
    data.slice(sourceMappingIndex),
  ].join('')

  fs.writeFile(outputFile, updatedData, 'utf8', (err) => {
    if (err) {
      console.error('Error writing file:', err)
      return
    }
    console.log('Custom code injected successfully!')
  })
})

const noop = () => {}
fs.unlink('class.d.ts', noop)
fs.unlink('component.d.ts', noop)
fs.unlink('constants.d.ts', noop)
fs.unlink('construct-style-sheets-polyfill.d.ts', noop)
fs.unlink('css-tag.d.ts', noop)
fs.unlink('define.d.ts', noop)
fs.unlink('diff.d.ts', noop)
fs.unlink('dom.d.ts', noop)
fs.unlink('index.d.ts', noop)
fs.unlink('reactivity.d.ts', noop)
fs.unlink('render.d.ts', noop)
fs.unlink('signal.d.ts', noop)
fs.unlink('utils.d.ts', noop)
fs.unlink('vdom.d.ts', noop)
fs.unlink('options.d.ts', noop)
fs.unlink('directive.d.ts', noop)
