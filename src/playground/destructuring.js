//
// Object Destructuring
//

// const person = {
// 	name: 'Serge',
// 	age: 32,
// 	location: {
// 		city: 'New York',
// 		temp: 78
// 	}	
// };

// const { name: firstName = 'Anonymous', age } = person;

// console.log(`${firstName} is ${age} years old.`)

// const { city, temp: temperature } = person.location;

// if (city && temperature) {
// 	console.log(`Is ${temperature} degrees in ${city}.`)
// }

const book = {
	title: 'The Stand',
	author: 'Stephen King',
	publisher: {
	}
}

const { name: publisherName = 'self published'} = book.publisher;

console.log(publisherName)

//
// Array Destructuring
//
const address = ['150 Ironman Street', 'Santo Tomas de las Tunas', 'Juanalgatengo', '55555'];

const [, city, state = 'Mexico'] = address;

console.log(`Yo are in ${city}, ${state}`)

const items = ['Coffee (hot)', '2.00', '2.50', '2.75'];

const [item, , price] = items;

console.log(`A medium ${item} costs ${price}`);