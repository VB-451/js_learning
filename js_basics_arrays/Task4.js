const sumInputNumbers = () =>{
  let num = [0];
  let result = 1;
  while(result !== null){
      result = prompt("Enter your value:");
      if(!isFinite(result) || !result){
        break;
      }
      num.push(Number(result));
  }
  let sum = num.reduce((acc, value) => acc + value);
  alert(sum);
}
sumInputNumbers()