let array = [8, 7,  2,  2,  3, 4, 2,  5, 5, 6, 7, 8, 5, 9, 0, 1];
const uniqueSorted = (arr)=>{
    arr.sort((a, b) => a - b);
    return [... new Set(arr)];
}
console.log(uniqueSorted(array));
