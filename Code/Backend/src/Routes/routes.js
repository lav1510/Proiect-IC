const express = require("express");
const router = express.Router();
const {createNewUser, authenticateUser, loggedoutUser} = require ("../Controllers/UserController");
const auth = require("./../middleware/auth");
const Event = require("../models/EventModels");
const Application = require("../models/VolunteerApplicationModels");
const Donation = require("../models/DonationModels");
const Contact = require("../models/ContactModels");
const jwt = require ('jsonwebtoken');
const {TOKEN_KEY} = process.env;

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

//New Event
router.post("/newevent",async (req, res) =>{
    try{
        let {title, description} = req.body;
        
        if(!(title&&description)){
            throw Error ("Empty input fields!");
        } else {
            const existingEvent = await Event.findOne({title});
            
            if(existingEvent){
                throw Error("Event with the provided title already exists");
            }
    
            const newEvent = new Event ({
                title: title,
                description: description
            });
    
            //save event
            const createdEvent = await newEvent.save();

            res.status(200).json(createdEvent);
        }
    }catch (error){
        res.status(400).send(error.message);
    }
});

//New Contact Message
router.post("/newcontact", auth, async (req, res) =>{
    try{
        let {token, title, message} = req.body;
        
        if(!(title&&message&&token)){
            throw Error ("Empty input fields!");
        } else {
            
            const decodedToken = await jwt.verify(token, TOKEN_KEY);
            
            const newContact = new Contact ({
                title: title,
                message: message,
                user: decodedToken.email
            });
    
            //save contact
            const createdContact = await newContact.save();

            res.status(200).json(createdContact);
        }
    }catch (error){
        res.status(400).send(error.message);
    }
});

//New Volunteer Application
router.post("/newvolunteer", auth, async (req, res) =>{
    try{
        let {token, motive, tshirtsize} = req.body;
        
        if(!(motive&&tshirtsize&&token)){
            throw Error ("Empty input fields!");
        } else {
            
            const decodedToken = await jwt.verify(token, TOKEN_KEY);
            const email = decodedToken.email;
            const existingApplication = await Application.findOne({user:email});
            
            if(existingApplication){
                throw Error("Application already sent.");
            }

            const newApplication = new Application ({
                motive : motive,
                tshirtsize : tshirtsize,
                user: email
            });
    
            //save applciation
            const createdApplication = await newApplication.save();

            res.status(200).json(createdApplication);
        }
    }catch (error){
        res.status(400).send(error.message);
    }
});

//New Donation
router.post("/newdonation", auth, async (req, res) =>{
    try{
        let {token, message, IBAN, sum} = req.body;
        
        if(!(IBAN&&sum&&token)){
            throw Error ("Empty input fields!");
        } else {
            if(sum <= 0){
                throw Error("Invalid amount.");
            }

            const decodedToken = await jwt.verify(token, TOKEN_KEY);
            
            const newDonation = new Donation ({
                message : message,
                IBAN : IBAN,
                sum : sum,
                user: decodedToken.email
            });
    
            //save donation
            const createdDonation = await newDonation.save();

            res.status(200).json(createdDonation);
        }
    }catch (error){
        res.status(400).send(error.message);
    }
});

module.exports = router;