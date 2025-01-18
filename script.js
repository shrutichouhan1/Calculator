function calculatePercentage() {
    var currentValue = clc.display.value;
    if (currentValue.includes('%')) {
        currentValue = currentValue.slice(0, -1);
    }
    if (currentValue) {
        var result = eval(currentValue) / 100;
        clc.display.value = result ;
    }
}

function deleteLastCharacter() {
    var currentValue = clc.display.value;
    clc.display.value = currentValue.slice(0, -1); // Remove the last character
}