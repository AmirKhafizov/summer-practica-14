const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PhoneSchema = new Schema({

   nickname: {

       type: String,
       trim: true

   },

   age: {

       type: Number,
       default: 1

   },
    model:{
       type:String,
        trim:true
    }

});

module.exports = mongoose.model('Phone', PhoneSchema);