class FormElement {
    constructor(type, id, placeholder, value, rules){
        this.type = type;
        this.id = id;
        this.placeholder = placeholder;
        this.value = value;
        this.rules = rules;
        arrayOfInputs.push(this);
    }
    
    create(){
        if (this.type === "button"){
            const buttonElement = document.createElement("button");
            buttonElement.setAttribute("id", this.id);
            buttonElement.innerHTML = this.placeholder;
            buttonElement.onclick = () =>{
                let isValidated = true;
                for (let item of arrayOfInputs){
                    if(!item.validate()){
                        isValidated = false;
                        break;
                    }
                }
                alert(isValidated ? "Данные сохранены" : "Ошибка валидации")
            }
            return buttonElement;
        } else{
            const inputElement = document.createElement("input");
            this.actualValue = this.value;
            inputElement.setAttribute("type", this.type);
            inputElement.setAttribute("id", this.id);
            inputElement.setAttribute("placeholder", this.placeholder);
            inputElement.setAttribute("value", this.value);
            const rulesString = this.rules.join('|');
            inputElement.setAttribute("rules", rulesString);
            inputElement.oninput = () =>{
                this.actualValue = inputElement.value;
                if(!this.validate()){
                    inputElement.style.border = "2px solid #cc0033";
                    inputElement.nextElementSibling.style.color = "red"
                } else{
                    inputElement.style.border = "";
                    inputElement.nextElementSibling.style.color = "transparent"
                }
            }
            return inputElement;
        }
        
    }

    getValue(){
        return this.actualValue;
    }

    validate(){
        if (this.type === "button"){
            return true;
        }
        switch(this.id){
            case "name" :{
                return /^[a-zA-Z]+(?:\s[a-zA-Z]+)*$/.test(this.actualValue);
            }
            case "email" :{
                return /^[\w\.-]+@([\w-]+\.)+[\w-]{2,4}$/.test(this.actualValue);
            }
            case "age" :{
                return Number(this.actualValue) > 10 && Number(this.actualValue) < 120;
            }
            case "birthdate" :{
                return /^\s*(3[01]|[12][0-9]|0?[1-9])\.(1[012]|0?[1-9])\.((?:19|20)\d{2})\s*$/.test(this.actualValue);
            }
        }
    }
}

const mainForm = document.getElementById("testForm");
let arrayOfInputs = [];

const nameElement = new FormElement("text", "name", "Имя", "John", ["required"]);
const emailElement = new FormElement("text", "email", "Е-мэйл", "mail@mail.com", ["required", "mail"]);
const ageElement = new FormElement("text", "age", "Возраст", "25", ["required", "min:10"]);
const birthdateElement = new FormElement("text", "birthdate", "Дата рождения", "01.01.1970", ["required", "date"]);
const button = new FormElement("button", "submit", "Сохранить");

arrayOfInputs.forEach((item) => {
    if (item.type !== "button"){
        const errorMessage = document.createElement("div");
        errorMessage.innerHTML = `Please enter a valid ${item.id}`;
        errorMessage.style.color = "transparent";
        mainForm.append(item.create(), errorMessage);
    } else{
        mainForm.appendChild(item.create());
    }
});

