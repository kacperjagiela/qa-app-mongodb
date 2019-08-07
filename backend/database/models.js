const mongoose = require('mongoose');
const schemas = require('./schemas.js')

const User = mongoose.model('User', schemas.userSchema);

const Question = mongoose.model('Question', schemas.questionSchema);

module.exports = {
	User,
	Question,
}
