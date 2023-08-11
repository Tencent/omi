import { vfilePlugin } from './rollup-plugin-vfile'
import { rollup } from 'rollup';
import { files } from './files'
import { cssStringPlugin } from './rollup-plugin-css'

// see below for details on these options
const inputOptions = {
  input: './index', // resolved by our plugin
  plugins: [vfilePlugin(files), cssStringPlugin()],
  // 不需要 tree shaking
  treeshake: false
}

// you can create multiple outputs from the same input to generate e.g.
// different formats like CommonJS and ESM
const outputOptionsList = [{
  file: 'bundle.js',
  format: 'umd' //es
}]


export async function rollupBuild(callback) {
  if (!files['./index']) {
    return
  }
  let bundle

  try {
    // create a bundle
    // @ts-ignore
    bundle = await rollup(inputOptions);

    // an array of file names this bundle depends on
    const output = await generateOutputs(bundle)
    callback(output[0].code)
  } catch (error) {

    // do some error reporting
    console.error(error)
  }
  if (bundle) {
    // closes the bundle
    await bundle.close()
  }
}

async function generateOutputs(bundle) {
  const { output } = await bundle.generate(outputOptionsList[0])
  return output
  // for (const outputOptions of outputOptionsList) {
  //   const { output } = await bundle.generate(outputOptions)
  //   for (const chunkOrAsset of output) {
  //     if (chunkOrAsset.type === 'asset') {
  //       console.log('Asset', chunkOrAsset)
  //     } else {
  //       callback(output[0].code)
  //       // console.log('Chunk', chunkOrAsset.modules)
  //     }
  //   }
  // }
}