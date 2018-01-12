var mongoose = require('mongoose');

// USER
var User = mongoose.model('User', {
	name: {
		type: String,
		required: true,
		minlength: 1,
		trim: true
	},
	surname: {
		type: String,
		required: true,
		minlength: 1,
		trim: true
	},
	email: {
		type: String,
		required: true,
		trim: true,
		minlength: 1
	}
});

// var newUser = new User({
// 	name: 'Martin',
// 	surname: 'Galli',
// 	email: 'martin_galli13@hotmail.com'
// });

// newUser.save().then((doc) => {
// 	console.log('Saved User', doc);
// }, (e) => {
// 	console.log('Unable to save User', e);
// });

module.exports = {User};