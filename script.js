

var link = window.location.href
var sublink = link.slice(42)

if (sublink.length > 10){
	document.getElementById("link").innerHTML = sublink};
	alert(sublink)
