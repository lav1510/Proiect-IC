const User = require("../models/UserModels");
const {hashData} = require("./../utils/hashData");

const createNewUser = async (data) => {
    try{
        const {name, email, password} = data;

        //Checking if the user already exist
        const existingUser = await User.findOne({email});
        
        if(existingUser){
            throw Error("User with the provided email already exists");
        }

        //hash password
        const hasedPassword = await hashData(password);

        const newUser = new User ({
            name, 
            email,
            password: hasedPassword,
        });

        //save user
        const createdUser = await newUser.save();

        return createdUser;

    }catch (error){
        throw error;
    }
};

module.exports = {createNewUser}