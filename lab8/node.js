function performAddition() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const result = num1 + num2;
    document.getElementById('result').innerText = `Result: ${result}`;
}

function performSubtraction() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const result = num1 - num2;
    document.getElementById('result').innerText = `Result: ${result}`;
}

function performMultiplication() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const result = num1 * num2;
    document.getElementById('result').innerText = `Result: ${result}`;
}

function performDivision() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    if (num2 === 0) {
        document.getElementById('result').innerText = 'Error: Division by zero is not allowed';
    } else {
        const result = num1 / num2;
        document.getElementById('result').innerText = `Result: ${result}`;
    }
}