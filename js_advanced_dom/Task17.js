const elem = document.getElementById("elem");
const doubleSize = () =>{
  alert(`Width = ${elem.style.width}; Height = ${elem.style.height}`);
  elem.style.width = `${elem.offsetWidth * 2}px`;
  elem.style.height = `${elem.offsetHeight * 2}px`;
}
elem.onclick = doubleSize;