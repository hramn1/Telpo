'use strict';
(function () {
	let userTemplate = document.querySelector('.users__list');

	let drawUser = (data) =>{
		for (let i = 0; i<data.length; i++){
			const user = new UserTemplate(data[i]);
			let ff = document.createElement("div");
			ff.innerHTML = user.getTemplate();
			userTemplate.prepend(ff);
		}
	}
	let clearContainer = () => {
		userTemplate.innerHTML = ""
	}
	window.drawUser = drawUser;
	window.clearContainer = clearContainer;
})()
