const func = () => {
    let arr = [];
    for (let i = 0; i <= 99; i += 2){
        arr.push(i, 99 - i);
    }
    console.log(arr);
}
func();