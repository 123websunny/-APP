function drag(elementToDrag, event) {
	var startX = event.clientX,
		startY = event.clientY;
	var origX = elementToDrag.offsetLeft,
		origY = elementToDrag.offsetTop;
	var deltaX = startX - origX,
		deltaY = startY - origY;
	if(document.addEventListener) {
		document.addEventListener("mousemove", moveHandler, true);
		document.addEventListener("mouseup", upHandler, true);
	} else {
		elementToDrag.setCapture();
		elementToDrag.attachEvent("onmousemove", moveHandler);
		elementToDrag.attachEvent("onmouseup", upHandler);
		elementToDrag.attachEvent("onlosecapture", upHandler);
	}
	if(event.stopPropagation) event.stopPropagation();
	else event.cancelBubble = true;
	if(event.preventDefault) event.preventDefault();
	else event.returnValue = false;

	function moveHandler(e) {
		if(!e) e = window.event;
		elementToDrag.style.left = (e.clientX - deltaX) + "px";
		elementToDrag.style.top = (e.clientY - deltaY) + "px";
		elementToDrag.style.zIndex = "10";
		if(e.stopPropagation) e.stopPropagation();
		else e.cancelBubble = true;
	}

	function upHandler(e) {
		if(!e) e = window.event;
		elementToDrag.style.zIndex = "1";
		if(document.removeEventListener) {
			document.removeEventListener("mouseup", upHandler, true);
			document.removeEventListener("mousemove", moveHandler, true);
		} else {
			elementToDrag.detachEvent("onlosecapture", upHandler);
			elementToDrag.detachEvent("onmouseup", upHandler);
			elementToDrag.detachEvent("onmousemove", moveHandler);
			elementToDrag.releaseCapture();
		}
		if(e.stopPropagation) e.stopPropagation();
		else e.cancelBubble = true;
	}
}