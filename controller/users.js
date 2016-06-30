var mongoose = require('mongoose');
var EmpModel = require('../models/package');

exports.index=function(req,res,next){
	console.log('inside idex')
	EmpModel.find({},function(err,empDatas){
		if(err)
			return next(err)
		console.log(empDatas)
		res.json(empDatas);
	})
}

exports.read=function(req,res,next){
	EmpModel.findById(req.params.id,function(err,empData){
		if(err)
			return next(err)
		res.json(empData)
	})
}
exports.create=function(req,res,next){
	var empInstance = new EmpModel(req.body);
	empInstance.save(function(err,empData){
		if(err){
		 return next(err)	
		}
		if(empData){
			res.json(empData);

		}	
		
	})
}

exports.update=function(req,res,next){
	console.log('inside update function')
	console.log(req.params.id)
	EmpModel.findByIdAndUpdate(req.params.id,{$set:req.body},function(err,empData){
		if(err)
			return next(err)
		res.json(empData)

	})

}

// export.sort = function(req,res,next){
// 			aa.find().sort( { "name": 1 },function(err,data){
// 				if(err)
// 					return next(err)
// 				console.log(data);
// 			} );
			
// 		}




exports.delete = function(req,res,next){
	
	console.log("params"+req.params.id);
	EmpModel.remove({_id: req.params.id},function(err,empDatas){

		if(err){
			return next(err)
		}
		else
		{
			console.log('Data deleted');
			console.log(''+empDatas+'documents deleted');
			res.json(empDatas);
		}
	})
};