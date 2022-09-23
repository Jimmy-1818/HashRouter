

var link = window.location.href
var sublink = link.slice(42)

if (sublink.length > 10){
	alert("changed")
	document.getElementById("added-text").innerHTML = sublink
	var current_link = document.getElementById('link')
	current_link.setAttribute('href', sublink)};


document.getElementById("process-link").addEventListener("click", process_link(document.getElementById("link-to-process")));


function process_link(sub){


document.getElementById("processed-link").innerHTML(MMMMMMMMMMMM)
}