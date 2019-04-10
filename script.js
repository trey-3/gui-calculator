// Calculator Functions

const add = function (a, b) {
    return a + b;
}

const subtract = function (a, b) {

    return a - b;
}


const multiply = function (a, b) {
    /*let product = 0;
    let int1 = parseInt(a);
    let int2 = parseInt(b);
    product = int1 * int2;
    console.log(product);

    return product;*/

    return a * b;
}

const divide = function (a, b) {

    return a / b;
}
// Runs the function
const operate = function (operator, a, b) {

    if (operator.toLowerCase() == "add") {
        console.log(add(a, b));

    } else if (operator.toLowerCase() == "subtract") {
        console.log(subtract(a, b));

    } else if (operator.toLowerCase() == "multiply") {
        console.log(multiply(a, b));

    } else if (operator.toLowerCase() == "divide") {
        console.log(divide(a, b));

    } else {
        return "what the hell is that man";
    }


}

// Number variables (And UpdateButtons)

/* ============================================== */

let counter = 0;



let zero = document.createElement(`zero-${counter}`);
zero.textContent = "0";

let one = document.createElement(`one-${counter}`);
one.textContent = "1";

let two = document.createElement(`two-${counter}`);
two.textContent = "2";

let three = document.createElement(`three-${counter}`);
three.textContent = "3";

let four = document.createElement(`four-${counter}`);
four.textContent = "4";

let five = document.createElement(`five-${counter}`);
five.textContent = "5";

let six = document.createElement(`six-${counter}`);
six.textContent = "6";

let seven = document.createElement(`seven-${counter}`);
seven.textContent = "7";

let eight = document.createElement(`eight-${counter}`);
eight.textContent = "8";

let nine = document.createElement(`nine-${counter}`);
nine.textContent = "9";

let addSign = document.createElement(`addSign-${counter}`);
addSign.textContent = "+";

let subtractSign = document.createElement(`subtractSign-${counter}`);
subtractSign.textContent = "-";

let multiplySign = document.createElement(`multiplySign-${counter}`);
multiplySign.textContent = "×";

let divideSign = document.createElement(`divideSign-${counter}`);
divideSign.textContent = "÷";

let decimal = document.createElement(`decimal-${counter}`);
decimal.textContent = ".";

let equalsSign = document.createElement(`equalsSign-${counter}`);
equalsSign.textContent = "=";

// Allows user to add more than one of each number. Called on EventListener.
const updateButtons = function () {
    zero = document.createElement(`zero-${counter}`);
    zero.textContent = "0";

    one = document.createElement(`one-${counter}`);
    one.textContent = "1";

    two = document.createElement(`two-${counter}`);
    two.textContent = "2";

    three = document.createElement(`three-${counter}`);
    three.textContent = "3";

    four = document.createElement(`four-${counter}`);
    four.textContent = "4";

    five = document.createElement(`five-${counter}`);
    five.textContent = "5";

    six = document.createElement(`six-${counter}`);
    six.textContent = "6";

    seven = document.createElement(`seven-${counter}`);
    seven.textContent = "7";

    eight = document.createElement(`eight-${counter}`);
    eight.textContent = "8";

    nine = document.createElement(`nine-${counter}`);
    nine.textContent = "9";

    addSign = document.createElement(`addSign-${counter}`);
    addSign.textContent = "+";

    subtractSign = document.createElement(`subtractSign-${counter}`);
    subtractSign.textContent = "-";

    multiplySign = document.createElement(`multiplySign-${counter}`);
    multiplySign.textContent = "×";

    divideSign = document.createElement(`divideSign-${counter}`);
    divideSign.textContent = "÷";

    decimal = document.createElement(`decimal-${counter}`);
    decimal.textContent = ".";

    equalsSign = document.createElement(`equalsSign-${counter}`);
    equalsSign.textContent = "=";
}

/* ============================================== */

// Display

const display = document.querySelector('#display');

// Buttons


