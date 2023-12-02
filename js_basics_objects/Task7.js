let person = {
    name: `Person`,
	age: 123,
	salary: 1542.33,
	contacts: {
		phone: `112`,
		email: 'email@domain.com'
    },
    address: `Moldova`,
    get Name(){
        return this.name;
    },
    get Age(){
        return this.age;
    },
    get Salary(){
        return this.salary;
    },
    get Phone(){
        return this.contacts.phone;
    },
    get Email(){
        return this.contacts.email;
    },
    get Address(){
        return this.address;
    }
}