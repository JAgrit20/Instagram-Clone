const express= require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = mongoose.model('User');
const bcrypt = require('bcryptjs');


// router.get('/',(req, res) => {
//     res.send("hello")
// })
// const user= new User();

router.post('/signup',(req, res) => {
    // console.log(req.body);
    const {name,email,password} = req.body
    if(!email || !password || !name) {
      return  res.status(422).json({error:"please add all the fields"})
    }
    User.findOne({email: email}).then((savedUser) => {
        if(savedUser){
            return res.status(422).json({error:"email already exist with this email"})
        }
        bcrypt.hash(password,12) //any number you can add
        .then(hashpassword =>{
                const user = new User({email, 
                    password:hashpassword,
                    name})
        
                user.save()
                .then(user=>{
                    res.json({message:"saved successfully"})
                })
                .catch((err) => {
                    console.log(err)
                })
                .catch((err) => {
                    console.log(err)
                })
            res.json({message:"successfully posted"})
        })
         
})
})
router.post('/signin',(req, res) => {
    const {email, password} = req.body
    if(!email || !password){
       return res.status(422).json({error:"please add email or password"});
    }
    User.findOne({email: email}).then(savedUser=>{
        if(!savedUser){
            return res.status(422).json({error:"Invalid credentials"})
        }
        bcrypt.compare(password,savedUser.password).then(doMatch=>{
            if(doMatch){
                // res.json({message:"successfully matched"})
            }
            else{
                return res.status(422).json({error:"invalid credentials"})
            }
        }).catch(err=>{
            console.log(err)
        })
    })
})
module.exports = router