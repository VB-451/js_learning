let str = "daniel";
const ucFirst = (param) =>{
    return param[0].toUpperCase().concat(param.slice(1));
}
console.log(ucFirst(str));
