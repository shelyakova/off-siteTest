
var items = document.getElementById("items");
var itemNumbers = 1;

function createItem(number) {
  var div = document.createElement("div");
  div.className = "item-" + number;
  div.innerHTML = "<img src='./images/itemImage-" + number + ".png'>"
    + "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, "
    + "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    + " Ut enim ad minim veniam, quis nostrud exercitation ullamco "
    + "laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure "
    + "dolor in reprehenderit in voluptate velit esse cillum dolore eu "
    + "fugiat nulla pariatur. Excepteur sint occaecat cupidatat non "
    + "proident, sunt in culpa qui officia deserunt mollit anim id est"
    + " laborum.</p>"
    + "<span>more...</span>";
      items.appendChild(div);

}

while (itemNumbers <= 4) {
  createItem(itemNumbers);
  itemNumbers += 1;
  console.log(itemNumbers);
}
