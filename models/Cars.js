const mongoose = require('mongoose');

const Schema = mongoose.Schema;



const carSchema = new Schema(
  {
    make: { type: String, 
            required: true 
    },
    model: {
      
      type: String,
      required: true
    },
    year: {
      type: Number,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    mileage: {
      type: Number,
      required: true
    },
    
    user_id: {
      type: String,
      required: true
    }
  
  
  }, 
  )

module.exports = mongoose.model('Car', carSchema)

//this will find all of the cars in the collections folder
// car.find()