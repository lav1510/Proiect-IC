const mongoose =  require ('mongoose')

const contactSchema = new mongoose.Schema({
	title : String,
    message : String,
	user:{ type:String, required :true}
})

module.exports = mongoose.model("ContactModels", contactSchema)