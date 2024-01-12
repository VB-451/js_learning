let data = {
  "Рыбы": {
    "форель": {},
    "лосось": {}
  },

  "Деревья": {
    "Огромные": {
      "секвойя": {},
      "дуб": {}
    },
    "Цветковые": {
      "яблоня": {},
      "магнолия": {}
    }
  }
};

const createTree = (place, info) =>{
  let finalList = document.createElement("ul");
  for (let key in info){
    let midLine = document.createElement("li");
    midLine.innerHTML = key;
    finalList.appendChild(midLine);
    if (Object.keys(info[key]).length > 0){
      createTree(midLine, info[key])
    }
  }
  place.appendChild(finalList);
}
const container = document.getElementById("result");
createTree(container, data);