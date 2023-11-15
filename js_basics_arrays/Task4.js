const sumInputNumbers = () =>{
  let result = 1;
  let sum = 0;
  while(result !== null){
      result = prompt("Enter your value:");
      if(!isFinite(result) || !result){
        break;
      }
      sum += Number(result);
  }
  alert(sum);
}