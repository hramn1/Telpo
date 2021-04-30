"use strict";
class UserController {
	constructor(data){
		this.data = data;
		this.init(this.data);
		this.addUser();

	}
	init(data){
		let userTemplate = document.querySelector('.users__list');
		userTemplate.innerHTML = "";
			for (let i = 0; i<data.length; i++){
				const user = new UserTemplate(data[i], userTemplate, i);
				this.removeUser(user, data);
				user.removeElement(user);
		}
	}
	removeUser(user, data){
		let userTemplate = document.querySelector('.users__list');
		let newData = data;
		user.removeElement = (el) => {
			el._element.querySelector('.users__btn-remove').onclick = (evt) => {
				 this.data  = newData.filter((item, i ) =>{
					return i != evt.target.parentNode.id;
				 })
				 user.unrender();
				 for (let i = 0; i <= this.data.length; i++){
					 this.init(this.data );
				 }
			}
		}
	}
	addUser(){
		let btnAdd = document.querySelector('.users__btn-add');
		let addContainer = document.querySelector('.users__add');
		let countId  = this.data[this.data.length-1].id;
		btnAdd.onclick = () =>{
			countId++
			const user = new UserTemplateAdd(countId, addContainer);
			user.editUser(this.data);
		}
	}

	editUser(){

	}
}
