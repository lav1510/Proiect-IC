const mongoose =  require ('mongoose')

const eventSchema = new mongoose.Schema({
	_id: Schema.Types.ObjectId,
    title : String,
    description : String,
    date:{ type: Date, default: Date.now}
	
})

module.exports = mongoose.model("EventModel", eventSchema)