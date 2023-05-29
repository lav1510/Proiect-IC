const mongoose =  require ('mongoose')

const donationSchema = new mongoose.Schema({
	
    amount: Number,
    card_number : Number,
    charholder_name : String,
    cvc : Number,
    exp_date : Number,
    user: String
})

module.exports = mongoose.model("DonationModel", donationSchema)