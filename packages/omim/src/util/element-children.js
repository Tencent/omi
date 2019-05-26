export function elementChildren(element) {
	const childNodes = element.childNodes,
		children = [],
		i = childNodes.length

	while (i--) {
		if (childNodes[i].nodeType == 1) {
			children.unshift(childNodes[i])
		}
	}

	return children
}
