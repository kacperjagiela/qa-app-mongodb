const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const routeController = require('./components/controller.js');
const PORT = process.env.PORT || 5000;
require('dotenv').config();

const multer = require('multer');
const Database = require('./database/database.js');

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, 'public');
	},
	filename: (req, file, cb) => {
		cb(null, req.body.username);
	}
});

const upload = multer({ storage: storage });
const db = new Database();
const app = express();

//Enable CORS, body-parser, cookie-parser
app.use(cookieParser(), bodyParser.urlencoded({extended:true}), bodyParser.json());
app.use('/public', express.static('public'));
app.use((request, response, next) => {
    response.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );
    response.header('Access-Control-Allow-Credentials', 'true');
    next();
});
app.use(cors({
	origin: 'https://kacperjagiela.github.io',
	credentials: true
}));

//Initialize controller
routeController(app, db, upload);

app.listen(PORT , ()=>console.log(`Listening on PORT ${PORT}..`));
