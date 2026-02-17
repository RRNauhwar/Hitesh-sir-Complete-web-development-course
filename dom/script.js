let groceryItems = [
  "Rice",
  "Wheat Flour",
  "Eggs",
  "Butter",
  "Cheese",
  "Sugar",
  "Salt",
  "Cooking Oil",
  "Onions",
  "Potatoes",
  "Tomatoes",
  "Apples",
  "Bananas",
  "Tea",
  "Coffee",
  "Biscuits",
  "Soap",
  "Toothpaste",
];
// example 1
document
  .getElementById("changeTextButton")
  .addEventListener("click", function () {
    let paragraph = document.getElementById("myParagraph");
    paragraph.textContent = "the paragraph is changed";
  });
// example 2
document
  .getElementById("highlightFirstCity")
  .addEventListener("click", function () {
    let citiesList = document.getElementById("citiesList");
    citiesList.firstElementChild.classList.add("highlight");
  });
// example 3
document.getElementById("changeOrder").addEventListener("click", function () {
  let text = document.getElementById("coffeeOrder");
  text.textContent = "Espresso";
});
// example 4
document.getElementById("addNewItem").addEventListener("click", function () {
  if (groceryItems.length === 0) {
    alert("No items left!");
    return;
  }
  let index = Math.floor(Math.random() * groceryItems.length);
  let selectedItem = groceryItems.splice(index, 1)[0];
  let li = document.createElement("li");
  li.innerText = selectedItem;
  let ul = document.getElementById("shoppingList");
  ul.appendChild(li);
});
// example 5
document
  .getElementById("removeLastTask")
  .addEventListener("click", function () {
    let ul = document.getElementById("taskList");
    let lastItem = ul.lastElementChild;
    if (lastItem) {
      ul.removeChild(lastItem);
    } else {
      alert("No task left");
    }
  });
// example 6
document.getElementById("clickMeButton").addEventListener("click", function () {
  alert("button clicked");
});
// example 7
document.getElementById("teaList").addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("highlight");
  }
});
// example 8
document
  .getElementById("feedbackForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    let text = document.getElementById("feedbackInput").value;
    let display = document.getElementById("feedbackDisplay");
    display.textContent = text;
    display.style.color = "red";
  });
// example 9
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("domStatus").textContent = "DOM completely loaded";
});
// example 10

document
  .getElementById("toggleHighlight")
  .addEventListener("click", function () {
    let text = document.getElementById("descriptionText");
    text.classList.toggle("highlight");
  });
