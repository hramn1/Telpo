class UserTemplate {
	constructor(user, container, count){
		this.id = user.id;
		this.fio = user.fio;
		this.count = count;
		this.data = user;
		this.UIDBraslet = user["UID-Braslet"];
		this.idSystem = user["id-system"];
		this.aceessPassage = user["aceess-passage"];
		this.wardrobe = user["wardrobe"];
		this.message = user.message;
		this.container = container;
		this._element = null;
		this.render();
		this.removeDisabled();
	}
	getTemplate() {
		return `
		<div class="users__item border-bottom border-dark pb-4 mb-3" id=${this.count}>
			<form class="row pt-3 pb-4">
				<div class="col">
				<label class="d-block  form-label mt-2 mb-2" for="">ID</label>
				<input class="d-block form-control" type="text" disabled name="id" value="${this.id}">
				<label class="d-block form-label  mt-2 mb-2" for="">ФИО</label>
				<input class="d-block form-control" type="text" disabled name="" value="${this.fio}">
			</div>

				<div class="col">
						<label class="d-block form-label mt-2 mb-2" for="">Браслет</label>
						<input class="d-block form-control" type="text" disabled name="" value="${this.UIDBraslet}">

				<label class="d-block form-label  mt-2 mb-2" for="">ID Системы</label>
				<input class="d-block form-control" type="text" disabled name="" value="${this.idSystem}">
				</div>
				<div class="col">
				<label class="d-block form-label  mt-2 mb-2" for="">Доступ</label>
				<input class="d-block form-control" type="text" disabled name="" value="${this.aceessPassage}">
				<label class="d-block form-label  mt-2 mb-2" for="">Шкаф</label>
				<input class="d-block form-control" type="text" disabled name="" value="${this.wardrobe}">
				</div>
					<div class="col d-flex flex-column ">
				<label class="d-block form-label  mt-2 mb-2" for="">Сообщение</label>
				<input class="d-block form-control" type="text" disabled name="" value="${this.message}">
				<input type="submit " class="btn btn-success mt-auto" disabled name="button" value="Сохранить" >
				</div>

			</form>
			<button class="users__btn-edit btn btn-primary">Редактировать</button>
			<button class="users__btn-remove btn btn-danger" type="button" name="button">Удалить</button>
		</div>
		`
	}
	createElement(template) {
	  const newElement = document.createElement(`div`);
	  newElement.innerHTML = template;
	  return newElement.firstElementChild;
	}
	getElement() {
		this._element = this.createElement(this.getTemplate());
		return this._element;
	}
	render(){
		this.container.append(this.getElement());
	}
	unrender(){
		this._element = null;
	}
	removeDisabled() {
		this._element.querySelector('.users__btn-edit').onclick = function (evt) {
			evt.target.parentNode.querySelectorAll('input').forEach((item, i) => {
				if(item.name !== "id"){
					item.removeAttribute("disabled");
				}
			});
		}
	}
	removeElement() {}
}
