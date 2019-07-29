
var person = {}; 
person.firstName = 'Вася';
person.secondName = 'Иванов'
person['his age'] = 25; 
person.isMan = true;
person.driver = '';
person.wife = {
	firstName: 'Olya',
	secondName: 'Petrova',
	age: 25,
	isMman: 1,
	driver: null
	}
person.brather = 'Ivan';
person.age =34;

var secondPerson = {};
var counter = 0;
var newpoint;

function copyObject(oldObject) {
	var newObject = {};
	var newObjectSecond ={};
	
	for (var key in oldObject) {
		if (typeof oldObject[key] === 'object' && oldObject[key]) {
			newObject[key] = {};
			for (var key2 in oldObject[key]) {  
				newObject[key][key2] = oldObject[key][key2];
				console.log (newObject[key][key2]);
			}
		}
		else {
			newObject[key] = oldObject[key];
		}
	}
	return newObject;
}

secondPerson  = copyObject(person);

console.log ('Новый объект secondPerson = ', secondPerson);
secondPerson.wife.firstName = 'Дима';
secondPerson.firstName = 'Маша'
person.wife.driver = "Victory"
console.log (secondPerson);
console.log (person);




