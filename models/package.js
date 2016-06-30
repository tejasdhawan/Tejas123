

var mongoose = require('mongoose')


var packageSchema = mongoose.Schema({
  name: {
    type: String,
    require:true
  },
 
  
  category: {
    type: String,
    
  },
  
  
  
  
  minQty:Number,
  fullPrice: Number,
  discountedPrice: Number,

  
});

module.exports = mongoose.model('Package', packageSchema);