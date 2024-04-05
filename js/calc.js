let a = "";
let b = "";
let operation = "";
let result = false;

const digit = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
const action = ["+", "-", "x", "/", "+/-", "%", "="];
const out = document.querySelector(".calc__out");

function ClearAll() {
  a = "";
  b = "";
  operation = "";
  result = false;
  out.textContent = 0;
}

const deleteButton = document.querySelector(".calc_delete");
deleteButton.addEventListener("click", ClearAll);
