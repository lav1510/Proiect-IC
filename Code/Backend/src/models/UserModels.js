const mongoose =  require ('mongoose')

const userSchema = new mongoose.Schema({
	name : String,
    email : {
        type: String,
        required :true,
        unique : true,
    },
    password : String,
    token : String,
    isAdmin: {type: Boolean, default:false},
    date:{ type: Date, default: Date.now}
})

module.exports = mongoose.model("UserModel", userSchema)