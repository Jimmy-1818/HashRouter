

var link = window.location.href
var sublink = link.slice(40)
alert(link.slice(40))

if (sublink.length > 10){
	document.getElementById("link").innerHTML = sublink};
	