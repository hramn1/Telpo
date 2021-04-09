"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var UserController = /*#__PURE__*/function () {
  function UserController(data) {
    _classCallCheck(this, UserController);

    this.data = data;
    this.init();
  }

  _createClass(UserController, [{
    key: "init",
    value: function init() {
      var _this = this;

      var editBtn = document.querySelectorAll('.users__btn-edit');
      var removeBtn = document.querySelectorAll('.users__btn-remove');

      var _loop = function _loop(i) {
        removeBtn[i].addEventListener("click", function () {
          _this.data.splice(i, 1);

          clearContainer(); // console.log(this.data)

          drawUser(_this.data);
        });
      };

      for (var i = 0; i < removeBtn.length; i++) {
        _loop(i);
      }
    }
  }]);

  return UserController;
}();