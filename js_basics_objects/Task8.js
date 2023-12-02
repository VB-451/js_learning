const weekDays = {
    'Mo': 'Понедельник',
    'Tu': 'Вторник',
    'We': 'Среда',
    'Th': 'Четверг',
    'Fr': 'Пятница',
    'Sa': 'Суббота',
    'Su': 'Воскресенье'
}
const translationsRom = ['Luni', 'Marti', 'Miercuri', 'Joi', 'Vineri', 'Simbata', 'Duminica'];
const translate = (obj) => {
    let index = 0;
    for (const key in obj){
        obj[key] = translationsRom[index];
        index++;
    }
}
translate(weekDays)
console.log(weekDays)
