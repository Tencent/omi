const store = {
	data:{
		count: 1
	}
}

function add(){
	store.data.count++
}

function sub(){
	store.data.count--
}

store.add = add
store.sub = sub

export default store
