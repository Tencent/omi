import {
	getDoc,
	uniqueId
} from './util'


function registerNode(docId, node) {
	const doc = getDoc(docId)
	doc.nodeMap[node.nodeId] = node
}

export default class TextNode {
	constructor(nodeValue) {
		this.nodeType = 3
		this.nodeId = uniqueId()
		this.ref = this.nodeId
		this.attributes = {}
		this.style = {
			display: 'inline'
		}
		this.classStyle = {}
		this.event = {}
		this.nodeValue = nodeValue
		this.parentNode = null
		this.nextSibling = null
		this.previousSibling = null
		this.firstChild = null
		this.type = 'text'
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

	toStyle() {
		return Object.assign({}, this.classStyle, this.style)
	}

	splitText() {

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

		return result
	}

	destroy() {
		const doc = getDoc(this.docId)

		if (doc) {
			delete doc.nodeMap[this.nodeId]
		}

		this.parentNode = null

	}
}
