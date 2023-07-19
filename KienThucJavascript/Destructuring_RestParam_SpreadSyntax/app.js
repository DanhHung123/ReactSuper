/**
 * Destructuring
 */

// De Với Object
const user = {
	name: "hung",
	age: 20,
	sex: "male",
};

const { age, sex, name: userName } = user;

// console.log(age, sex, userName);

// De với array

const userArray = [
	1,
	function (a, b) {
		return a + b;
	},
];

// const [a, b] = userArray;
// console.log(a, b(1, 2));

/**
 * Spread Syntax
 */
const cloneUser = { ...user };
// const cloneUser = user;
cloneUser.age = 222;
// console.log(cloneUser.age === user.age);
// console.log(cloneUser);
// console.log(user);

/**
 * Rest Parameters
 */

const numberArr = [1, 2, 4, 5, 6, 7, 8];

const [a, b, ...c] = numberArr;

console.log(a, b, c);