const btn7 = document.querySelector('#button-7');
btn7.addEventListener('click', () => {
    display.appendChild(seven);
    counter += 1;
    console.log(counter);
    updateButtons();

});


const btn8 = document.querySelector('#button-8');
btn8.addEventListener('click', () => {
    display.appendChild(eight);
    counter += 1;
    console.log(counter);
    updateButtons();
});


const btn9 = document.querySelector('#button-9');
btn9.addEventListener('click', () => {
    display.appendChild(nine);
    counter += 1;
    console.log(counter);
    updateButtons();
});


const btnDivide = document.querySelector('#button-divide');
btnDivide.addEventListener('click', () => {
    if (/\÷/.test(display.lastElementChild.firstChild.nodeValue) == false) {
        display.appendChild(divideSign);
        counter += 1;
        console.log(counter);
        updateButtons();
    } else {
        console.log("what");
    }
});


const btn4 = document.querySelector('#button-4');
btn4.addEventListener('click', () => {
    display.appendChild(four);
    counter += 1;
    console.log(counter);
    updateButtons();
});


const btn5 = document.querySelector('#button-5');
btn5.addEventListener('click', () => {
    display.appendChild(five);
    counter += 1;
    console.log(counter);
    updateButtons();
});


const btn6 = document.querySelector('#button-6');
btn6.addEventListener('click', () => {
    display.appendChild(six);
    counter += 1;
    console.log(counter);
    updateButtons();
});

const btnMultiply = document.querySelector('#button-multiply');
btnMultiply.addEventListener('click', () => {
    if (/\×/.test(display.lastElementChild.firstChild.nodeValue) == false) {
        display.appendChild(multiplySign);
        counter += 1;
        console.log(counter);
        updateButtons();
    } else {
        console.log("what");
    }
});


const btn1 = document.querySelector('#button-1');
btn1.addEventListener('click', () => {
    display.appendChild(one);
    counter += 1;
    console.log(counter);
    updateButtons();
});


const btn2 = document.querySelector('#button-2');
btn2.addEventListener('click', () => {
    display.appendChild(two);
    counter += 1;
    console.log(counter);
    updateButtons();
});

const btn3 = document.querySelector('#button-3');
btn3.addEventListener('click', () => {
    display.appendChild(three);
    counter += 1;
    console.log(counter);
    updateButtons();
});


const btnSubtract = document.querySelector('#button-subtract');
btnSubtract.addEventListener('click', () => {
    if (/\-/.test(display.lastElementChild.firstChild.nodeValue) == false) {
        display.appendChild(subtractSign);
        counter += 1;
        console.log(counter);
        updateButtons();
    } else {
        console.log("what");
    }
});


const btn0 = document.querySelector('#button-0');
btn0.addEventListener('click', () => {
    display.appendChild(zero);
    counter += 1;
    console.log(counter);
    updateButtons();
});

const btnDecimal = document.querySelector('#button-decimal');
btnDecimal.addEventListener('click', () => {
    if (/\./.test(display.lastElementChild.firstChild.nodeValue) == false) {
        display.appendChild(decimal);
        counter += 1;
        console.log(counter);
        updateButtons();
    } else {
        console.log("what");
    }
});


const btnAdd = document.querySelector('#button-add');
btnAdd.addEventListener('click', () => {
    if (/\+/.test(display.lastElementChild.firstChild.nodeValue) == false) {
        display.appendChild(addSign);
        counter += 1;
        console.log(counter);
        updateButtons();
    } else {
        console.log("what");
    }

});


const btnEquals = document.querySelector('#button-equals');
btnEquals.addEventListener('click', () => {
    display.appendChild(equalsSign);
    counter += 1;
    console.log(counter);
    updateButtons();
});

const btnClearEntry = document.querySelector('#button-clearentry');
btnClearEntry.addEventListener('click', () => {
    display.removeChild(display.lastChild);
    counter -= 1;
    updateButtons();

});

const btnClearAll = document.querySelector('#button-clearall');
btnClearAll.addEventListener('click', () => {
    display.textContent = "";
    counter = 0;
    updateButtons();
});