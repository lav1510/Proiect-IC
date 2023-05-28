const mongoose =  require ('mongoose')

const eventSchema = new mongoose.Schema({
	title : String,
    description : String,
    date:{ type: Date, default: Date.now}
	
})

module.exports = mongoose.model("EventModel", eventSchema)