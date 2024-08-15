const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    id:{
        type:Number,
        required:true
    },
    name:{
        type:String,
        require: true
    },

    role: {
        type: String,
    },
    email:{
        type:String,
        require: true
    },
    
    password: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('User', userSchema);
