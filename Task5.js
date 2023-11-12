let currency = "$123.57";
const extractCurrencyValue = (str) =>{
    return str.slice(1)*1; //*1 for it to return as a number, but not as a string 
}
console.log(extractCurrencyValue(currency));
