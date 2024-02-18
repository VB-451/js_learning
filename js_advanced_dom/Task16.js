const input = document.getElementById("input");

const allowNumber = (key) =>{
    return (key >= '0' && key <= '9') ||
    ['ArrowLeft','ArrowRight','Delete','Backspace', '.'].includes(key);
}