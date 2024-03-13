class Worker{
    constructor(workerName, workerSurname, workerRate, workerDays){
        this.name = workerName;
        this.surname = workerSurname;
        this.rate = workerRate;
        this.days = workerDays;
    } 
    getSalary(){
        return this.rate * this.days;
    }
}

var worker = new Worker('Иван', 'Иванов', 10, 31);
var worker2 = new Worker('Максим', 'Максимов', 12, 25);
console.log(worker.getSalary() + worker2.getSalary());
