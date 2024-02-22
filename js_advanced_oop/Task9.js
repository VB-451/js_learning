class FormElement {
    constructor(type, id, placeholder, value, rules){
        this.type = type;
        this.id = id;
        this.placeholder = placeholder;
        this.value = value;
        this.rules = rules;
    }
    
    create(parentFormSelector){
        const parentForm = document.querySelector(parentFormSelector);
        if (this.type === "button"){
            const buttonElement = document.createElement("button");
            buttonElement.setAttribute("id", this.id);
            buttonElement.innerHTML = this.placeholder;
            buttonElement.onclick = verifyInputs;
            parentForm.appendChild(buttonElement);
        } else{
            const inputElement = document.createElement("input");
            const errorMessage = document.createElement("div");
            errorMessage.innerHTML = `Please enter a valid ${this.id}`;
            errorMessage.style.color = "transparent";
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
                    errorMessage.style.color = "red"
                } else{
                    inputElement.style.border = "";
                    errorMessage.style.color = "transparent"
                }
            }
            parentForm.append(inputElement, errorMessage);
            arrayOfInputs.push(this);
        }
        
    }

    getValue(){
        return this.actualValue;
    }

    validate(){
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

let arrayOfInputs = [];
const verifyInputs = () =>{
    for (item of arrayOfInputs){
        if(!item.validate()){
            alert("Ошибка валидации");
            return false;
        }
    }
    alert("Данные сохранены")
    return true;
}



const nameElement = new FormElement("text", "name", "Имя", "John", ["required"]);
nameElement.create("#testForm");


const emailElement = new FormElement("text", "email", "Е-мэйл", "mail@mail.com", ["required", "mail"]);
emailElement.create("#testForm");

const ageElement = new FormElement("text", "age", "Возраст", "62", ["required", "min:10"]);
ageElement.create("#testForm");

const birthdateElement = new FormElement("text", "birthdate", "Дата рождения", "01.01.1970", ["required", "date"]);
birthdateElement.create("#testForm");

const button = new FormElement("button", "submit", "Сохранить");
button.create("#testForm");
