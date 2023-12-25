function add() {
    var number1 = parseFloat(document.getElementById("number1").value);
    var number2 = parseFloat(document.getElementById("number2").value);

    if (!isNaN(number1) && !isNaN(number2)) {
        var result = number1 + number2;
        document.getElementById("result").innerText = "Result: " + result;
    } else {
        document.getElementById("result").innerText = "Enter valid numbers.";
    }
}

function subtract() {
    var number1 = parseFloat(document.getElementById("number1").value);
    var number2 = parseFloat(document.getElementById("number2").value);

    if (!isNaN(number1) && !isNaN(number2)) {
        var result = number1 - number2;
        document.getElementById("result").innerText = "Result: " + result;
    } else {
        document.getElementById("result").innerText = "Enter valid numbers.";
    }
}

function multiply() {
    var number1 = parseFloat(document.getElementById("number1").value);
    var number2 = parseFloat(document.getElementById("number2").value);

    if (!isNaN(number1) && !isNaN(number2)) {
        var result = number1 * number2;
        document.getElementById("result").innerText = "Result: " + result;
    } else {
        document.getElementById("result").innerText = "Enter valid numbers.";
    }
}

function divide() {
    var number1 = parseFloat(document.getElementById("number1").value);
    var number2 = parseFloat(document.getElementById("number2").value);

    if (!isNaN(number1) && !isNaN(number2) && number2 !== 0) {
        var result = number1 / number2;
        document.getElementById("result").innerText = "Result: " + result;
    } else {
        document.getElementById("result").innerText = "Enter valid numbers and make sure the divisor is not zero.";
    }
}
