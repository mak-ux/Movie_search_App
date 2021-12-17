const express=require('express');
const mongoose =require('mongoose');
const cors=require('cors');
require('dotenv').config();
const userroutes=require('./routes/auth/login');
const app=express();
const port=process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
require('./db/mongoose')

app.get('/',(req,res,next)=>{
    res.send(`welcome!,your server is running on ${port}`)
})



app.use("/user", userroutes);


app.listen(port ,()=>{
    console.log(`port is listening on ${port}`)
})

