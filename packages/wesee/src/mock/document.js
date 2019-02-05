import Element from './element'
import TextNode from './text-node'
import { addDoc, removeDoc } from './util'


export default class Document {
  constructor(id) {
    this.id = id
    addDoc(id, this)
    this.nodeMap = {}
    this._isMockDocument = true
  }

  // createBody(type, props) {
  //   if (!this.body) {
  //     const el = new Element(type, props)
  //     el.didMount = true
  //     el.ownerDocument = this
  //     el.docId = this.id
  //     el.style.alignItems = 'flex-start'
  //     this.body = el
  //   }

  //   return this.body
  // }

  createElement(tagName, props) {
    let el = new Element(tagName, props)
    el.ownerDocument = this
    el.docId = this.id
    return el
	}

	createTextNode(txt){
		const node = new TextNode(txt)
		node.docId = this.id
		return node
	}

  destroy() {
    delete this.listener
    delete this.nodeMap
    removeDoc(this.id)
  }

  addEventListener(ref, type) {
    //document.addEvent(this.id, ref, type)
  }

  removeEventListener(ref, type) {
    //document.removeEvent(this.id, ref, type)
  }


  scrollTo(ref, x, y, animated) {
    document.scrollTo(this.id, ref, x, y, animated)
  }

}
