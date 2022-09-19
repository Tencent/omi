export function getHost(ele) {
  let root = ele.getRootNode()
  return root && root.host
}
