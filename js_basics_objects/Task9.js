const weekDays = {
    'Luni': 'Mo',
	'Marti': 'Tu',
	'Miercuri': 'We',
	'Joi': 'Th',
	'Vineri': 'Fr',
	'Simbata': 'Sa',
	'Duminica': 'Su'
}
let interchange = (obj) =>{
    let changedObject = {};
    for (let key in obj){
        changedObject[obj[key]] = key;    
    }
    return changedObject;
}
console.log(interchange(weekDays));