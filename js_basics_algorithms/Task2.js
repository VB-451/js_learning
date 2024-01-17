const fibonacci = (n) => {
    let arr = [1, 1];
    if (n === 1){
        console.log(1);
    } else {
        for (let i = 2; i <= n - 1; i++){
            arr[i] = arr[i - 1] + arr[i - 2] 
        }
        console.log(arr);
    }
}
fibonacci(2);
