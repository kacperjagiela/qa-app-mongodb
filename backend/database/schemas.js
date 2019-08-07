const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	email: String,
	username: String,
	password: String,
	description: { type: String, default: '' }
}, { collection: 'QA_users'});

const questionSchema = new mongoose.Schema({
	content: String,
	answer: { type: String, default: ''},
	user_id: String,
	add_date: { type: Date, default: Date.now },
	asked_by: String
}, { collection: 'QA_questions'});

module.exports = {
	userSchema,
	questionSchema,
}
