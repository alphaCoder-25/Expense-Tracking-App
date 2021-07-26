const element = document.querySelector("#btnCounter");
const input = document.querySelector("#inputElement");

let counter = 0;

function counterIncrememnt(){
   counter = counter + 1;
   console.log(counter) 
}

element.addEventListener("click", counterIncrememnt, false)