let currency = "$123.57";
const extractCurrencyValue = (str) =>{
    return Number(str.slice(1));
}
console.log(extractCurrencyValue(currency));
