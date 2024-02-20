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
            parentForm.appendChild(buttonElement);
        } else{
            const inputElement = document.createElement("input");
            this.actualValue = this.value;
            inputElement.setAttribute("type", this.type);
            inputElement.setAttribute("id", this.id);
            inputElement.setAttribute("placeholder", this.placeholder);
            inputElement.setAttribute("value", this.value);
            const rulesString = this.rules.join('|');
            inputElement.setAttribute("rules", rulesString);
            inputElement.oninput = () =>{this.actualValue = inputElement.value;}
            parentForm.appendChild(inputElement);
        }
        
    }

    getValue(){
        return this.actualValue;
    }
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
