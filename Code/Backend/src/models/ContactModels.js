const mongoose =  require ('mongoose')

const contactSchema = new mongoose.Schema({
	_id: Schema.Types.ObjectId,
	title : String,
    message : String,
	user: [{ type: Schema.Types.Mixed }]
})

module.exports = mongoose.model("ContactModel", contactSchema)