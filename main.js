const element = document.querySelector("#btnAddExpense");
const inputElement = document.querySelector("#inputAmount");

let totalExpense = 0;

function addExpenseToTotal() {
    const textAmount = inputElement.value;
    console.log({ textAmount });

const expense = parseInt(textAmount, 10)
console.log({ expense });

 totalExpense = totalExpense + expense;
 console.log(totalExpense);

}

element.addEventListener("click",addExpenseToTotal, false)