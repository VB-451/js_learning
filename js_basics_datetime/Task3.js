const month_name = (date) =>{
    return date.toLocaleString('default', {month: 'long'} )   
}

console.log(month_name(new Date("10/11/2009")));
console.log(month_name(new Date("11/13/2014")));
