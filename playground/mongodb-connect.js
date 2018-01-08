// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
		return console.log('Unable to connect to MongoDB Server!');
	}
	console.log('Connected to MongoDB Server!');

	// db.collection('Todos').insertOne({
	// 	text: 'Cambiar los cheques',
	// 	completed: false
	// }, (err, result) => {
	// 	if (err) {
	// 		return console.log('Unable to insert Todo', err);
	// 	}
	// 	console.log(JSON.stringify(result.ops, undefined, 2));
	// });

	// db.collection('Users').insertOne({
	// 	name: 'Catalina',
	// 	age: 25,
	// 	location: 'San Isidro'
	// }, (err, result) => {
	// 	if (err) {
	// 		return console.log('Unable to insert user');
	// 	}
	// 	console.log(result.ops[0]._id.getTimestamp());
	// })

	db.close();
});