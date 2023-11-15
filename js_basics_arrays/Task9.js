let arr =[1, "a", 2, null, 3, undefined, 4, {}, 5, 6, `word`, 7, 8, false, 9, 100];
const filter = (array) =>{
    let filteredArray = array.filter(item => Number.isFinite(item) && item < 10);
    return filteredArray
}
console.log(filter(arr));