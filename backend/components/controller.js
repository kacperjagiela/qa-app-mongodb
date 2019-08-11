const profile = require('./profile/controller.js');
const questions = require('./questions/controller.js');
const search = require('./search/controller.js');
const register = require('./register/controller.js');
const login = require('./login/controller.js');
const settings = require('./settings/controller.js');

module.exports = (app, db, upload) => {
	profile(app, db);
	questions(app, db);
	search(app, db);
	register(app, db, upload);
	login(app, db);
	settings(app, db, upload);
	// Get 10 random users
	app.get('/home', (req, res) => {
		let allQuestions = [];
		const getQuestions = (users) => {
			return new Promise((resolve, reject) => {
				db.getLatestQuestions(users, (error, questions) => {
					if (error) throw error;
					allQuestions = questions;
					resolve('ok');
				});
			});
		}
		const getUsers = new Promise((resolve, reject) => {
			db.getRandomUsers(5, async (err, result) => {
				if (err) throw err;
				const usersList = [];
				await result.forEach((user) => {
					usersList.push(user);
				});
				resolve(usersList);
			});
		});
		getUsers.then(result => {
			if (result) {
				getQuestions(result).then(() => {
					res.send({
						questions: allQuestions,
						users: result
					});
				});
			}
		}).catch(err => err);
	});
}