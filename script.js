// complete this js code
function Person(name, age) {
	this.name=name;
	this.age =age;
	this.greet(){
		console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
	}
}

function Employee(name, age, jobTitle) {
	this.name=name;
	this.age =age;
	this.jobTitle=jobTitle;
	this.jobGreet(){
		console.log(`Hello, my name is ${thisname}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`)
	}
}

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
