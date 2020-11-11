const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = 5999;
const {MONGOURL} = require('./keys')
require('./models/User')

app.use(express.json());

app.use(require('./routes/auth'))


// JVuMIO4n7ifnrRu0
mongoose.connect(MONGOURL,{
    useNewUrlParser: true,
    useUnifiedTopology: true

})
mongoose.connection.on("connected",()=>{
    console.log("yeah yeah we arew now connected");
})
mongoose.connection.on("error",(err)=>{
    console.log("error connection");
})
// const customMiddleware  = (req,res,next)=> {
//     console.log("middleware is running");
// }
// app.use(customMiddleware);

app.get('/',(req,res)=>{
    res.send("hello world")
})
app.listen(PORT,()=>{
    console.log("server is running on port " +PORT)
})