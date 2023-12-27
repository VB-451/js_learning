let coord = [{x: 1, y: 2}, {x: 3, y: 4}, {x: null, y: 4}, {x: 3, y: undefined}];

let filter = (arr) =>{
    let filteredArray = [];
    for (let item of arr){
        if(Number.isFinite(item['x']) && Number.isFinite(item['y'])){
            filteredArray.push([item['x'], item['y']]);
        }
    }
    return filteredArray;
}

console.log(filter(coord));