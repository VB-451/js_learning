let numbers = [1, 5, 0, -5, 30, 100, -500, 0, 100, 55];

const lessThanFive = (arr) => {
    for (let item of arr){
        if (item < 5){
            console.log(item);
        }
    }
}

const minMaxIndex = (arr) =>{
    let min = arr[0];
    let max = arr[0];
    for (let item of arr){
        if (item < min){
            min=item
        };
        if (item > max){
             max=item;
        }
    }
    let minIndex = arr.findIndex(item => item === min);
    let maxIndex = arr.findIndex(item => item === max);
    return [minIndex, maxIndex];
}

const reverseSort = (arr) =>{
    arr.sort((a, b) => b - a);
}

const lessThanAverage = (arr) =>{
    let average = 0;
    let sum = 0;
    for (let item of arr){
        sum += item;
    }
    average = sum / arr.length;
    for (let item of arr){
        if (item < average){
            console.log(item);
        }
    }
}