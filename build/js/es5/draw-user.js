'use strict';

(function () {
  var userTemplate = document.querySelector('.users__list');

  var drawUser = function drawUser(data) {
    for (var i = 0; i < data.length; i++) {
      var user = new UserTemplate(data[i]);
      console.log(user);
      var ff = document.createElement("div"); // ff.className = "users__item";

      ff.innerHTML = user.getTemplate();
      userTemplate.prepend(ff);
    }
  };

  window.drawUser = drawUser;
})();