import * as firebase from 'firebase';

const firebaseConfig = {
	apiKey: process.env.FIREBASE_API_KEY,
	authDomain: process.env.FIREBASE_AUTH_DOMAIN,
	databaseURL: process.env.FIREBASE_DATABASE_URL,
	projectId: process.env.FIREBASE_PROJECT_ID,
	storageBucket: "",
	messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.FIREBASE_APP_ID
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };
// database.ref('expenses').on("child_removed", (snapshot) => {
// 	console.log(snapshot.key, snapshot.val());
// })

// database.ref('expenses').on("child_changed", (snapshot) => {
// 	console.log(snapshot.key, snapshot.val());
// })

// database.ref('expenses').on("child_added", (snapshot) => {
// 	console.log(snapshot.key, snapshot.val());
// })



// database.ref('expenses').on('value', (snapshot) => {
// 	const expenses = [];
	
// 	snapshot.forEach((childSnapshot) => {
// 		expenses.push({
// 			id: childSnapshot.key,
// 			...childSnapshot.val()
// 		})
// 	})

// 	console.log(expenses);
// })

// database.ref('expenses').push({
// 	description: 'Coffee',
// 	amount: 50,
// 	createdAt: 0,
// 	notes: ''
// });

/*
const onValueChange = database.ref()
	.on('value', (snapshot) => {
		const val = snapshot.val();
		console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
});

setTimeout(() => {
	database.ref().update({
		name: 'Serge',
		'job/title': 'manager',
		'job/company': 'SVAM'
	});
}, 3000);

setTimeout(() => {
	database.ref().update({
		name: 'Kary',
		'job/title': 'Developer',
		'job/company': 'Google'
	});
}, 3000);
*/

/*
const onNameChange = database.ref().on('value', (snapshot) => {
	console.log(snapshot.val());
});

setTimeout(() => {database.ref('name').set('Ana')}, 3000)
setTimeout(() => {database.ref('name').set('Karina')}, 6000)

setTimeout(() => {database.ref().off('value', onNameChange)}, 9000)

setTimeout(() => {database.ref('name').set('Ivan')}, 12000)
*/
/*
database.ref()
	.once('value')
	.then((snapshot) => {
		const val = snapshot.val();
		console.log(val);
	})
	.catch((e) => {
		console.log('error', e)
	})


database.ref().set({
		name: 'Sergio Ponce',
		age: 32,
		stressLevel: 6,
		job: {
			title: 'Software Developer',
			company: 'Google'
		},
		location: {
			city: 'San Francisco',
			country: 'USA'
		}
	}
).then(() => {
	console.log('Data has been saved');
}).catch((e) => {
	console.log('Something went wrong', e);
});

database.ref().update({
	stressLevel: 9,
	'job/company': 'Amazon',
	'location/city': 'Seatle'
});
*/

/*
database.ref('isSingle').remove()
	.then(() => console.log(`data has been removed`))
	.catch((e) => { console.log('something went wrong')});
*/