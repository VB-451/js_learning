const divTwo = (num) =>{
    return num / 2;
}

const convert = (fn,arr) =>{
    let convArr = [];
    for (let item of arr){
        convArr.push(fn(item));
    }
    return convArr;
}

let array = [2,4,6,8,10];
console.log(convert(divTwo,array));
console.log(array);