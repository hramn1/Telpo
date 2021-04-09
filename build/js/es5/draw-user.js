'use strict';

(function () {
  var userTemplate = document.querySelector('.users__list');

  var drawUser = function drawUser(data) {
    for (var i = 0; i < data.length; i++) {
      var user = new UserTemplate(data[i]);
      var ff = document.createElement("div");
      ff.innerHTML = user.getTemplate();
      userTemplate.prepend(ff);
    }
  };

  var clearContainer = function clearContainer() {
    userTemplate.innerHTML = "";
  };

  window.drawUser = drawUser;
  window.clearContainer = clearContainer;
})();