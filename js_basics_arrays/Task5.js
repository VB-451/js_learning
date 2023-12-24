const divTwo = (num) =>{
    return num / 2;
}

const convert = (fn, arr) =>{
    return arr.map(fn);
}

let array = [2, 4, 6, 8, 10];
console.log(convert(divTwo, array));