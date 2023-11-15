arr = [1, 2, 3, 4, 5];
n = arr.length;

//for:
for (let i =0; i<n; i++){
    console.log(arr[i]);
}

//for in
for (key in arr){
    console.log(arr[key]);
}

//for of
for (item of arr){
    console.log(arr[item-1]); //-1 for it to start from the first element
}

//forEach
arr.forEach(element => {
    console.log(element);    
});

//map
arr.map(item=>{
    console.log(item)
})

//another way
console.log(arr);