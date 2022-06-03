const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({

    email : {
        type : String,
        unique : true
    },
    name : {
        type : String
    },
    password : {
        type : String
    }
});


module.exports = mongoose.model('adminProfile',adminSchema);