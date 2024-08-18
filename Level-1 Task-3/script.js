function display(value) {
    document.getElementById('answer').value += value;
}

function allClear() {
    document.getElementById('answer').value = '';
}

function cls() {
    let currentValue = document.getElementById('answer').value;
    document.getElementById('answer').value = currentValue.slice(0, -1);
}

function ans() {
    try {
        let result = eval(document.getElementById('answer').value);
        document.getElementById('answer').value = result;
    } catch (e) {
        document.getElementById('answer').value = 'Error';
    }
}

function appendNumber(number) {
    display(number);
}

function setOperation(op) {
    display(op);
}

function calculate() {
    ans();
}
