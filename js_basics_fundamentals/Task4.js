let str = "daniel";
function ucFirst(param){
    return param[0].toUpperCase().concat(param.slice(1));
}
console.log(ucFirst(str));