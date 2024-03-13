class Animal{
    constructor(food, location){
        this.food = food;
        this.location = location;
    }
    makeNoise(){
        console.log("The animal is making noise");
    }
    eat(){
        console.log("The animal is eating ");
    }
    sleep(){
        console.log("The animal is sleeping");
    }
}
class Dog extends Animal{
    constructor(food, location, isMuzzled){
        super(food, location);
        this.isMuzzled = isMuzzled;
    }
    makeNoise(){
        console.log("The dog barks");
    }
    eat(){
        console.log(`The dog is eating ${this.food}`);
    }

}

class Cat extends Animal{
    constructor(food, location, whiskerLength){
        super(food, location);
        this.whiskerLength = whiskerLength;
    }
    makeNoise(){
        console.log("The cat meows");
    }
    eat(){
        console.log(`The cat is eating ${this.food}`);
    }

}

class Horse extends Animal{
    constructor(food, location, tailLength){
        super(food, location);
        this.tailLength = tailLength;
    }   
    makeNoise(){
        console.log("The horse neighs");
    }
    eat(){
        console.log(`The horse is eating ${this.food}`);
    }

}

class Veterinary{
    treatAnimal(animal){
        console.log(animal.food);
        console.log(animal.location);
    }
}

const veterinary = new Veterinary();
const animals = [new Dog("bones", "home", false), new Cat("fish", "home", 5), new Horse("hay", "barn", 80)];
for(let animal of animals){
    veterinary.treatAnimal(animal);
}