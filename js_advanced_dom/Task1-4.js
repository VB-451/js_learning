//Task 1

const RedBackground = () =>{
    document.body.style.background = "red";
}
document.addEventListener("DOMContentLoaded", RedBackground);

//Task 2

const GreenBackgroundTimeout = () =>{
    setTimeout(() =>{
        document.body.style.background = "green"
    }, 3000)
}
document.addEventListener("DOMContentLoaded", GreenBackgroundTimeout);

//Task 3

const OrangeBackground = () =>{
    document.body.style.background = "orange";
}
document.getElementById('Orange').onclick = OrangeBackground;

//Task 4
let i = 1;
const list = document.getElementById("list");
const AddNewLi = () =>{
    let newLi = document.createElement("li");
    newLi.innerHTML = `Элемент ${i}`;
    newLi.style.background = i % 2 === 0 ? "green" : "purple";
    list.appendChild(newLi);
    i++;
    if (i === 21){
        clearInterval(clockInterval);
    }
}
let clockInterval = setInterval(AddNewLi, 2000);




