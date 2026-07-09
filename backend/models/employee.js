const mongoose = require("mongoose");


const employeeSchema = new mongoose.Schema({

    firstName:{
        type:String,
        required:true
    },

    lastName:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true
    },

    phone:{
        type:String,
        required:true
    },

    gender:{
        type:String,
        required:true
    },

    bloodGroup:{
        type:String
    },


    address:{
        type:String
    },

    city:{
        type:String
    },

    state:{
        type:String
    },

    country:{
        type:String
    },

    pincode:{
        type:String
    },


    employeeId:{
        type:String,
        required:true
    },


    department:{
        type:String
    },


    jobType:{
        type:String
    },


    salary:{
        type:String
    },


    profilePhoto:{
        type:String
    },


    resume:{
        type:String
    },


    publicId:{
        type:String
    }


},
{
    timestamps:true
});


module.exports = mongoose.model(
    "Employee",
    employeeSchema
);