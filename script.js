// script.js

let display = document.getElementById("display");

let currentNumber = "";
let previousNumber = "";
let operator = null;


function calculate() {
    let result;
    let a = parseFloat(previousNumber);
    let b = parseFloat(currentNumber);

    switch(operator) {
        case "+": result = a + b; break;
        case "-": result = a - b; break;
        case "*": result = a * b; break;
        case "/":
            if(b === 0) { alert("Cannot divide by zero"); return; }
            result = a / b;
            break;
        default: return;
    }

    display.value = result;
    currentNumber = result;
    previousNumber = "";
    operator = null;
}


document.querySelectorAll("[data-number]").forEach(button => {
    button.addEventListener("click", () => {
        currentNumber += button.dataset.number;
        display.value = currentNumber;
    });
});


document.querySelectorAll("[data-operator]").forEach(button => {
    button.addEventListener("click", () => {
        if(currentNumber === "") return;
        if(previousNumber !== "") calculate();
        operator = button.dataset.operator;
        previousNumber = currentNumber;
        currentNumber = "";
    });
});


document.querySelector("[data-equals]").addEventListener("click", () => {
    if(currentNumber === "" || previousNumber === "" || !operator) return;
    calculate();
});


document.querySelector("[data-clear]").addEventListener("click", () => {
    currentNumber = "";
    previousNumber = "";
    operator = null;
    display.value = "";
});
