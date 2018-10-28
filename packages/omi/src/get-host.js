export function getHost(ele) {
	let p = ele.parentNode
	while (p) {
		if(p.host){
			return p.host
		}else{
			p = p.parentNode
		}
	}
}
