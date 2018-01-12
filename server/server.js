var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', {
	text: {
		type: String
	},
	completed: {
		type: Boolean
	},
	completedAt: {
		type: Number
	}
});

var newTodo = new Todo({
	text: 'Ir a comprar las carne para el asado',
	completed: true,
	completedAt: 10
});

var otherTodo = new Todo({
	text: 'Jugar al golf',
	completed: false,
	completedAt: 9
});

newTodo.save().then((doc) => {
	console.log('Saved todo', doc);
}, (e) => {
	console.log('Unable to save todo');
});