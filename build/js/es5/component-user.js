"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var UserTemplate = /*#__PURE__*/function () {
  function UserTemplate(user) {
    _classCallCheck(this, UserTemplate);

    this.id = user.id;
    this.fio = user.fio;
    this.UIDBraslet = user["UID-Braslet"];
    this.idSystem = user["id-system"];
    this.aceessPassage = user["aceess-passage"];
    this.wardrobe = user["wardrobe"];
    this.message = user.message;
  }

  _createClass(UserTemplate, [{
    key: "getTemplate",
    value: function getTemplate() {
      return "\n\t\t<div class=\"users__item\">\n\t\t\t<form>\n\t\t\t\t<label for=\"\">ID</label>\n\t\t\t\t<input type=\"text\" disabled name=\"id\" value=\"".concat(this.id, "\">\n\t\t\t\t<label for=\"\">\u0424\u0418\u041E</label>\n\t\t\t\t<input type=\"text\" disabled name=\"\" value=\"").concat(this.fio, "\">\n\t\t\t\t<label for=\"\">\u0411\u0440\u0430\u0441\u043B\u0435\u0442</label>\n\t\t\t\t<input type=\"text\" disabled name=\"\" value=\"").concat(this.UIDBraslet, "\">\n\t\t\t\t<label for=\"\">ID \u0421\u0438\u0441\u0442\u0435\u043C\u044B</label>\n\t\t\t\t<input type=\"text\" disabled name=\"\" value=\"").concat(this.idSystem, "\">\n\t\t\t\t<label for=\"\">\u0414\u043E\u0441\u0442\u0443\u043F</label>\n\t\t\t\t<input type=\"text\" disabled name=\"\" value=\"").concat(this.aceessPassage, "\">\n\t\t\t\t<label for=\"\">\u0428\u043A\u0430\u0444</label>\n\t\t\t\t<input type=\"text\" disabled name=\"\" value=\"").concat(this.wardrobe, "\">\n\t\t\t\t<label for=\"\">\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435</label>\n\t\t\t\t<input type=\"text\" disabled name=\"\" value=\"").concat(this.message, "\">\n\t\t\t\t<button type=\"submit\" name=\"button\">\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C</button>\n\t\t\t</form>\n\t\t\t<button>\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C</button>\n\t\t\t<button type=\"button\" name=\"button\">\u0423\u0434\u0430\u043B\u0438\u0442\u044C</button>\n\t\t</div>\n\t\t");
    }
  }]);

  return UserTemplate;
}();