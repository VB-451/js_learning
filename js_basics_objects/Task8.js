const weekDays = {
    'Mo': 'Понедельник',
    'Tu': 'Вторник',
    'We': 'Среда',
    'Th': 'Четверг',
    'Fr': 'Пятница',
    'Sa': 'Суббота',
    'Su': 'Воскресенье'
}
const roumanian = ['Luni', 'Marti', 'Miercuri', 'Joi', 'Vineri', 'Simbata', 'Duminica'];
const translate = (obj) => {
    let ind = 0;
    for (let key in obj){
        obj[key] = roumanian[ind];
        ind++;
    }
}
translate(weekDays)
console.log(weekDays)
