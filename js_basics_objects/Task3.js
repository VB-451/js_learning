const menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

const multiplyNumeric = (obj) => {
    for (const key in obj){ //for of doesn't work with objects
        if (typeof obj[key] === "number"){
            obj[key] *= 2;
        }
    }
}

multiplyNumeric(menu);
console.log(menu)