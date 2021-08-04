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
const someText = `Total: ${totalExpense}`
headingEl.textContent = someText;

 const allExpensesHTML = allExpenses.map(expense => {
     return `<li class="list-group-item d-flex justify-content-between">
                <div class="d-flex flex-column">
                    ${expense.desc}
                    <small class="text-muted">March 11,2019</small>
                </div>
                <div>
                    <span class="px-5">
                    ${expense.amount}
                    </span>
                    <button type="button" class="btn btn-outline-danger btn-sm">
                        <i class="fas fa-trash-alt"></i>
                    </button>
                </div>
            </li>
            `;
});

const joinedAllExpenseHTML = allExpensesHTML.join(" ");

console.log(joinedAllExpenseHTML);

expenseTableEl.innerHTML = joinedAllExpenseHTML;
}

element.addEventListener("click", addExpenseToTotal, false)