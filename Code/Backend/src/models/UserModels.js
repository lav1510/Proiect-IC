const mongoose =  require ('mongoose')

const userSchema = new mongoose.Schema({
	_id: Schema.Types.ObjectId,
    name : String,
    email : {
        type: String,
        required :true,
        unique : true,
    },
    password : String,
    isAdmin: {type: Boolean, default:false},
    date:{ type: Date, default: Date.now}
})

module.exports = mongoose.model("UserModel", userSchema)