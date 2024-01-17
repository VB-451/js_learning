const prime = (number) =>{
    let isPrime = true;
    for (let i = 2; i <= number / 2; i++){
        if (number % i === 0){
            isPrime = false;
            break;
        }
    }
    return isPrime;
}

const writePrimes = (n) =>{
    for (i = 2; i <= n; i++){
        if (prime(i)){
            console.log(i);
        }
    }
}
writePrimes(15);
