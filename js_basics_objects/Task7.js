let person = {
    name: `Person`,
	age: 123,
	salary: 1542.33,
	contacts: {
		phone: `112`,
		email: 'email@domain.com'
    },
    address: `Moldova`,
    get getName(){
        return this.name;
    },
    get getAge(){
        return this.age;
    },
    get getSalary(){
        return this.salary;
    },
    get getPhone(){
        return this.contacts.phone;
    },
    get getEmail(){
        return this.contacts.email;
    },
    get getAddress(){
        return this.address;
    }
}