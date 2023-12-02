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
    const objEntries = Object.entries(obj);
    let resultObject ={};
    for (const item of objEntries){
        resultObject[item[1]] = item[0];
    }
    return resultObject;
}
console.log(interchange(weekDays));