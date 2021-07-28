const element = document.querySelector("#btnAddExpense");
const inputElement = document.querySelector("#inputAmount");
const headingEl = document.querySelector("#headingTotal");
const inputDescEl = document.querySelector("#inputDesc")

let totalExpense = 0;

headingEl.textContent = totalExpense;

const allExpenses = [];

function addExpenseToTotal() {

const expenseItem = {};

const textAmount = inputElement.value;
const textDesc = inputDescEl.value;

const expense = parseInt(textAmount, 10);

expenseItem.amount = expense;
expenseItem.desc = textDesc;

allExpenses.push(expenseItem);

console.clear();
console.table(allExpenses);

totalExpense = totalExpense + expense;
headingEl.textContent = totalExpense;
}

element.addEventListener("click", addExpenseToTotal, false)