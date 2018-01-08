// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
		return console.log('Unable to connect to MongoDB Server!');
	}
	console.log('Connected to MongoDB Server!');

	db.collection('Todos').find({
		_id: new ObjectID('5a538494c719ae23949af1d2')
	}).toArray().then((docs) => {
		console.log('Todos');
		console.log(JSON.stringify(docs, undefined, 2));
	}, (err) => {
		console.log('Unable to fetch todos', err);
	});

	db.collection('Todos').find().count().then((count) => {
		console.log(`Todos count: ${count}`);
		// console.log(JSON.stringify(docs, undefined, 2));
	}, (err) => {
		console.log('Unable to fetch todos', err);
	});

	db.collection('Users').find({age: 25}).toArray().then((docs) => {
		console.log('Users');
		console.log(JSON.stringify(docs, undefined, 2));
	}, (err) => {
		console.log('Unable to fetch todos', err);
	});

	db.collection('Users').find().count().then((count) => {
		console.log(`Users count: ${count}`);
		// console.log(JSON.stringify(docs, undefined, 2));
	}, (err) => {
		console.log('Unable to fetch todos', err);
	});

	// db.close();
});