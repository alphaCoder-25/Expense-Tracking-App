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

 const allExpensesHTML = allExpenses.map(expense => {
    return `<div> ${expense.amount} :: ${expense.desc} </div>`
});

const joinedAllExpenseHTML = allExpensesHTML.join(" ");

// console.log(joinedAllExpenseHTML);

expenseTableEl.innerHTML = joinedAllExpenseHTML;
}

element.addEventListener("click", addExpenseToTotal, false)