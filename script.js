let displayValue = '0';  // Initial display value

// Function to update the display
function updateDisplay(value) {
  const display = document.getElementById('display');
  display.innerText = value;
}

// Function to append value to display
function appendToDisplay(value) {
  if (displayValue === '0') {
    displayValue = value;
  } else {
    displayValue += value;
  }
  updateDisplay(displayValue);
}

// Function to clear the display
function clearDisplay() {
  displayValue = '0';
  updateDisplay(displayValue);
}

// Function to calculate the result
function calculateResult() {
  try {
    displayValue = eval(displayValue).toString();  // Evaluates the expression
    updateDisplay(displayValue);
  } catch (error) {
    displayValue = 'Error';
    updateDisplay(displayValue);
  }
}
