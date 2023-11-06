const sumInputNumbers = () =>{
    let num=[];
    let result=1;
    while(result!==null){
        result= prompt("Enter your value:");
        if(!isFinite(result)) break;
        num.push(result);
    }
    let sum=0;
    for (let item of num){
      sum+=item*1;
    }
    alert(sum);
}