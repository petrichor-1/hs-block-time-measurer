function displayPerformanceSummary(summary, element, importantKey) {
	summary.forEach(item => {
		const listItem = document.createElement("li")
		element.appendChild(listItem)
		const itemElement = document.createElement("div")
		listItem.appendChild(itemElement)
		itemElement.className = "petrichor-hs-performance-summary-item"
		const linkElement = setText("see code...", createElement("button.petrichor-hs-performance-link"))
		linkElement.dataset.petrichorId = item.petrichorId
		linkElement.addEventListener("click",goToPetrichorId)
		itemElement.appendChild(linkElement)
		displayJSObject(item,itemElement,[importantKey],["petrichorId"])
	})
}

function displayJSObject(item, element, importantKeys, excludedKeys) {
	const listElement = createElement("ul.petrichor-hs-performance-single-item")
	element.appendChild(listElement)
	for (const key in item) {
		if (Object.hasOwnProperty.call(item, key)) {
			if (excludedKeys.includes(key))
				continue
			const value = item[key];
			const itemElement = document.createElement("li")
			listElement.appendChild(itemElement)
			itemElement.appendChild(setText(key,createElement("span.petrichor-hs-performance-item-key"+(importantKeys.includes(key) ? ".important" : ""))))
			itemElement.appendChild(setText(value,createElement("span.petrichor-hs-performance-item-value")))
		}
	}
}

function goToPetrichorId(event) {
	const petrichorId = event.target.dataset.petrichorId
	if (!petrichorId)
		return alert("No petrichorId")
	const targetElement = document.getElementById(petrichorId)
	highlightElement(targetElement)
	targetElement.scrollIntoView()
}

function highlightElement(element) {
	Array.from(document.querySelectorAll(".petrichor-hs-performance-highlighted")).forEach(e=>e.classList.remove("petrichor-hs-performance-highlighted"))
	element.classList.add("petrichor-hs-performance-highlighted")
}

function formatPercentage(percentage) {
	const asPercent = Math.round(percentage * 100000)/1000
	return `${asPercent}%`
}

const percentageNoteElementType = "span.petrichor-hs-percentage-note"

function clearPercentageNotes() {
	document.querySelectorAll(percentageNoteElementType).forEach(element => {
		element.parentElement.removeChild(element)
	})
}

function showHeatmapForPercentages(percentages) {
	percentages.forEach(percentage => {
		const element = document.getElementById(percentage.petrichorId)
		if (!element) {
			console.error(percentage, "No element")
			return
		}
		const percentageNoteElement = setText(formatPercentage(percentage.percentage),createElement(percentageNoteElementType))
		const currentFirstChild = element.children[0]
		// In what world does this order of arguments make sense?
		//    This doesn't insert the currentFirstChild before the
		//    percentage note, rather it does it the other way around.
		element.insertBefore(percentageNoteElement,currentFirstChild)
		const grey = 256-(percentage.percentage * 256)
		element.style.backgroundColor = `rgb(${grey},${grey},${grey})`
	})
}


function calculatePercentagesFromSummary(summary) {
	const totalExecutionTime = summary.reduce((value,item)=>item.totalExecutionTime+value,0)
	return summary.map(item => {
		return {
			percentage: item.totalExecutionTime/totalExecutionTime,
			petrichorId: item.petrichorId
		}
	})
}

document.querySelector("#petrichor-hs-performance-summarize-blocks").addEventListener("click",e=>{
	createAndDisplaySummaryFor(PETRICHOR_BLOCK_PERFORMANCE_STATS)
})
document.querySelector("#petrichor-hs-performance-summarize-scripts").addEventListener("click",e=>{
	createAndDisplaySummaryFor(PETRICHOR_SCRIPT_PERFORMANCE_EVENTS)
})
document.querySelector("#petrichor-hs-performance-summarize-operators").addEventListener("click",e=>{
	createAndDisplaySummaryFor(PETRICHOR_PARAMETER_PERFORMANCE_EVENTS)
})
document.querySelector("#petrichor-hs-performance-show-heatmap").addEventListener("click",e => {
	const scriptPercentages = calculatePercentagesFromSummary(petrichorSummarizeEvents(PETRICHOR_SCRIPT_PERFORMANCE_EVENTS))
	const blockPercentages = calculatePercentagesFromSummary(petrichorSummarizeEvents(PETRICHOR_BLOCK_PERFORMANCE_STATS))
	const operatorPercentages = calculatePercentagesFromSummary(petrichorSummarizeEvents(PETRICHOR_PARAMETER_PERFORMANCE_EVENTS))
	clearPercentageNotes()
	showHeatmapForPercentages(scriptPercentages)
	showHeatmapForPercentages(blockPercentages)
	showHeatmapForPercentages(operatorPercentages)
})

function createAndDisplaySummaryFor(events) {
	const sortByKey = document.getElementById("petrichor-hs-performance-summary-sort-by").value
	const shouldSortDescending = document.getElementById("petrichor-hs-performance-summary-sort-descending").checked
	const summary = petrichorSummarizeEvents(events,sortByKey,shouldSortDescending)
	const element = document.querySelector("#petrichor-hs-performance-summary-container")
	Array.from(element.children).forEach(e => element.removeChild(e))
	displayPerformanceSummary(summary, element, sortByKey)
}
