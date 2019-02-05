import {
	getDoc,
	uniqueId,
	linkParent,
	insertIndex,
	moveIndex,
	removeIndex
} from './util'


function registerNode(docId, node) {
	const doc = getDoc(docId)
	doc.nodeMap[node.nodeId] = node
}

export default class Element {
	constructor(type) {
		this.nodeType = 1
		this.nodeId = uniqueId()
		this.ref = this.nodeId
		this.type = type
		this.attributes = {}
		this.style = {}
		this.classStyle = {}
		this.event = {}
		this.childNodes = []

		this.nodeName = this.type

		this.parentNode = null
		this.nextSibling = null
		this.previousSibling = null
		this.firstChild = null
	}

	appendChild(node) {
		if (!node.parentNode) {
			linkParent(node, this)
			insertIndex(node, this.childNodes, this.childNodes.length, true)

			if (this.docId != undefined) {
				registerNode(this.docId, node)
			}


			//this.ownerDocument.addElement(this.ref, node.toJSON(), -1)

		} else {
			node.parentNode.removeChild(node)

			this.appendChild(node)

			return
		}

		this.firstChild = this.childNodes[0]


	}

	insertBefore(node, before) {
		if (!node.parentNode) {
			linkParent(node, this)
			const index = insertIndex(
				node,
				this.childNodes,
				this.childNodes.indexOf(before),
				true
			)
			if (this.docId != undefined) {
				registerNode(this.docId, node)
			}


			//this.ownerDocument.addElement(this.ref, node.toJSON(), index)

		} else {
			node.parentNode.removeChild(node)
			this.insertBefore(node, before)
			return
		}

		this.firstChild = this.childNodes[0]
	}

	insertAfter(node, after) {
		if (node.parentNode && node.parentNode !== this) {
			return
		}
		if (
			node === after ||
			(node.previousSibling && node.previousSibling === after)
		) {
			return
		}
		if (!node.parentNode) {
			linkParent(node, this)
			const index = insertIndex(
				node,
				this.childNodes,
				this.childNodes.indexOf(after) + 1,
				true
			)

			if (this.docId != undefined) {
				registerNode(this.docId, node)
			}

			//this.ownerDocument.addElement(this.ref, node.toJSON(), index)

		} else {
			const index = moveIndex(
				node,
				this.childNodes,
				this.childNodes.indexOf(after) + 1
			)

			//this.ownerDocument.moveElement(node.ref, this.ref, index)

		}

		this.firstChild = this.childNodes[0]
	}

	removeChild(node) {
		if (node.parentNode) {
			removeIndex(node, this.childNodes, true)


			this.ownerDocument.removeElement(node.ref)

		}

		node.parentNode = null



		this.firstChild = this.childNodes[0]
	}

	setAttribute(key, value, silent) {
		if (this.attributes[key] === value && silent !== false) {
			return
		}
		this.attributes[key] = value
		if (!silent) {
			const result = {}
			result[key] = value

			this.ownerDocument.setAttr(this.ref, result)

		}
	}

	removeAttribute(key) {
		if (this.attributes[key]) {
			delete this.attributes[key]
		}
	}

	setStyle(key, value, silent) {
		if (this.style[key] === value && silent !== false) {
			return
		}
		this.style[key] = value
		if (!silent && this.ownerDocument) {
			const result = {}
			result[key] = value

			this.ownerDocument.setStyles(this.ref, result)

		}
	}

	setStyles(styles) {
		Object.assign(this.style, styles)
		if (this.ownerDocument) {

			this.ownerDocument.setStyles(this.ref, styles)

		}
	}

	setClassStyle(classStyle) {
		for (const key in this.classStyle) {
			this.classStyle[key] = ''
		}

		Object.assign(this.classStyle, classStyle)


		this.ownerDocument.setStyles(this.ref, this.toStyle())

	}

	addEventListener(type, handler) {
		if (!this.event[type]) {
			this.event[type] = handler

			//this.ownerDocument.addEvent(this.ref, type)
		}
	}

	removeEventListener(type) {
		if (this.event[type]) {
			delete this.event[type]
			let doc = getDoc(this.docId)
			doc.nodeMap[this.ref] &&
				doc.nodeMap[this.ref].event &&
				doc.nodeMap[this.ref].event[type]
				? (doc.nodeMap[this.ref].event[type] = null)
				: ''

			this.ownerDocument.removeEvent(this.ref, type)
		}
	}

	fireEvent(type, e) {
		const handler = this.event[type]
		if (handler) {
			return handler.call(this, e)
		}
	}

	toStyle() {
		return Object.assign({}, this.classStyle, this.style)
	}

	getComputedStyle() { }

	toJSON() {
		let result = {
			id: this.ref,
			type: this.type,
			docId: this.docId || -10000,
			attributes: this.attributes ? this.attributes : {}
		}
		result.attributes.style = this.toStyle()

		const event = Object.keys(this.event)
		if (event.length) {
			result.event = event
		}

		if (this.childNodes.length) {
			result.children = this.childNodes.map(child => child.toJSON())
		}
		return result
	}

	replaceChild(newChild, oldChild) {
		this.insertBefore(newChild, oldChild)
		this.removeChild(oldChild)
	}

	destroy() {
		const doc = getDoc(this.docId)

		if (doc) {
			delete doc.nodeMap[this.nodeId]
		}

		this.parentNode = null
		this.childNodes.forEach(child => {
			child.destroy()
		})
	}
}
