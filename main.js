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
expenseItem.moment = new Date();

allExpenses.push(expenseItem);

totalExpense = totalExpense + expense;

// const someText = "The Expense of this month is " + totalExpense;
const someText = `Total: ${totalExpense}`
headingEl.textContent = someText;

    renderList(allExpenses);
}

element.addEventListener("click", addExpenseToTotal, false);

function getDateString(momento){
    return momento.toLocaleDateString('en-US', { 
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

//Delete Items
function deleteItem(dateValue){
    //   const newArr = [];
    //   for(let i=0; i < allExpenses.length; i++) {
    //   if(allExpenses[i].moment.valueOf() !== dateValue){
    //      newArr.push(allExpenses[i]);
    //    }
    //   }

    //   const newArr = allExpenses.filter((expense) => {
    //   if (expense.moment.valueOf() !== dateValue){
    //       return expense;
    //   }
    //  });     
    
    const newArr = allExpenses.filter(expense => expense.moment.valueOf() !== dateValue)
    renderList(newArr);
 }

//  View Layer
function renderList(arrOfList) {
    const allExpensesHTML = arrOfList.map(expense => createListItem( expense ));
    const joinedAllExpenseHTML = allExpensesHTML.join(" ");
    expenseTableEl.innerHTML = joinedAllExpenseHTML;
}

function createListItem({ desc, amount, moment }){
    return `
            <li class="list-group-item d-flex justify-content-between">
                <div class="d-flex flex-column">
                    ${desc}
                    <small class="text-muted">${getDateString(moment)}</small>
                </div>
                <div>
                    <span class="px-5">
                    ${amount}
                    </span>
                <button type="button" class="btn btn-outline-danger btn-sm"
                    onClick = "deleteItem(${moment.valueOf()})">
                    <i class="fas fa-trash-alt"></i>
                </button>
                </div>
            </li>
           `;
    };