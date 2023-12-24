const dividers = (number) =>{
    for (let i = 1; i <= number/2; i++){
        if (number % i === 0){
            console.log(i);
        }
    }
    console.log(number)
}
