const express= require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = mongoose.model('User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {JWT_SECRET} = require('../keys')
const requireLogin = require('../middleware/requireLogin')


// router.get('/',(req, res) => {
//     res.send("hello")
// })
// const user= new User();
router.get('/protected',requireLogin,(req, res) => {
    res.send("hello this is a protected resourse")
})
router.post('/signup',(req, res) => {
    // console.log(req.body);
    const {name,email,password} = req.body
    if(!email) { 
        res.status(422).json({error:"please email add all the fields"})
    }
    if(!password) { 
          res.status(422).json({error:"please pass add all the fields"})
      }
    if(!name) { 
        return  res.status(422).json({error:"please name add all the fields"})
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
              
                const token = jwt.sign({_id:savedUser.id},JWT_SECRET)
                res.json({token:token})
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