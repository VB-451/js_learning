let numbers = [1, 5, 0, -5, 30, 100, -500, 0, 100, 55];

const lessThanFive = (arr) => {
    for (let item of arr){
        if (item < 5){
            console.log(item);
        }
    }
}

const minMaxIndex = (arr) =>{
    return [arr.indexOf(Math.min.apply(null, arr)), arr.indexOf(Math.max.apply(null, arr))];
}

const reverseSort = (arr) =>{
    arr.sort((a, b) => b - a);
}

const lessThanAverage = (arr) =>{
    let sum = arr.reduce((acc, value) => acc + value)
    let average = sum / arr.length;
    for (let item of arr){
        if (item < average){
            console.log(item);
        }
    }
}