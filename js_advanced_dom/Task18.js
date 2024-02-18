const player = document.getElementById("player");
const player2 = document.getElementById("player2")
const areaHeight = document.getElementById("viewport").offsetHeight - player2.offsetHeight;
const areaWidth = document.getElementById("viewport").offsetWidth - player2.offsetWidth;
let OneTop = 0;
let OneLeft = 0;
let TwoTop = 0;
let TwoLeft = 0;
document.addEventListener('keydown', (event) => {
	switch(event.key){
        case "ArrowUp":{
            OneTop -= 5;
            player.style.top = `${OneTop}px`;
            if (TwoTop !== 0){
                TwoTop -= 5;
                player2.style.top = `${TwoTop}px`;
            }
            break;
        }
        case "ArrowDown":{
            OneTop += 5;
            player.style.top = `${OneTop}px`;
            if (TwoTop !== areaHeight ){
                TwoTop += 5;
                player2.style.top = `${TwoTop}px`;    
            }
            break;
        }
        case "ArrowLeft":{
            OneLeft -= 5;
            player.style.left = `${OneLeft}px`;
            if (TwoLeft !== 0){
                TwoLeft -= 5;
                player2.style.left = `${TwoLeft}px`
            }
            break;
        }
        case "ArrowRight":{
            OneLeft += 5;
            player.style.left = `${OneLeft}px`;
            if (TwoLeft !== areaWidth){
                TwoLeft += 5;
                player2.style.left = `${TwoLeft}px`
            }
            break;
        }
    }  
  }
);
