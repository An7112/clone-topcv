document.addEventListener("DOMContentLoaded", function() {
    var items = document.querySelectorAll(".header__item");
  
    items.forEach(function(item) {
      item.addEventListener("mouseover", function() {
        var listId = this.getAttribute("data-list");
        var list = document.getElementById(listId);
        list.classList.add("active");
      });
  
      item.addEventListener("mouseout", function() {
        var listId = this.getAttribute("data-list");
        var list = document.getElementById(listId);
        list.classList.remove("active");
      });
    });
  });
  