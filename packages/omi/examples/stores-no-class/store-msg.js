const store = {
	data:{
		msg: 'abc'
	}
}

store.changeMsg = () => {
	store.data.msg = 'bcd'
}


export default store
