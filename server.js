var express  =require("express");
var app = express();
var port = process.env.PORT || 4000;

var cookieParser = require("cookie-parser");
var session = require("express-session");
var morgan = require("morgan");


app.use(morgan('dev'));
app.use(cookie-parser());
app.use(session({secret:'anyofstring',
					saveUninitialized: true,
					resave: true}));

app.use('/', function(req,res){
	res.send("our frist express program");
	console.log(req.cookies);
	console.log("******************");
	console.log(req.session) ;
});

app.listen(port);

console.log("server running on port:" +port);


