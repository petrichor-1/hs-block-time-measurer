function petrichorIdentify(obj, alreadySeen) {
	alreadySeen = alreadySeen || new Set()
	if (alreadySeen.has(obj))
		return
	alreadySeen.add(obj)
	if (!obj)
		return
	obj.petrichorId = crypto.randomUUID()
	for (const key in obj) {
		if (Object.hasOwnProperty.call(obj, key)) {
			const element = obj[key];
			petrichorIdentify(element,alreadySeen)
		}
	}
	return obj
}
function getIdFromUser() {
	const input = prompt("Project uuid or link")
	if (/^https:\/\//.test(input)) { // Hopscotch uuids cannot contain ":" or "/"
		input = input.match(/[a-z0-9\-]+$/)[0]
		if (!confirm(`Using uuid ${input}, cancel to re-enter`))
			return getIdFromUser()
	}
	return input
}
const params = new URLSearchParams(location.search)
let projectsAPIEndpoint = params.get("papi")
if (!projectsAPIEndpoint)
	projectsAPIEndpoint = "https://c.gethopscotch.com/api/v1/projects/"
let id = params.get("id")
if (!id)
	id = getIdFromUser()
const url = "https://corsproxy.io/?" + encodeURIComponent(projectsAPIEndpoint + id)
fetch(url)
	.then(response => response.json().then(json => {
		console.log(json)
		document.querySelector('hopscotch-player').dataset.projectJson=JSON.stringify(petrichorIdentify(json))
		displayProject(json,document.querySelector("petrichor-hs-editor"))
		main.setSizeFromDataAttrs()
		document.querySelectorAll("hopscotch-player > canvas").forEach(canvas => {
			canvas.style = null
			canvas.width = `${json.stageSize.width}`
			canvas.height = `${json.stageSize.height}`
			console.log(json.stageSize)
		})
		main.play(json)
		main.root.style = null
	}))