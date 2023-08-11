export function vfilePlugin(files) {
  return {
    name: 'vfile', // this name will show up in warnings and errors
    resolveId(source) {
      if (files[source]) {
        return source // this signals that rollup should not ask other plugins or check the file system to find this id
      }
      return null // other ids should be handled as usually
    },
    load(id) {
      if (files.hasOwnProperty(id)) {
        return files[id] // the source code for "virtual-module"
      }
      return null // other ids should be handled as usually
    }
  }
}
