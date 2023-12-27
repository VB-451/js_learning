const weekDays = {
    'Luni': 'Mo',
	'Marti': 'Tu',
	'Miercuri': 'We',
	'Joi': 'Th',
	'Vineri': 'Fr',
	'Simbata': 'Sa',
	'Duminica': 'Su'
}
const interchange = (obj) =>{
    let resultObject = {};
    Object.entries(obj).map(([key, value]) => {
        resultObject[value] = key;
    })
    return resultObject;
}
console.log(interchange(weekDays));