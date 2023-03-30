const mongoose =  require ('mongoose')

const contactSchema = new mongoose.Schema({
	_id: Schema.Types.ObjectId,
	motive : String,
    tshirtsize : {  type: Char, enum: ['XS', 'S', 'M', 'L', 'XL' ]},
	user: [{ type: Schema.Types.Mixed }]
})

module.exports = mongoose.model("ContactModel", contactSchema)