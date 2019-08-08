const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const strings = require('../functions/strings.js');
const models = require('./models.js');
const Mailer = require('../components/mailer.js');

const mailer = new Mailer();

class Database {
	// Get all usernames
	getAllUsernames(callback) {
		mongoose.connect(process.env.QA_MONGODB_URI, { useNewUrlParser: true, reconnectTries: Number.MAX_VALUE, reconnectInterval: 500 }).then(
			async () => {
				await models.User.find({}, { username: 1, _id: 0 }, (err, users) => {
					callback(null, users)
					mongoose.connection.close();
				});
			}
		).catch(err => console.log(err));
	}
	// Get user data
	getUserData(username, callback) {
		mongoose.connect(process.env.QA_MONGODB_URI, { useNewUrlParser: true, reconnectTries: Number.MAX_VALUE, reconnectInterval: 500 }).then(
			async () => {
				await models.User.findOne({ username: username}, (err, user) => {
					if (user){
						callback(null, user);
					} else {
						callback(null);
					}
				})
			}
		).catch(err => console.log(err));
	}
	// Get questions for user
	getQuestions(id, callback) {
		mongoose.connect(process.env.QA_MONGODB_URI, { useNewUrlParser: true, reconnectTries: Number.MAX_VALUE, reconnectInterval: 500 }).then(
			async () => {
				await models.Question.find({ user_id: id }).sort({ add_date: 1 }).exec((error, results) => {
					if (results) {
						callback(null, results);
						mongoose.connection.close();
					}
				});
			}
		).catch(err => console.log(err));
	}
	// Get latest questions
	getLatestQuestions(users, callback) {
		mongoose.connect(process.env.QA_MONGODB_URI, { useNewUrlParser: true, reconnectTries: Number.MAX_VALUE, reconnectInterval: 500 }).then(
			async () => {
				const questions = await users.map( async user => {
					return new Promise(async (resolve, reject) => {
						await models.Question.findOne({user_id: user.id, answer: { $exists: true }}).sort({add_date: 1}).exec((error, results) => {
							if(results) resolve(results);
						});
					});
				});
				Promise.all(questions).then((complete) => {
					if (complete) {
						callback(null, complete);
						mongoose.connection.close();
					}
				});
				
			}
		).catch(err => console.log(err));
	}
	// Get random users
	getRandomUsers(numberOfUsers, callback) {
		mongoose.connect(process.env.QA_MONGODB_URI, { useNewUrlParser: true, reconnectTries: Number.MAX_VALUE, reconnectInterval: 500 }).then(
			async () => {
				var random;
				await models.User.find().count((err, count) => {
					random = Math.floor(Math.random() * count)+1;
				});
				await models.User.find({}).limit(numberOfUsers).skip(random).exec((err, results) => {
					if (results) {
						callback(null, results);
						mongoose.connection.close();
					}
				});
				
			}
		).catch(err => console.log(err));
	}
	// Search user
	searchUser(username, callback){
		mongoose.connect(process.env.QA_MONGODB_URI, { useNewUrlParser: true, reconnectTries: Number.MAX_VALUE, reconnectInterval: 500 }).then(
			async () => {
				await models.User.find({username: new RegExp(`\^${username}`)}, (error, result) => {
					if (result) {
						callback(null, result);
						mongoose.connection.close();
					}
				})
			}
		).catch(err => console.log(err));
	}
	// Register
	registerUser(body, callback) {
		mongoose.connect(process.env.QA_MONGODB_URI, { useNewUrlParser: true, reconnectTries: Number.MAX_VALUE, reconnectInterval: 500 }).then(
			async () => {
				await models.User.findOne({username: body.username}, 'username', (err, result) => {
					// console.log(result);
					if (result){
						callback(null, false);
					} else {
						bcrypt.genSalt(10, (err, salt)=>{
							bcrypt.hash(body.password, salt, async (err, hash)=>{
								const user = new models.User({
									email: body.email,
									username: body.username,
									password: hash,
									description: body.description
								});
								await user.save( error => {
									if (!error) console.log('Created!');
								});
							});
						});
						callback(null, true);
						mongoose.connection.close();
					}
				})
				
			}
		).catch(err => console.log(err));
	}
	// Login
	loginUser(body, callback) {
		mongoose.connect(process.env.QA_MONGODB_URI, { useNewUrlParser: true, reconnectTries: Number.MAX_VALUE, reconnectInterval: 500 }).then(
			async () => {
				await models.User.findOne({username: body.username}, (err, result) =>{
					if (result) {
						bcrypt.compare(body.password, result.password, (error, result) => {
							callback(null, result);
						});
					} else {
						callback(null, false);
					}
					mongoose.connection.close();
				});
				
			}
		).catch(err => console.log(err));
	}
	// Handle question answer
	answerQuestion(questionid, answer, callback){
		mongoose.connect(process.env.QA_MONGODB_URI, { useNewUrlParser: true, reconnectTries: Number.MAX_VALUE, reconnectInterval: 500 }).then(
			async () => {
				await models.Question.findOneAndUpdate({ _id: questionid }, { answer: answer }, (err, result) => {
					if (!err) {
						callback(null, result);
						mongoose.connection.close();
					}
				})
				
			}
		).catch(err => console.log(err));
	}
	// Handle question asking
	askQuestion(username, question, asked, callback){
		mongoose.connect(process.env.QA_MONGODB_URI, { useNewUrlParser: true, reconnectTries: Number.MAX_VALUE, reconnectInterval: 500 }).then(
			async () => {
				await this.getUserData(username, async (err, user) => {
					if (user) {
						const questionn = new models.Question({
							content: question,
							user_id: user.id,
							asked_by: asked
						});
						await questionn.save(err => {
							if (err) console.log(err);
							callback(null, true);
						});
					};
				})
			}
		).catch(err => console.log(err));
	}
	// Handle question deleting
	deleteQuestion(id){
		mongoose.connect(process.env.QA_MONGODB_URI, { useNewUrlParser: true, reconnectTries: Number.MAX_VALUE, reconnectInterval: 500 }).then(
			async () => {
				await models.Question.findByIdAndDelete(id, err=>{
					if (err) console.log(err);
					mongoose.connection.close();
				})
			}
		).catch(err => console.log(err));
	}
	// Handle detail changing
	changeDetails(newDetails, username, callback){
		mongoose.connect(process.env.QA_MONGODB_URI, { useNewUrlParser: true, reconnectTries: Number.MAX_VALUE, reconnectInterval: 500 }).then(
			async () => {
				const columns = [];
				const values = [];
				for (const [key, value] of Object.entries(newDetails)){
					columns.push(key);
					values.push(value)
				}
				await models.User.findOneAndUpdate({ username: username }, { description: values[0] }, (err, result) => {
					if (!err) {
						console.log();
						callback(null, result);
						mongoose.connection.close();
					}
				})
				
			}
		).catch(err => console.log(err));
	}
	// Generate new password
	generatePassword(username, email, callback){
		this.getUserData(username, (error, res) => {
				if (err) callback(null, false);
				if (res.email === email){
					const newPassword = strings.generateString();
					bcrypt.genSalt(10, (err, salt)=>{
						bcrypt.hash(newPassword, salt, (err, hash)=>{
							mongoose.connect(process.env.QA_MONGODB_URI, { useNewUrlParser: true, reconnectTries: Number.MAX_VALUE, reconnectInterval: 500 }).query(`UPDATE QA_users SET password = ? WHERE username = ?`, [hash, username]);
						});
						mailer.setDestination(res.email);
						mailer.addPassword(newPassword);
						mailer.sendMessage();
						mailer.reset();
						callback(null, true);
						mongoose.connection.close();
					});
				}
			});
	}
}

module.exports = Database;