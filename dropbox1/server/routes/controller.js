
var config = require('config');
var bcrypt = require('bcrypt');
var upload = require('express-fileupload');
var multer  = require('multer');
var fs = require('fs');
// const formidableMiddleware = require('express-formidable');
var upload = require('express-fileupload');
var session = require('express-session');
var MySQLStore = require('express-mysql-session')(session);



module.exports = function(app, conn){

	// app.use(formidableMiddleware());
	app.use(upload()) ; 

	var options = {
		host: "localhost",
		user: "root",
		password: "",
		database: "dropboxdata",
		port:3306,
	};

	var sessionStore = new MySQLStore(options);	
	app.use(session({
		key: 'ZXY1cba',
		  secret: config.sessionSecret,
		  resave: false,
		  saveUninitialized: false,
		  duration:  60 * 1000,     // 600000000000 * 60 * 1000,
		  activeDuration:  60 * 1000,  // 6 * 60 * 60 * 1000,
		   cookie : {
		        maxAge:  60 * 1000, //  1000* 60 * 60 *24 * 365,
		        expires :  60 * 1000  //3600000 * 24 * 60
		    },
			store :sessionStore,
	}))


	
	app.get('/kathan', function (req, res) {
		if (req.session.views) {
		  req.session.views++
		  res.setHeader('Content-Type', 'text/html')
		  res.write('<p>views: ' + req.session.views + '</p>')
		  res.write('<p>expires in: ' + (req.session.cookie.maxAge / 10) + 's</p>')
		  res.end()
		} 
		else {
		  req.session.views = 1
		  res.end('welcome to the session demo. refresh!')
		}
	})


	//api2  Registration api
	app.post('/registerdropbox', function (req, res) {
		console.log(req.body);		console.log( req.body.emailregistration);	 //	console.log( req.body.fname);		console.log( req.body.lname);
		console.log(req.body.passwordregistration);

		console.log('Palahs hedau')
		
		var fname = req.body.fname;
		var lname = req.body.lname; 
		var email = req.body.emailregistration;
		var password = req.body.passwordregistration;
		
		
		const saltRounds = 10;
	  
		var query = 'select * from user where email = ?';
		  conn.query(query, [email], function( err, results) {
			if (err) {
			  res.status(500).json({status : false , error : 'database not connected'})        
			}
	  
			else if(results.length > 0){
			  res.status(401).json({status : false, error : 'user already present'})        
			}   
	  
			else{ 
			  bcrypt.hash(password,saltRounds, function( err, password){
				conn.query('INSERT INTO user (id, fname, lname, email, Password) VALUES ( ?, ?, ? , ?, ? )', [1, fname, lname, email, password],function(err,results) {
				  if(err){
					res.status(500).json({status: false , error: 'Error coccured while registering' })           
				  }
				  else{           
					res.status(200).json({status : true , error :''})
				  }
				})
			  })
			}
		  })
	  });



	// api3 LOGIN API
	app.post('/login', function(req,res){
		console.log(req.body);
		const email = req.body.email;
		const password = req.body.password; 
		// console.log(email);
		// console.log(password);
	   
		  var checkinfoQuery = 'select * from user where email = ? ' ;
		  console.log("Connection" , email)
		  conn.query(checkinfoQuery,[email], function(err, results){
			// console.log(typeof password)
			// console.log(results[0].password)
			console.log(err)
			console.log(results[0])
			if(results.length > 0){
			  	bcrypt.compare(password, results[0].password, function(err, resultPassword) {
			  	if(resultPassword == true){ 
					req.session.email = email;
					res.status(200).json({status: true , error: "user have account" })
			  }
			  else{
					res.status(401).json({status: false , error: "password does not match" })
			  }
			});
			}
				  
			else{
			  	res.status(500).json({status: false , error: "user not found" })     
			}
		  
		})
	  });	

		app.get('/checkSession', function(req,res){			
					if(req.session.email){
						res.status(200).json({status: true, error: "session is available" })
					}
					else{
						res.status(200).json({status: true , error: "session is ExpireD" })
					}
			})
	



//api4 - upload single file
	app.post('/uploadfile' , function(req, res){

		console.log('Upload Called : ' , file) ;
		var email = req.body.email;
		var currentdate = new Date();
		var directoryToUpload = req.body.directory;
		
		var datetime =  currentdate.getFullYear() + '-' + (currentdate.getMonth()+1) + '-' + currentdate.getDate() + " "+ currentdate.getHours() + ":" + currentdate.getMinutes() + ":" + currentdate.getSeconds();	
		
		console.log('Datetime for upload ' , datetime) ; 


		//File
		if(req.files){
			var file  = req.files ;
      console.log(file);
			console.log(req.file);
			console.log(req.email);
			console.log(req.session.email);
		
		var query1 = 'insert into user_file(email, file) VALUES ? ';
		conn.query(query1 , [email, file] ,function(result){
			if(!result){
			res.status(500).json({});
		}
		else{
			res.status(200).json({filelist : result })
		}
	})
	}
	else{
		return "kathan";

	}
	})
}

