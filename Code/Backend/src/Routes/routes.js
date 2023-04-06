const express = require("express");
const router = express.Router();
const {createNewUser} = require ("../Controllers/UserController");

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