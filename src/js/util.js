/**
 * 鼠标事件兼容性
 */
let _eventCompat = function(event) {
	let type = event.type
	if (type == 'DOMMouseScroll' || type == 'mousewheel') {
		event.delta = (event.wheelDelta) ? event.wheelDelta / 120 : -(event.detail || 0) / 3
	}

	if (event.srcElement && !event.target) {
		event.target = event.srcElement  
	}
	if (!event.preventDefault && event.returnValue !== undefined) {
		event.preventDefault = function() {
			event.returnValue = false
		}
	}

	return event
}
export function addMouseEvent(el, type, fn, capture){
	if (type === 'mousewheel' && document.mozFullScreen !== undefined) {
		type = 'DOMMouseScroll'
	}
	el.addEventListener(type, function(event) {
		fn.call(this, _eventCompat(event));
	}, capture || false);
}

/**
 * 获取元素高度
 */
export function getElemHeight(el){
	return el.getBoundingClientRect().height
}