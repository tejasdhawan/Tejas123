var aa=require('../models/user')
var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
const crypto = require('crypto');
var randomstring = require('just.randomstring');
module.exports = function(){
	
	var a = { };


		

	a.list=function(req,res){	
								 

						 aa.find({}).exec(function(err, topic)
					   {
					   		 	
								   //res.render('display.ejs', { topic: topic });
								    res.render('disp.html', { topic: topic });

								   		//res.send(topic);
					 });

			  }
			  a.login=function(req,res){	
			  	res.render('login.html');
			  	//res.send("in insert")

			  }
			  a.offers=function(req,res){
			  	res.render('offers.html');
			  }

			   a.nutri=function(req,res){
			  	res.render('nutri.html');
			  }

			  a.about=function(req,res){
			  	res.render('about.html');
			  }
			  a.contact=function(req,res){
			  	res.render('contact.html');
			  }

			  a.order=function(req,res){
			  	res.render('order.html')
			  }
			  a.checkout=function(req,res){
			  	res.render('checkout.html')
			  }

			   a.add=function(req,res){	
			  	res.render('add.html');
			  	//res.send("in insert")

			  }
			  a.check1 = function(req,res){
			  	console.log('aaa');
			  	res.render('disp.html');
			  }

			  a.update = function(req,res){
			  	res.render('update.html');
			  }
			  a.read = function(req,res){

			  	res.render('read.html');
			  }

			  a.forgot = function(req,res){
			  	res.render('forgot.html');
			  }


			  

			 


			   a.insert1=function(req,res){	


			   	

				const secret = req.body.value2;
				const hash = crypto.createHmac('sha256', secret)
                   //.update('I love')
                   .digest('hex');
					//console.log(hash);


			   	var fnm = req.body.fnm;
			   	var lnm = req.body.lnm;
			 var obj1 = req.body.value1;
        	var obj2 = hash;  
        	var state = req.body.state;
        	var city = req.body.city;
        	var zipcode = req.body.zipcode;
        	var mob = req.body.mob;  

      			




			  var user1 = new aa({FristName:fnm,lastName:lnm,name:obj1,password:obj2,state:state,city:city,zipcode:zipcode,mobileno:mob}) 
       		user1.save(function(err, data){   
         		if (err) return res.send(err);
         		res.redirect("/");

		});
		
	 }


	 		 a.check=function(req,res){	


	 		 	const secret = req.body.value2;
				const hash = crypto.createHmac('sha256', secret)
				.digest('hex');
			 var obj1 = req.body.value1;
        	var obj2 = hash;        	
			  aa.findOne({'name': obj1,'password':obj2},function(err,user){
      							if(user)
      								res.render('index.html');
      							else
      						
      								res.render("failure.html");
                               }); 

       		

		}

		 a.update1=function(req,res){

	    var fname = req.body.value1;
        var pass = req.body.value2;
       
           aa.findOneAndUpdate({"name":fname},{$set: {"name":fname,"password":pass} }, function(err, doc){
    if (err) return res.send(500, { error: err });
    //return res.send(doc);
    res.redirect("/")
});
		
		}

		a.read1= function(req,res){

			const secret = req.body.ppass;
			const hash = crypto.createHmac('sha256', secret)

			.digest('hex');

			var unm  = req.body.unm;
			var ppass = hash;
			const secret1 = req.body.cpass;
			const hash1 = crypto.createHmac('sha256', secret1)
			.digest('hex');
			var cpass = hash1;

			 aa.findOne({'name': unm,'password':ppass},function(err,user){
      							if(user)
      								aa.findOneAndUpdate({"name":unm},{$set: {"name":unm,"password":cpass} }, function(err, doc){
   					 if (err) return res.send(500, { error: err });
    					//return res.send(doc);
    				res.redirect("/")
					});
      							else
      						
      								res.render("failure.html");
                               }); 


			
		}


		a.forgot1 = function(req,res){

			var unm =req.body.unm;
			 var rs = randomstring(5); // returns "Erf7g"
			 //  const secret = rs;
			 // const hash = crypto.createHmac('sha256', secret)

			 // .digest('hex');

			aa.findOneAndUpdate({"name":unm},{$set: {"name":unm,"password":rs} }, function(err, doc){
    				if (err) return res.send(500, { error: err });
    						//return res.send(doc);
    					//res.redirect("/")
								});
      							
                              



    // Not the movie transporter!
    		var transporter = nodemailer.createTransport({
       		 service: 'Gmail',
       		 auth: {
           			 user: 'tejasdhawan1892@gmail.com', // Your email id
           			 pass: '9850222566' // Your password
        			}
    			});
    
    			var text = 'Hello world from \n\n' + req.body.unm;
				
    			var mailOptions = {
  									  from: 'tejdhawan989@gmail.com', // sender address
   									 to: unm, // list of receivers
   										 subject: 'Your New password', // Subject line
   										 text: rs //, // plaintext body
    										// html: '<b>Hello world ✔</b>' // You can choose to send an HTML body instead
									};
			
				transporter.sendMail(mailOptions, function(error, info){
   								 if(error){
        							console.log(error);
       								// res.json({yo: 'error'});
    							}else{

    											const secret = rs;
											  const hash = crypto.createHmac('sha256', secret)

												  .digest('hex');

									aa.findOneAndUpdate({"name":unm},{$set: {"name":unm,"password":hash} }, function(err, doc){
    								if (err) return res.send(500, { error: err });
    								//return res.send(doc);
    									//res.redirect("/")
										});


    									res.redirect('/');
       								 console.log('Message sent: ' + info.res);
       								 //res.json({yo: info.res});
  								 };
								});



		}



		
	 

	

	 

 
			  return a;



};
