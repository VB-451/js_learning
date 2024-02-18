const table = document.querySelector(".table");
let isBlack = false;
for (let i = 1; i <= 64; i++){
    let newDiv = document.createElement("div");
    if (isBlack){
        newDiv.style.background = "black";
    }
    if(!(i % 8 === 0)){
        isBlack = !(isBlack)
    }
    table.appendChild(newDiv)
}
