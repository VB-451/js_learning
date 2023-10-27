let currency = "$123.57";
function extractCurrencyValue(str){
    return str.slice(1)*1;
}
console.log(extractCurrencyValue(currency));