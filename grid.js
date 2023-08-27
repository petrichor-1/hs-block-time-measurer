function allowResizingGrid(grid, resizeDragElement) {
	resizeDragElement.addEventListener("mousedown",e => {
		function dragTo(x) {
			const centerX = document.body.clientWidth/2
			const distanceFromCenter = x-centerX
			grid.style.gridTemplateColumns = `calc((50% - 4px) + ${distanceFromCenter}px) 8px calc((50% - 4px) - ${distanceFromCenter}px)`
		}
		const moveFunc = e => {
			dragTo(e.clientX)
		}
		const selectFunc = e => {
			e.preventDefault()
			return false
		}
		const upFunc = e => {
			dragTo(e.clientX)
			grid.removeEventListener("mouseup",upFunc)
			grid.removeEventListener("mousemove",moveFunc)
			document.removeEventListener("selectstart",selectFunc)
		}
		document.addEventListener("selectstart",selectFunc)
		grid.addEventListener("mousemove", moveFunc)
		grid.addEventListener("mouseup", upFunc)
	})
}

allowResizingGrid(document.getElementById("petrichor-hs-player-editor-grid"),document.getElementById("petrichor-main-grid-separator-grabber"))