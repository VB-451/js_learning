let array = [8, 7,  2,  2,  3, 4, 2,  5, 5, 6, 7, 8, 5, 9, 0, 1];
const uniqueSorted = (arr)=>{
    let sorted=arr.slice();
    sorted.sort((a,b)=>a-b);
    for (let i=0; i<sorted.length-2; i++){
        if(sorted[i]===sorted[i+1]){
            sorted.splice(i,1);
            i--;
        }
    }
    return sorted;
}
console.log(uniqueSorted(array));