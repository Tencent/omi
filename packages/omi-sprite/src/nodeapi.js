import {createNode, BaseSprite} from 'spritejs'

export function createElement(tagName) {
  return createNode(tagName)
}
export function createElementNS(namespaceURI, qualifiedName) {
  return createNode(qualifiedName)
}
export function createTextNode(text) {
  return text
}
export function createComment(text) {
  // no def
}
export function insertBefore(parentNode, newNode, referenceNode) {
  if(parentNode) {
    parentNode.insertBefore(newNode, referenceNode)
  }
}
export function removeChild(node, child) {
  node.removeChild(child)
}
export function appendChild(node, child) {
  if(typeof child === 'string') {
    node.text = child
  } else {
    node.appendChild(child)
  }
}
export function parentNode(node) {
  return node.parent
}
export function nextSibling(node) {
  if(node.parent) {
    const idx = node.parent.children.indexOf(node)
    return node.parent[idx + 1]
  }
}
export function tagName(elm) {
  return elm.tagName
}
export function setTextContent(node, text) {
  node.text = text
}
export function getTextContent(node) {
  return node.text
}
export function isElement(node) {
  return node instanceof BaseSprite
}
export function isText(node) {
  return typeof node === 'string'
}
export function isComment(node) {
  return false
}
