const continueBtn = document.getElementById('continueBtn');
const calculateBtn = document.getElementById('calculateBtn');
const returnToHomeBtn = document.getElementById('backToHomeBtn');
const returnToCalculatorBtn = document.getElementById('returnToCalculatorBtn');
const homeBtn = document.getElementById('homeBtn');
const calculatorBox = document.getElementById('calculatorBox');
const resultBox = document.getElementById('resultBox');
const card = document.getElementById('card');
const result = document.getElementById('result');
const userNameDisplay = document.getElementById('userNameDisplay');

// Initially, display the name card only
document.addEventListener('DOMContentLoaded', () => {
    card.style.display = 'block';
    calculatorBox.style.display = 'none';
    resultBox.style.display = 'none';
});

// Show the calculator box after clicking "Continue"
continueBtn.addEventListener('click', () => {
    const name = document.getElementById('name').value;
    
    if (name) {
        card.style.display = 'none';
        calculatorBox.style.display = 'block';
        resultBox.style.display = 'none';
        userNameDisplay.textContent = `Hello, ${name}! please enter your obtained marks.`;
        userNameDisplay.style.animation = 'slideInFromLeft 1s ease-in-out';
    } else {
        alert('Please enter your name.');
    }
});

// Calculate percentage and show the result box
calculateBtn.addEventListener('click', () => {
    const hindi = parseInt(document.getElementById('hindi').value) || 0;
    const maths = parseInt(document.getElementById('maths').value) || 0;
    const english = parseInt(document.getElementById('english').value) || 0;
    const ss = parseInt(document.getElementById('ss').value) || 0;
    const science = parseInt(document.getElementById('science').value) || 0;
    const totalOut = parseInt(document.getElementById('total').value) || 100;

    const totalMarks = hindi + maths + english + ss + science;
    const percentage = (totalMarks / totalOut) * 100;

    result.textContent = `You got: ${percentage.toFixed(2)}%`;
    calculatorBox.style.display = 'none'; // Hide the calculator box
    resultBox.style.display = 'block'; // Show the result box
    resultBox.style.animation = 'fadeIn 1s ease-in-out';
});

// Return to the home card
returnToHomeBtn.addEventListener('click', () => {
    card.style.display = 'block';
    calculatorBox.style.display = 'none';
    resultBox.style.display = 'none';
});

// Return to the calculator box
returnToCalculatorBtn.addEventListener('click', () => {
    card.style.display = 'none';
    calculatorBox.style.display = 'block';
    resultBox.style.display = 'none';
});

// Home button returns to the initial card
homeBtn.addEventListener('click', () => {
    card.style.display = 'block';
    calculatorBox.style.display = 'none';
    resultBox.style.display = 'none';
});
