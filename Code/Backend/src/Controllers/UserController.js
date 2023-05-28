const User = require("../models/UserModels");
const {hashData, verifyHasedData} = require("./../utils/hashData");
const createToken = require("./../utils/createToken");

const authenticateUser = async (data) => {
    try {
        const {email, password} = data;

        const fetchedUser = await User.findOne({ email});

        if(!fetchedUser) {
            throw Error ("Invalid email entered!");
        }

        const hashedPassword = fetchedUser.password;
        const passwordMatch = await verifyHasedData(password, hashedPassword);

        if(!passwordMatch){
            throw Error("Invalid password entered!");
        }

        //create user token
        const tokenData = {userId: fetchedUser._id, email} ;
        const token = await createToken(tokenData);

        //assign user token
        fetchedUser.token = token;
        return fetchedUser;
    }catch (error){
        throw error;
    }
}

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

module.exports = {createNewUser, authenticateUser}