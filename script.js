

var link = window.location.href
var sublink = link.slice(42)

if (sublink.length > 10){
	alert("changed")
	document.getElementById("added-text").innerHTML = sublink
	var current_link = document.getElementById('link')
	current_link.setAttribute('href', sublink)};