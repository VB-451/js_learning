const size = 4;
let value = 0;

let matrix = [];
for (let i = 0; i < size; i++) {
    matrix[i] = new Array(size).fill(null);
}

const diagonal = (i, j) =>{
    while(i < size  && j < size){
        matrix[i][j] = value;
        value++;
        i++;
        j++;
    }
}

diagonal(0,0);
for (let i = 1; i < size; i++){
    diagonal(0, i);
    diagonal(i, 0);
}

console.log(matrix);