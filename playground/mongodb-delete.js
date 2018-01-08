const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
		console.log('Unable to connect to MongoDB server!', err);
	}
	console.log('Connected to MongoDB server!');

	db.collection('Todos').deleteMany({text: 'Salir a comer'}).then((result) => {
		console.log(result);
	});

	db.collection('Todos').findOneAndDelete({
		_id: new ObjectID('5a5384a814d9683d9ca09327')
	}).then((result) => {
		console.log(result);
	});

});