import * as  fs from 'fs'


// move signal.d.ts to dist
fs.rename('signal.d.ts', 'dist/signal.d.ts', () => { })
// move utils.d.ts to dist
fs.rename('utils.d.ts', 'dist/utils.d.ts', () => { })
// move reactivity.d.d.ts to dist
fs.rename('reactivity.d.ts', 'dist/reactivity.d.ts', () => { })
// move index.d.ts to dist
fs.rename('index.d.ts', 'dist/index.d.ts', () => { })
