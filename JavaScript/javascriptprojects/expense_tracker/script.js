let expenses = [];
const form = document.getElementById("expense-form");
const nameInput = document.getElementById("expense-name");
const amountInput = document.getElementById("expense-amount");
const list = document.getElementById("expense-list");
const totalAmount = document.getElementById("total-amount");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let expense = {
    id: Date.now(),
    name: nameInput.value,
    amount: Number(amountInput.value),
  };
  expenses.push(expense);
  nameInput.value = "";
  amountInput.value = "";
  showExpenses();
});
function showExpenses() {
  list.innerHTML = "";
  expenses.forEach(function (exp) {
    let li = document.createElement("li");
    li.innerHTML = `
        ${exp.name} - $${exp.amount}
        <button onclick ="deleteExpense(${exp.id})">Delete</button>`;
    list.appendChild(li);
  });
  updateTotal();
}
function deleteExpense(id) {
  let index = expenses.findIndex(function (exp) {
    return exp.id === id;
  });
  if (index !== -1) {
    expenses.splice(index, 1);
  }
  showExpenses();
}
function updateTotal() {
  let total = 0;
  expenses.forEach(function (exp) {
    total += exp.amount;
  });
  totalAmount.innerText = total.toFixed(2);
}
