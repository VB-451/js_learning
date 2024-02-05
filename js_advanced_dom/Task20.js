const table = document.getElementById("mainTable");
const input = document.getElementById("input");
const button = document.getElementById("addButton");
button.onclick = () =>{
    let newRow = document.createElement('tr');
    let firstCell = document.createElement('td');
    firstCell.innerHTML = input.value;
    firstCell.style.width = "200px";
    let XCell = document.createElement('td');
    XCell.innerHTML = "X";
    XCell.style.color = "red";
    XCell.style.borderLeft = "solid black";
    XCell.onclick = () =>{
        XCell.parentElement.remove();
    }
    newRow.append(firstCell, XCell);
    table.appendChild(newRow);
}