"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var UserController = /*#__PURE__*/function () {
  function UserController(data) {
    _classCallCheck(this, UserController);

    this.data = data;
    this.init(this.data);
    this.addUser();
  }

  _createClass(UserController, [{
    key: "init",
    value: function init(data) {
      var userTemplate = document.querySelector('.users__list');
      userTemplate.innerHTML = "";

      for (var i = 0; i < data.length; i++) {
        var user = new UserTemplate(data[i], userTemplate, i);
        this.removeUser(user, data);
        user.removeElement(user);
      }
    }
  }, {
    key: "removeUser",
    value: function removeUser(user, data) {
      var _this = this;

      var userTemplate = document.querySelector('.users__list');
      var newData = data;

      user.removeElement = function (el) {
        el._element.querySelector('.users__btn-remove').onclick = function (evt) {
          newData = newData.filter(function (item, i) {
            return i != evt.target.parentNode.id;
          });
          user.unrender();

          for (var i = 0; i <= newData.length; i++) {
            _this.init(newData);
          }
        };
      };
    }
  }, {
    key: "addUser",
    value: function addUser() {
      var btnAdd = document.querySelector('.users__btn-add');
      var addContainer = document.querySelector('.users__add');
      var countId = this.data[this.data.length - 1].id;

      btnAdd.onclick = function () {
        countId++;
        var user = new UserTemplateAdd(countId, addContainer);
      };
    }
  }, {
    key: "editUser",
    value: function editUser() {// 	const user = new UserTemplate(this.data[i]);
      // 	user.getElement()
      // 	user.removeDisabled();
      // let editBtn = document.querySelectorAll('.users__btn-edit');
      // for(let i = 0; i < editBtn.length; i++){
      // 		editBtn[i].addEventListener("click", () => {
      // 		clearContainer();
      // 		drawUser(this.data);
      // 		this.removeUser();
      // 	})
    }
  }]);

  return UserController;
}();