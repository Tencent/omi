import cax from './cax'

const defaultValue = {
	width: 0,
	height: 0,
	color: black
}

export function draw(root, width, height) {
	const stage = new cax.Stage(window.innerWidth, window.innerHeight, 'body')
	// root.style.x = 0
	// root.style.y = 0
	root.style._width = root.style.width === undefined ? width : root.style.width
	root.style._height = root.style.height === undefined ? 0 : root.style.height



	const group = _draw(root, stage)

	if (root.childNodes) {
		root.childNodes.forEach(child => {
			child.style._color = child.style.color || root.style.color
			renderChildren(child, width, height, group)
		})
	}

	stage.hitAABB = true
	//debug
	//window.stage = stage
	//console.log(stage)

	cax.tick(function () {
		stage.update()
	})

	return stage.canvas
}

function _draw(root, g) {

	switch (root.type) {
		case 'div':
		case 'button':
		case 'span':
			const group = new cax.Group()
			Object.keys(root.event).forEach(key => {
				group.on(key, root.event[key].bind(root))
			})
			group.width = parseFloat(root.style.width)
			group.height = parseFloat(root.style.height)
			group.cursor = root.style.cursor
			group.zIndex = root.style.zIndex
			group.position = root.style.position
			//bg rect
			const rect = new cax.Rect(parseFloat(root.style._width), parseFloat(root.style._height), {
				fillStyle: root.style.backgroundColor
			})

			group.x = root.style.x || 0
			group.y = root.style.y || 0
			group.add(rect)
			root.childNodes.forEach(child => {
				_draw(child, group)
			})
			g.add(group)
			return group
			break

		case 'text':
			const text = new cax.Text(root.nodeValue, {
				color: root.style._color
			})
			//link it by _renderText
			root._renderText = text
			text.x = root.style.x || 0
			text.y = root.style.y || 0

			g.add(text)

			return text
			break

		case 'img':
			const bmp = new cax.Bitmap(root.src)
			bmp.x = root.style.x || 0
			bmp.y = root.style.y || 0

			g.add(bmp)

			return bmp
		// case 'button':

		// 	break

		// case 'span':

		// 	break

		// case 'div':

		// 	break

	}

}

function getParent(root) {
	if (!root.parent) {
		return root
	} else if (root.parent.style.position !== 'static') {

		return root.parent

	} else {
		return getParent(root.parent)
	}
}

function renderChildren(root, width, height, group) {
	//fix it?

	const display = root.parentNode.style.display
	const position = root.style.position


	if (position === 'absolute') {
		const parent = getParent(root)

		// root.style.x = (parent.style.x || 0 )  + parseFloat( root.style.left)
		// root.style.y = (parent.style.y || 0 )  + parseFloat( root.style.top)
		root.style._width = root.style.width === undefined ? 0 : root.style.width

		root.style._height = root.style.height === undefined ? 0 : root.style.height

	} else if (display === 'block') {
		root.style._width = root.style.width === undefined ? (root.parent ? root.parent.style._width : window.innerWidth) : root.style.width
		root.style._height = root.style.height === undefined ? 0 : root.style.height
		//root.style.x = root.parent?root.parent.style.x:0
		if (root.preNode) {
			//	root.style.y = root.preNode.style.y + root.preNode.style._height
		} else {

			//	root.style.y = root.parent?root.parent.style.y:0
		}
	} else if (display === 'flex') {

		if (root.parent.totalFlex !== undefined) {
			root.style._flex = root.style.flex / root.parent.totalFlex
		} else {
			root.parent.totalFlex = 0
			const len = root.parent.children.length
			if (len > 1) {
				root.parent.children.forEach(child => {
					if (child.style.position != 'absolute' && child.style.position != 'fixed') {
						child.style._flexPosition = root.parent.totalFlex
						root.parent.totalFlex += child.style.flex
					}
				})
			}
			root.style._flex = root.style.flex / root.parent.totalFlex
		}

		//root.style.x = width * root.style._flexPosition / root.parent.totalFlex


		root.style._width = width * root.style._flex
		root.style._height = root.style.height === undefined ? 0 : root.style.height


		//root.style.y = root.parent.style.y
	}



	// const newg = _draw(root, group)

	// if (root.children) {
	// 		root.children.forEach(child => {
	// 				child.style._color = child.style.color || root.style.color || root.style._color
	// 				renderChildren(child, width, height, newg)
	// 		})
	// }


}

function fixZIndex(group) {

	group.children.forEach(child => {
		const arr = []
		//过滤掉 rect？？
		if (child.position === 'absolute') {
			arr.push(child)
		}
		arr.sort(function (a, b) { return a.zIndex - b.zIndex })

		arr.forEach(child => {
			group.add(child)
		})
		if (child.children) {
			fixZIndex(child)
		}

	})
}
