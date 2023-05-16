const mongoose =  require ('mongoose')

const donationSchema = new mongoose.Schema({
	
    message : String,
    IBAN : String,
    sum : Number,
	user: String
})

module.exports = mongoose.model("DonationModel", donationSchema)