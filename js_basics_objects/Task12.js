const person = {
    first: 'Ion',
    last: 'Creanga',
    company: 'Amintiri din copilarie SRL'
}
const displayName = (obj) =>{
    let {first, last, company} = obj;
    console.log(`Name: ${first} ${last}, Company: ${company}`);
}
displayName(person);
