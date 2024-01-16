let display = document.getElementById('display');

function appendToDisplay(value) {
  display.textContent += value;
}

function clearDisplay() {
  display.textContent = '0';
}

function calculate() {
  try {
    display.textContent = eval(display.textContent);
  } catch (error) {
    display.textContent = 'Error';
  }
}
