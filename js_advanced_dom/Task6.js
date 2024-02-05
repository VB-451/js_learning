const table = document.querySelector(".tableBody");
let currentRaw = table.firstElementChild;
let currentColor = -1;
for (let i = 0; i < 8; i++){
    currentColor *= -1;
    let currentCell = currentRaw.firstElementChild;
    for (let j = 0; j < 8; j++){
        if (currentColor === 1){
            currentCell.style.background = "white";
        } else {
            currentCell.style.background = "black";
        }
        currentColor *= -1;
        currentCell = currentCell.nextElementSibling;
    }
    currentRaw = currentRaw.nextElementSibling;
}