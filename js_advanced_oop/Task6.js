class Transport{
    constructor(model, price, yearOfManufacture){
        this.model = model;
        this.price = price;
        this.yearOfManufacture = yearOfManufacture;
    }
    getModel(){
        return this.model;
    }
    getAge(){
        return new Date().getFullYear() - this.yearOfManufacture;
    }
    move(){
        console.log("The transport is moving");
    }
}

class Car extends Transport{
    move(){
        console.log("The car is driving");
    }
}

class Mercedes extends Car{
    move(){
        console.log("The Mercedes is going on the highway");
    }
}

class Truck extends Transport{
    move(){
        console.log("The truck is transporting goods");
    }
}

class Man extends Truck{
    move(){
        console.log("The Man is delivering coal");
    }
}

class Airplane extends Transport{
    move(){
        console.log("The plane flies over the ocean");
    }   
}

class Airbus extends Airplane{
    move(){
        console.log("The Airbus is traveling to USA");
    }   
}

class Boeing extends Airplane{
    move(){
        console.log("The Boeing transports products");
    }   
}