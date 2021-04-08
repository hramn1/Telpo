'use strict';
(function () {
	let dataUser = []
	var xhr = new XMLHttpRequest();
	xhr.responseType = 'json';
	xhr.open('GET', "data.json", true);
	xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
	xhr.send();
	xhr.onload = function () {
		dataUser = xhr.response;
		drawUser(dataUser);
	}
})()
