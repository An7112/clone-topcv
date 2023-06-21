document.addEventListener("DOMContentLoaded", function () {
  var items = document.querySelectorAll(".header__item");
  var user = document.querySelector(".fullname")

  var elementArray = Array.from(items)
  elementArray.push(user)

  elementArray.forEach(function (item) {
    item.addEventListener("mouseover", function () {
      var listId = this.getAttribute("data-list");
      var list = document.getElementById(listId);
      list.classList.add("active");
      console.log('hover')
    });

    item.addEventListener("mouseout", function () {
      var listId = this.getAttribute("data-list");
      var list = document.getElementById(listId);
      list.classList.remove("active");
    });
  });
});
