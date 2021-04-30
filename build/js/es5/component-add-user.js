"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var UserTemplateAdd = /*#__PURE__*/function () {
  function UserTemplateAdd(count, container) {
    _classCallCheck(this, UserTemplateAdd);

    this.container = container;
    this.count = count;
    this._element = null;
    this.render();
  }

  _createClass(UserTemplateAdd, [{
    key: "getTemplate",
    value: function getTemplate() {
      return "\n\t\t<div class=\"users__item\">\n\t\t\t<form>\n\t\t\t\t<label for=\"\">ID</label>\n\t\t\t\t<input type=\"text\" disabled name=\"id\" value=".concat(this.count, " >\n\t\t\t\t<label for=\"\">\u0424\u0418\u041E</label>\n\t\t\t\t<input type=\"text\"  name=\"\" >\n\t\t\t\t<label for=\"\">\u0411\u0440\u0430\u0441\u043B\u0435\u0442</label>\n\t\t\t\t<input type=\"text\"  name=\"\" >\n\t\t\t\t<label for=\"\">ID \u0421\u0438\u0441\u0442\u0435\u043C\u044B</label>\n\t\t\t\t<input type=\"text\"  name=\"\" >\n\t\t\t\t<label for=\"\">\u0414\u043E\u0441\u0442\u0443\u043F</label>\n\t\t\t\t<input type=\"text\"  name=\"\" >\n\t\t\t\t<label for=\"\">\u0428\u043A\u0430\u0444</label>\n\t\t\t\t<input type=\"text\"  name=\"\" >\n\t\t\t\t<label for=\"\">\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435</label>\n\t\t\t\t<input type=\"text\"  name=\"\" >\n\t\t\t\t<input type=\"submit\"  name=\"button\" value=\"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C\" >\n\t\t\t</form>\n\t\t</div>\n\t\t");
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
  }]);

  return UserTemplateAdd;
}();