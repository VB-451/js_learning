let person1 = {
    name: `Person1`,
	age: 123,
	salary: 1542.33,
	contacts: {
		phone: `112`,
		email: 'email@domain.com'
    },
address: `Moldova`
}

let person2 = {
    name: `Person2`,
	age: 12,
	salary: 1542.33,
	contacts: {
		phone: `113`,
		email: 'email@domain.co'
    },
address: `Moldova`
}

const intersection = (obj1, obj2)=>{
    let resultObj={};
    for (let key in obj1){
        if (obj1[key] === obj2[key]){
            resultObj[key] = obj1[key];
        } else if (typeof obj1[key] === 'object' && Object.keys(intersection(obj1[key], obj2[key])).length !== 0){
            resultObj[key] = intersection(obj1[key], obj2[key]);
        }
    }
    return resultObj;
}

console.log(intersection(person1, person2))