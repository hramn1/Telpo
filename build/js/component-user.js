class UserTemplate {
	constructor(user){
		this.id = user.id;
		this.fio = user.fio;
		this.UIDBraslet = user["UID-Braslet"];
		this.idSystem = user["id-system"];
		this.aceessPassage = user["aceess-passage"];
		this.wardrobe = user["wardrobe"];
		this.message = user.message;
	}
	getTemplate() {
		return `
		<div class="users__item">
			<form>
				<label for="">ID</label>
				<input type="text" disabled name="id" value="${this.id}">
				<label for="">ФИО</label>
				<input type="text" disabled name="" value="${this.fio}">
				<label for="">Браслет</label>
				<input type="text" disabled name="" value="${this.UIDBraslet}">
				<label for="">ID Системы</label>
				<input type="text" disabled name="" value="${this.idSystem}">
				<label for="">Доступ</label>
				<input type="text" disabled name="" value="${this.aceessPassage}">
				<label for="">Шкаф</label>
				<input type="text" disabled name="" value="${this.wardrobe}">
				<label for="">Сообщение</label>
				<input type="text" disabled name="" value="${this.message}">
				<button type="submit" disabled name="button">Сохранить</button>
			</form>
			<button>Редактировать</button>
			<button type="button" name="button">Удалить</button>
		</div>
		`
	}
}
