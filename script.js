// Calculator Functions

const add = function(a, b) {
	return a + b;
}

const subtract = function(a, b) {
	
	return a - b;
}


const multiply = function(a, b) {
    /*let product = 0;
    let int1 = parseInt(a);
    let int2 = parseInt(b);
    product = int1 * int2;
    console.log(product);

    return product;*/

    return a * b;
}

const divide = function(a, b) {

    return a / b;
}
// Runs the function
const operate = function(operator, a, b) {
    
    if (operator.toLowerCase() == "add") {
        add(a, b);

    } else if (operator.toLowerCase() == "subtract") {
        subtract(a, b);

    } else if (operator.toLowerCase() == "multiply") {
        multiply(a, b);

    } else if (operator.toLowerCase() == "divide") {
        divide(a, b);

    } else {
        return "what the hell is that man";
    }


}