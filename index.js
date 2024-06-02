function calculate(num1, num2) {
    function operation(num1, num2, callback) {
        return callback(num1, num2);
    }

    function add(a, b) {
        return a + b;
    }

    function multiply(a, b) {
        return a * b;
    }

    let sum = operation(num1, num2, add);
    console.log(`Sum: ${sum}`);

  let product = operation(num1, num2, multiply);
    console.log(`Product: ${product}`);
}

calculate(5, 3); 
calculate(10, 2); 
