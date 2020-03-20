function loadMenuPage() {
  let content = document.getElementById("content");

  (function addMenu() {
    let list = document.createElement("ul");
    list.id = "menuItems"
    
    let menu = [
      "Menu Item 1",
      "Menu Item 2"
    ];
    for (let i = 0; i < menu.length; i++) {
      let listItem = document.createElement("li");
      listItem.innerHTML = menu[i];
      list.appendChild(listItem);
    }
    content.appendChild(list)
  })();
}

export default loadMenuPage;
