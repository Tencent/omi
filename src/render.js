
import { diff } from './vdom/diff'
import options from './options'
import jsonDiff from './json-diff'

export function render(vnode, parent, store) {
	parent = typeof parent === 'string' ? document.querySelector(parent) : parent
	if(store){
		store.instances = []
		extendStoreUpate(store)
		options.store = store
		store.originData = JSON.parse(JSON.stringify(store.data))	
	}
	diff(null, vnode, {}, false, parent, false)
} 

function extendStoreUpate(store){
	store.update = function(){
		let diffResult = jsonDiff(this.data, this.originData)
		if (Object.keys(diffResult)[0] == '') {
			diffResult = diffResult['']
		}
		const updateAll = matchGlobalData(this.globalData, diffResult)
		if (Object.keys(diffResult).length > 0) {
			this.instances.forEach(instance => {
				if(updateAll || this.updateAll || instance.constructor.updatePath && needUpdate(diffResult, instance.constructor.updatePath)){
					instance.update()
				}
			})
			this.onChange && this.onChange(diffResult)
			for (let key in diffResult) {
				updateByPath(this.originData, key, typeof diffResult[key] === 'object' ? JSON.parse(JSON.stringify(diffResult[key])) : diffResult[key])
			}
		}
	}
}

function matchGlobalData(globalData, diffResult) {
	if(!globalData) return false
    for (let keyA in diffResult) {
        if (globalData.indexOf(keyA) > -1) {
            return true
        }
        for (let i = 0, len = globalData.length; i < len; i++) {
            if (includePath(keyA, globalData[i])) {
                return true
            }
        }
    }
    return false
}
//todo path级别检测包括Array，如果array为空数组，默认值在install里加
function needUpdate(diffResult, updatePath){
    for(let keyA in diffResult){
        if(updatePath[keyA]){
            return true
        }
        for(let keyB in updatePath){
            if(includePath(keyA, keyB)){
                return true
            }
        }
    }
    return false
}

function includePath(pathA, pathB){
    if(pathA.indexOf(pathB)===0){
        const next = pathA.substr(pathB.length, 1)
        if(next === '['||next === '.'){
            return true
        }
    }
    return false
}

function updateByPath(origin, path, value) {
    const arr = path.replace(/]/g, '').replace(/\[/g, '.').split('.')
    let current = origin
    for (let i = 0, len = arr.length; i < len; i++) {
        if (i === len - 1) {
            current[arr[i]] = value
        } else {
            current = current[arr[i]]
        }
    }
}
