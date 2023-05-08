const express = require("express");
const router = express.Router();
const {createNewUser, authenticateUser, loggedoutUser} = require ("../Controllers/UserController");
const auth = require("./../middleware/auth");

//protected route
router.get("/private_data", auth, (req, res) => {
    res.status(200).send(`You're in the private territory of ${req.currentUser.email}`);
})

//Login
router.post("/login",async (req, res) =>{
    try{
        let {email, password} = req.body;

        email = email.trim();
        password = password.trim();

        if(!(email && password)){
            throw Error ("Empty credentials supplied!");
        } 

        const authenticatedUser = await authenticateUser({email, password});

        res.status(200).json(authenticatedUser);
    }catch(error){
        res.status(400).send(error.message);
    }
});

//Logout
router.post("/logout",async (req, res) =>{
    try{
        let emailout = req.body;

        //emailout = emailout.trim();

        if(!(emailout)){
            throw Error ("User not found!");
        } 

        const signedoutUser= await loggedoutUser(emailout);


        res.status(200).json(signedoutUser);
    }catch(error){
        res.status(400).send(error.message);
    }
});


//Singup
router.post("/signup",async (req, res) =>{
    try{
        let {name, email, password} = req.body;

        //get rid of whitespaces
        name = name.trim();
        email = email.trim();
        password = password.trim();
        
        if(!(name && email && password)){
            throw Error ("Empty input fields!");
        } else {
            //create new user
            const newUser = await createNewUser({
                name,
                email,
                password,
            });
            res.status(200).json(newUser);
        }
    }catch (error){
        res.status(400).send(error.message);
    }
});

module.exports = router;