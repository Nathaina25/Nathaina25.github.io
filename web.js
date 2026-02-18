
// Simple Functions

function tickUp() {
    const counterElement = document.getElementById('counter');
    let currentVal = parseInt(counterElement.innerText);
    counterElement.innerText = currentVal + 1;
}

function tickDown() {
    const counterElement = document.getElementById('counter');
    let currentVal = parseInt(counterElement.innerText);
    counterElement.innerText = currentVal - 1;
}

//1pt: Simple For Loop

function runForLoop() {
    const counter = parseInt(document.getElementById('counter').innerText);
    const resultSpan = document.getElementById('forLoopResult');
    let output = "";

    for (let i = 0; i <= counter; i++) {
        output += i + " ";
    }
    resultSpan.innerText = output.trim();
}

//repettion with condition

function showOddNumbers() {
    const counter = parseInt(document.getElementById('counter').innerText);
    const resultSpan = document.getElementById('oddNumberResult');
    let output = "";

    for (let i = 1; i <= counter; i++) {
        if (i % 2 !== 0) {
            output += i + " ";
        }
    }
    resultSpan.innerText = output.trim();
}

// Arrays
function addMultiplesToArray() {
    const counter = parseInt(document.getElementById('counter').innerText);
    let multiples = [];


    for (let i = counter; i >= 5; i--) {
        if (i % 5 === 0) {
            multiples.push(i);
        }
    }
    
    console.log(multiples);
}

// Objects and Form Fields

function printCarObject() {
    
    let car = {
        type: document.getElementById('carType').value,
        mpg: document.getElementById('carMPG').value,
        color: document.getElementById('carColor').value
    };
    console.log(car);
}

function loadCar(carNum) {
    let selectedCar;
    

    if (carNum === 1) selectedCar = carObject1;
    else if (carNum === 2) selectedCar = carObject2;
    else if (carNum === 3) selectedCar = carObject3;

    if (selectedCar) {
        document.getElementById('carType').value = selectedCar.cType;
        document.getElementById('carMPG').value = selectedCar.cMPG;
        document.getElementById('carColor').value = selectedCar.cColor;
    }
}

//Changing Styles

function changeColor(colorNum) {
    const p = document.getElementById('styleParagraph');
    
    if (colorNum === 1) p.style.color = "red";
    else if (colorNum === 2) p.style.color = "green";
    else if (colorNum === 3) p.style.color = "blue";
}


