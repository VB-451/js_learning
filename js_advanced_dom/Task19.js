const child = document.getElementById("child")
let currentDroppable = null;

child.onmousedown = function(event) {

let shiftX = event.clientX - child.getBoundingClientRect().left;
let shiftY = event.clientY - child.getBoundingClientRect().top;

child.style.position = 'absolute';
child.style.zIndex = 1000;
document.body.append(child);

moveAt(event.pageX, event.pageY);

function moveAt(pageX, pageY) {
    child.style.left = pageX - shiftX + 'px';
    child.style.top = pageY - shiftY + 'px';
}

function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);

    child.hidden = true;
    let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
    child.hidden = false;

    if (!elemBelow) return;

    let droppableBelow = elemBelow.closest('.droppable');
    if (currentDroppable != droppableBelow) {
    currentDroppable = droppableBelow;
    }
}

document.addEventListener('mousemove', onMouseMove);

child.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    if (currentDroppable){
        currentDroppable.appendChild(child);
    }
    child.onmouseup = null;
};

};

child.ondragstart = function() {
return false;
};