const input = document.getElementById("input");
input.onblur = () =>{
    if(isNaN(input.value)){
        input.value = "";    
    }
}