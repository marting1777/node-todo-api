const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
		return console.log('Unable to connect to MongoDB server!');
	}
	console.log('Connected to MongoDB server!');

	// findOneAndUpdate
	db.collection('Todos').findOneAndUpdate({
		_id: new ObjectID('5a538494c719ae23949af1d2')
	}, {
		$set: {
			text: 'Completar el curso de NodeJS'
		}
	}, {
		returnOriginal: false
	}).then((result) => {
		console.log(JSON.stringify(result, undefined, 2));
	});

	db.collection('Users').findOneAndUpdate({
		_id: new ObjectID('5a5386f6479fe24564366f32')
	}, {
		$set: {
			name: 'Nahuel',
			location: 'Club Newman'
		},
		$inc: {
			age: -13
		}
	}, {
		returnOriginal: false
	}).then((result) => {
		console.log(JSON.stringify(result, undefined, 2));
	});

});