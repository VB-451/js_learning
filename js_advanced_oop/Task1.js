class Person {
    constructor(personName, personSurname){
        this.name = personName;
        this.surname = personSurname;
    }
}
var worker = new Person('Иван', 'Иванов');
console.log(worker.name);
console.log(worker.surname);