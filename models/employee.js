const mongoose = require('mongoose')

const employeeSchema = new mongoose.Schema({
    name:{
        type : String,
        required : true
    },
    address:{
        type : String,
        required : true
    },
    shift:{
        type : String,
        required : true 
    },
    phonenumber:{
        type : Number,
        required : true
    },
    email:{
        type : String,
        required : true
    }
});

module.exports = mongoose.model('employee',employeeSchema);