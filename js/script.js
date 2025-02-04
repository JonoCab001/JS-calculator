// Code for Calculator

const display = document.getElementById("display");

display.value = "0";    // Initialise display value to 0

function appendToDisplay(input) {
    // If the display shows 0, then replace it with the new input
    if (display.value == "0") {
        display.value = input;
    }
    else {
        display.value += input;
    }
}

function clearDisplay() {
    display.value = "0";    // Reset the display value to 0 when the user clears the display
}

function calculate() {
    try {
        display.value = eval(display.value);
    }
    catch(error) {
        display.value = "Error";
    }
}