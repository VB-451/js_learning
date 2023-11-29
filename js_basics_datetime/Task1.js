const curday = (sep) =>{
    let nowdate = new Date();
    return nowdate.getMonth()+1 + sep + nowdate.getDate() + sep + nowdate.getFullYear();
}
console.log(curday('/'))