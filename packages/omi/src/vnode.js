/** Virtual DOM Node */
export function VNode(nodeName, attributes, children) {
  this.nodeName = nodeName
  this.children = children
  this.attributes = attributes == null ? undefined : attributes
  this.key = attributes == null ? undefined : attributes.key
}
