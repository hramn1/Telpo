class UserTemplateAdd {
	constructor(count, container){
		this.container = container;
		this.count = count;
		this._element = null;
		this.render();
	}
	getTemplate() {
		return `
		<div class="users__item border-bottom border-dark pb-4 mb-3" id=${this.count}>
			<form method="post" action="/"  class="row pt-3 pb-4 js-add-user">
				<div class="col">
				<label class="d-block  form-label mt-2 mb-2" for="">ID</label>
				<input class="d-block form-control" readonly  type="text"  name="id" value="${this.count}">
				<label class="d-block form-label  mt-2 mb-2" for="">ФИО</label>
				<input class="d-block form-control" type="text"  name="fio" >
			</div>

				<div class="col">
						<label class="d-block form-label mt-2 mb-2" for="">Браслет</label>
						<input class="d-block form-control" type="text"  name="braslet" >

				<label class="d-block form-label  mt-2 mb-2" for="">ID Системы</label>
				<input class="d-block form-control" type="text"  name="system" >
				</div>
				<div class="col">
				<label class="d-block form-label  mt-2 mb-2" for="">Доступ</label>
				<input class="d-block form-control" type="text"  name="access" >
				<label class="d-block form-label  mt-2 mb-2" for="wardrobe">Шкаф</label>
				<input class="d-block form-control" type="text"  name="wardrobe">
				</div>
					<div class="col d-flex flex-column ">
				<label class="d-block form-label  mt-2 mb-2" for="">Сообщение</label>
				<input class="d-block form-control" type="text"  name="msg" >
				<input type="submit" class="btn btn-success mt-auto"  name="button" value="Сохранить" >
				</div>
			</form>
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
	editUser(){
		let form = document.querySelector('.js-add-user');
		form.addEventListener('submit', (evt) => {
			evt.preventDefault();
			let formData = new FormData(form);
			let addObj = {
				"id": formData.get('id'),
				"fio": formData.get('fio'),
				"UID-Braslet": formData.get('braslet'),
				"id-system": formData.get('system'),
				"aceess-passage": formData.get('access'),
				"wardrobe": formData.get('wardrobe'),
				"message": formData.get('msg')
			}
		})
	}
}
