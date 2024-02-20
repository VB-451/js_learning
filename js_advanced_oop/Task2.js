class Person {
    constructor(personName, personSurname){
        this.name = personName;
        this.surname = personSurname;
    }
    getName(){
        return this.name;
    }
    getSurname(){
        return this.surname;
    }
    setName(newName){
        this.name = newName;
    }
    setSurname(newSurname){
        this.surname = newSurname;
    }
}
var worker = new Person('Иван', 'Иванов');
console.log(worker.getName()); //выведет 'Иван'
console.log(worker.getSurname()); //выведет 'Иванов'
console.log(worker.setSurname('Петров')); //выведет 'Иванов'
console.log(worker.getSurname()); //выведет 'Петров'
