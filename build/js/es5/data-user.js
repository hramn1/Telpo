'use strict';

(function () {
  var dataUser = [];
  var xhr = new XMLHttpRequest();
  xhr.responseType = 'json';
  xhr.open('GET', "data.json", true);
  xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
  xhr.send();

  xhr.onload = function () {
    dataUser = xhr.response;
    var userController = new UserController(dataUser);
  };
})();