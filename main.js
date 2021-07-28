const element = document.querySelector("#btnAddExpense");
const inputElement = document.querySelector("#inputAmount");
const headingEl = document.querySelector("#headingTotal");
const inputDescEl = document.querySelector("#inputDesc");
const expenseTableEl = document.querySelector("#expenseTable");

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

totalExpense = totalExpense + expense;

// const someText = "The Expense of this month is " + totalExpense;
const someText = `The Expense of this month is: ${totalExpense}`
headingEl.textContent = someText;

const data1 = allExpenses[0];
const data2 = allExpenses[1];

const data1Text = `${data1.amount} :: ${data1.desc}`;
const tableText = `<div>${data1Text}</div>`

expenseTableEl.innerHTML = tableText;

const data2Text = `${data2.amount} :: ${data2.desc}`;

const tableText1 = `
    <div>${data1Text}</div>
    <div>${data2Text}</div>
`  
console.clear();  
expenseTableEl.innerHTML = tableText1;
}

element.addEventListener("click", addExpenseToTotal, false)