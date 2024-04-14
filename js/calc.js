let a = "";
let b = "";
let operation = "";
let result = false;

const digit = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
const action = ["+", "-", "x", "/"];

const out = document.querySelector(".calc__out");

function ClearAll() {
  a = "";
  b = "";
  operation = "";
  result = false;
  out.textContent = 0;
}

function handleCalcPanelClick(e) {
  if (!e.target.classList.contains("calc__btn")) return;
  if (e.target.classList.contains("calc_delete")) return;

  out.textContent = "";

  const key = e.target.textContent;

  if (digit.includes(key)) {
    if (b === "" && operation === "") {
      a += key;
      console.log(a, b, operation);
      out.textContent = a;
    } else if (a !== "" && b !== "" && result) {
    }
    //
    else {
      b += key;
      out.textContent = b;
    }
    console.log(a, b, operation);
    return;
  }

  if (action.includes(key)) {
    operation = key;
    out.textContent = operation;
    console.log(a, b, operation);
    return;
  }

  if (key === "=") {
    switch (operation) {
      case "+":
        a = +a + +b;
        break;
      case "-":
        a = a - b;
        break;
      case "x":
        a = a * b;
        break;
      case "/":
        a = a / b;
        break;
    }
    result = true;
    out.textContent = a;
    console.log(a, b, operation);
  }
}

//
const deleteButton = document.querySelector(".calc_delete");
deleteButton.addEventListener("click", ClearAll);

const calcPanel = document.querySelector(".calc__panel");
calcPanel.addEventListener("click", (e) => handleCalcPanelClick(e));
