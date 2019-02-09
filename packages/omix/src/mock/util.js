let nodeId = 1
export function uniqueId() {
  return nodeId++
}

let docMap = {}

export function addDoc(id, doc) {
  docMap[id] = doc
}

export function getDoc(id) {
  return docMap[id]
}

export function removeDoc(id) {
  delete docMap[id]
}

let sendBridgeFlag = {}

export function getSendBridgeFlag() {
  return sendBridgeFlag
}

export function setSendBridgeFlag(docId, flag) {
  return (sendBridgeFlag[docId] = flag)
}

export function insertIndex(target, list, newIndex) {
  if (newIndex < 0) {
    newIndex = 0
  }
  const before = list[newIndex - 1]
  const after = list[newIndex]
  list.splice(newIndex, 0, target)

  before && (before.nextSibling = target)
  target.previousSibling = before
  target.nextSibling = after
  after && (after.previousSibling = target)

  return newIndex
}

export function moveIndex(target, list, newIndex) {
  const index = list.indexOf(target)

  if (index < 0) {
    return -1
  }

  const before = list[index - 1]
  const after = list[index + 1]
  before && (before.nextSibling = after)
  after && (after.previousSibling = before)

  list.splice(index, 1)
  let newIndexAfter = newIndex
  if (index <= newIndex) {
    newIndexAfter = newIndex - 1
  }
  const beforeNew = list[newIndexAfter - 1]
  const afterNew = list[newIndexAfter]
  list.splice(newIndexAfter, 0, target)

  beforeNew && (beforeNew.nextSibling = target)
  target.previousSibling = beforeNew
  target.nextSibling = afterNew
  afterNew && (afterNew.previousSibling = target)

  if (index === newIndexAfter) {
    return -1
  }
  return newIndex
}

export function removeIndex(target, list, changeSibling) {
  const index = list.indexOf(target)

  if (index < 0) {
    return
  }
  if (changeSibling) {
    const before = list[index - 1]
    const after = list[index + 1]
    before && (before.nextSibling = after)
    after && (after.previousSibling = before)
  }
  list.splice(index, 1)
}

export function remove(target, list) {
  const index = list.indexOf(target)

  if (index < 0) {
    return
  }

  const before = list[index - 1]
  const after = list[index + 1]
  before && (before.nextSibling = after)
  after && (after.previousSibling = before)

  list.splice(index, 1)
}

export function linkParent(node, parent) {
  node.parentNode = parent
  if (parent.docId) {
    node.docId = parent.docId
    node.ownerDocument = parent.ownerDocument
    node.ownerDocument.nodeMap[node.nodeId] = node
    node.depth = parent.depth + 1
	}

  node.childNodes && node.childNodes.forEach(child => {
    linkParent(child, node)
  })
}

export function nextElement(node) {
  while (node) {
    if (node.nodeType === 1) {
      return node
    }
    node = node.nextSibling
  }
}

export function previousElement(node) {
  while (node) {
    if (node.nodeType === 1) {
      return node
    }
    node = node.previousSibling
  }
}
