"use strict";
class UserController {
	constructor(data){
		this.data = data;
		this.init();
	}
	init(){
		drawUser(this.data);
		let editBtn = document.querySelectorAll('.users__btn-edit');
		let removeBtn = document.querySelectorAll('.users__btn-remove');
		for(let i = 0; i < removeBtn.length; i++){
			removeBtn[i].addEventListener("click", () => {
				this.data.splice(i,1);
				clearContainer();
				drawUser(this.data);
			})
		}
	}
}
