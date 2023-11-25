let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

//option 1
let sum = Object.values(salaries).reduce((acc, value) => acc + value);

//option 2
for (let key in salaries){
    sum += salaries[key];
}

console.log(sum)
