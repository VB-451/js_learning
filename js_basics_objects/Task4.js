let user1 = {
	name: `User 1`,
	age: 123
}
let {...user2} = user1;
user2.name = `User 2`;
user2.age = 321;
console.log(user1, user2)

