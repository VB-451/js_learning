const textInput = document.getElementById('textInput');
const addButton = document.getElementById('addButton');
const list = document.getElementById('list');

addButton.disabled = true;

const checkInput = () => {
    addButton.disabled = !(textInput.value);
}

textInput.addEventListener("change", checkInput);

const alertValueClick = (item) => {
    alert(item.innerHTML);
}

const AddNewItem = () => {
    let newItem = document.createElement("li");
    newItem.innerHTML = textInput.value;
    newItem.onclick = () => alertValueClick(newItem);   
    list.appendChild(newItem);
    textInput.value = "";
    addButton.disabled = true;
}

addButton.onclick = AddNewItem;