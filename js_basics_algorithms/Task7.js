const size = 4;
let value = 0;

let matrix = [];
for (let i = 0; i < size; i++) {
    matrix[i] = new Array(size).fill(null);
}

const fillDiagonally = (i, j) =>{
    while(i < size  && j < size){
        matrix[i][j] = value;
        value++;
        i++;
        j++;
    }
}

fillDiagonally(0,0);
for (let i = 1; i < size; i++){
    fillDiagonally(0, i);
    fillDiagonally(i, 0);
}

console.log(matrix);
