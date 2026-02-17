// simple functions
function makeTea(typeOfTea) {
  return `Making ${typeOfTea}`;
}
let teaOrder = makeTea("masala chai");
console.log(teaOrder);

function orderTea(teaType) {
  return function confirmOrder() {
    return `Order confirmed for ${teaType}`;
  };
}
console.log(orderTea("masala chai")());
// Arrow function
const calculateTotal = (price, quantity) => price * quantity;
totalCost = calculateTotal(4, 10);
console.log(totalCost);
// function showThis() {
//   console.log(this);
// }
// showThis();

// higher order functions
function fun() {
  console.log("Hello, World!");
}
function fun2(action) {
  action();
  action();
}
fun2(fun);
const n = [1, 2, 3, 4, 5];
const square = n.map((num) => num * num);
console.log(square);
const even = n.filter((num) => num % 2 == 0);
console.log(even);

function makeTea(typeOfTea) {
  return `maketea: ${typeOfTea}`;
}
function processTeaOrder(action) {
  return action("earl grey");
}
let order = processTeaOrder(makeTea);
console.log(order);

function createTeaMaker() {
  return (teaType) => `Making ${teaType}`;
}
let teaMaker = createTeaMaker()("green tea");
console.log(teaMaker);
