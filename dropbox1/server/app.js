var express = require('express')
  , http = require('http')
  , path = require('path')
  , controller = require ('./routes/controller');
var cors = require('cors');
var morgan = require('morgan')
var bodyParser = require('body-parser');  
var cookieParser = require('cookie-parser');
var mysql = require('mysql');
var multer = require('multer');

//config
var config = require('config');
var app = express();

//Enable CORS
var corsOptions = {
	    // origin: 'http://www.palashhedau.com',
	//	origin : 'http://ec2-52-91-82-150.compute-1.amazonaws.com',
	   origin: 'http://localhost:3000',
	   credentials: true,
};
app.use(cors(corsOptions))


app.use(morgan('dev')) ; 

app.set('port', process.env.PORT || 3002);
app.set('view engine', 'ej');
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

//Connectivity with  projects's Database 
var conn = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "dropboxdata"
  });
  
  conn.connect(function(err) {
	if (err) throw err;
	console.log("Connected!");
	controller(app, conn) ; 
  });

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
