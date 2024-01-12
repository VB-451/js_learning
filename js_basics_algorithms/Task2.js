const fibonacci = (n) => {
    let arr = [1, 1];
    for (let i = 2; i <= n - 1; i++){
        arr[i] = arr[i - 1] + arr[i - 2] 
    }
    if (n === 1){
        console.log(1);
    } else {
        console.log(arr);
    }
}
fibonacci(3);