const store = {
	data:{
		count: 1
	}
}

store.add = _ => {
	store.data.count++
}

store.sub = _ => {
	store.data.count--
}

export default store
