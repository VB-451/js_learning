const extract = (start, end)=>{
    return arr.slice(start,end+1);
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(extract(2, 4));