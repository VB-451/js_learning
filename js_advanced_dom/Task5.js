const inputField = document.getElementById("inputNumber");
const minusButton = document.getElementById("minusButton");
const plusButton = document.getElementById("plusButton");
minusButton.disabled = true;

const decreaseValue = () =>{
    inputField.value = Number(inputField.value) - 1;
    if (inputField.value === "0") {
        minusButton.disabled = true;    
    }
    plusButton.disabled = false;
}

const increaseValue = () =>{
    inputField.value = Number(inputField.value) + 1;
    if (inputField.value === "9") {
        plusButton.disabled = true;    
    }
    minusButton.disabled = false;
}

minusButton.onclick = decreaseValue;
plusButton.onclick = increaseValue;
