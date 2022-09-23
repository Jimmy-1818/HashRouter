

// SU CARICAMENTO
// pick up the current url > variable part
var link = window.location.href
var sublink = link.slice(42)
console.log("!")

// change registration link when receiving a personalized url
if (sublink.length > 10){
	console.log("in > 10")
	document.getElementById("added-text").innerHTML = sublink
	var current_link = document.getElementById('link')
	current_link.setAttribute('href', sublink)};






document.getElementById("process-link").addEventListener("click", process_link);

function process_link(){
	//if(non vuoto){tutto}
	var affiliation_link = document.getElementById("link-to-process").value
	var variable_affiliation = String(affiliation_link).slice(29)
	var affiliate_site = "https://jimmy-1818.github.io/HashRouter/" + "#/" + variable_affiliation

	document.getElementById("processed-link").value = affiliate_site};

	// else vedi che messaggio rendere