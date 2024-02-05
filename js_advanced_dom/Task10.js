const ball = document.getElementById("ball");
const field = document.getElementById("field");

const Center = () =>{
    ball.style.top = (field.offsetHeight - ball.offsetHeight) / 2 + "px";
    ball.style.left = (field.offsetWidth - ball.offsetWidth) / 2 + "px";
}

const TopLeft = () =>{
    ball.style.top = 0;
    ball.style.left = 0;
}

const TopRight = () =>{
    ball.style.top = 0;
    ball.style.left = field.offsetWidth - ball.offsetWidth + "px"
}

const BottomLeft = () => {
    ball.style.top = field.offsetHeight - ball.offsetHeight + "px";
    ball.style.left = 0;
}

const BottomRight = () => {
    ball.style.top = field.offsetHeight - ball.offsetHeight + "px";
    ball.style.left = field.offsetWidth - ball.offsetWidth + "px";
}