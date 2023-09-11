let currentInput = '';
const inputtext = document.getElementById('inputtext');

function appendToDisplay(value) {
    currentInput += value;
    inputtext.value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    inputtext.value = '';
}

function Result() {
    try {
        currentInput = eval(currentInput).toString();
        inputtext.value = currentInput;
    }catch(error) {
        inputtext.value = 'Error';
    }
}