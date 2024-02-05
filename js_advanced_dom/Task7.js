const internalLinks = document.querySelectorAll('a[href^="https"]');
for (let elem of internalLinks){
    elem.style.color = "red";
}