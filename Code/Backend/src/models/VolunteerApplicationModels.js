const mongoose =  require ('mongoose')

const volunteerSchema = new mongoose.Schema({
	motive : String,
    tshirtsize : {  
		type: String, 
		enum: ["XS", "S", "M", "L", "XL" ]},
	user: String
})

module.exports = mongoose.model("VolunteerApplicationModel", volunteerSchema)