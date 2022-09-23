

// SU CARICAMENTO
// pick up the current url > variable part
var link = window.location.href
var sublink = link.slice(42)

// change link in subscription when receiving a personalized url
if (sublink.length > 10){
	document.getElementById("added-text").innerHTML = sublink
	var current_link = document.getElementById('link')
	current_link.setAttribute('href', sublink)};






document.getElementById("process-link").addEventListener("click", process_link);


function process_link{
	//if(){}
	var raw_link = document.getElementById("link-to-process")
	document.getElementById("processed-link").innerHTML(raw_link.slice(29))
};