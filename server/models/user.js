//complaints
const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
    //name
    firstName: {
        type: String,
        required:true,
        trim: true
    },
    lastName: {
        type: String,
        required:true,
        trim: true
    },
    //email
    email: {
        type: String,
        required: true,
        trim: true,
    },
    //password
    password:{
        type: String,
        required:true
    },
    complaints: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "complaint"
    },
    profileImage: {
        type: String,
        required: true
    },
    
    token:{
        type:String,
    }
})

const user = mongoose.model('user', userSchema);

module.exports =user;