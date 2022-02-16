"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var UserTemplate = /*#__PURE__*/function () {
  function UserTemplate(user, container, count) {
    _classCallCheck(this, UserTemplate);

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

  _createClass(UserTemplate, [{
    key: "getTemplate",
    value: function getTemplate() {
      return "\n\t\t<div class=\"users__item border-bottom border-dark pb-4 mb-3\" id=".concat(this.count, ">\n\t\t\t<form class=\"row pt-3 pb-4\">\n\t\t\t\t<div class=\"col\">\n\t\t\t\t<label class=\"d-block  form-label mt-2 mb-2\" for=\"\">ID</label>\n\t\t\t\t<input class=\"d-block form-control\" type=\"text\" disabled name=\"id\" value=\"").concat(this.id, "\">\n\t\t\t\t<label class=\"d-block form-label  mt-2 mb-2\" for=\"\">\u0424\u0418\u041E</label>\n\t\t\t\t<input class=\"d-block form-control\" type=\"text\" disabled name=\"\" value=\"").concat(this.fio, "\">\n\t\t\t</div>\n\n\t\t\t\t<div class=\"col\">\n\t\t\t\t\t\t<label class=\"d-block form-label mt-2 mb-2\" for=\"\">\u0411\u0440\u0430\u0441\u043B\u0435\u0442</label>\n\t\t\t\t\t\t<input class=\"d-block form-control\" type=\"text\" disabled name=\"\" value=\"").concat(this.UIDBraslet, "\">\n\n\t\t\t\t<label class=\"d-block form-label  mt-2 mb-2\" for=\"\">ID \u0421\u0438\u0441\u0442\u0435\u043C\u044B</label>\n\t\t\t\t<input class=\"d-block form-control\" type=\"text\" disabled name=\"\" value=\"").concat(this.idSystem, "\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col\">\n\t\t\t\t<label class=\"d-block form-label  mt-2 mb-2\" for=\"\">\u0414\u043E\u0441\u0442\u0443\u043F</label>\n\t\t\t\t<input class=\"d-block form-control\" type=\"text\" disabled name=\"\" value=\"").concat(this.aceessPassage, "\">\n\t\t\t\t<label class=\"d-block form-label  mt-2 mb-2\" for=\"\">\u0428\u043A\u0430\u0444</label>\n\t\t\t\t<input class=\"d-block form-control\" type=\"text\" disabled name=\"\" value=\"").concat(this.wardrobe, "\">\n\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col d-flex flex-column \">\n\t\t\t\t<label class=\"d-block form-label  mt-2 mb-2\" for=\"\">\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435</label>\n\t\t\t\t<input class=\"d-block form-control\" type=\"text\" disabled name=\"\" value=\"").concat(this.message, "\">\n\t\t\t\t<input type=\"submit \" class=\"btn btn-success mt-auto\" disabled name=\"button\" value=\"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C\" >\n\t\t\t\t</div>\n\n\t\t\t</form>\n\t\t\t<button class=\"users__btn-edit btn btn-primary\">\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C</button>\n\t\t\t<button class=\"users__btn-remove btn btn-danger\" type=\"button\" name=\"button\">\u0423\u0434\u0430\u043B\u0438\u0442\u044C</button>\n\t\t</div>\n\t\t");
    }
  }, {
    key: "createElement",
    value: function createElement(template) {
      var newElement = document.createElement("div");
      newElement.innerHTML = template;
      return newElement.firstElementChild;
    }
  }, {
    key: "getElement",
    value: function getElement() {
      this._element = this.createElement(this.getTemplate());
      return this._element;
    }
  }, {
    key: "render",
    value: function render() {
      this.container.append(this.getElement());
    }
  }, {
    key: "unrender",
    value: function unrender() {
      this._element = null;
    }
  }, {
    key: "removeDisabled",
    value: function removeDisabled() {
      this._element.querySelector('.users__btn-edit').onclick = function (evt) {
        evt.target.parentNode.querySelectorAll('input').forEach(function (item, i) {
          if (item.name !== "id") {
            item.removeAttribute("disabled");
          }
        });
      };
    }
  }, {
    key: "removeElement",
    value: function removeElement() {}
  }]);

  return UserTemplate;
}();