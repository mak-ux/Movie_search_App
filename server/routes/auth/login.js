const express = require("express");
const router = express.Router();
const crypto=require('crypto');
const path = require("path");
const User = require("../../models/user");
//const auth=require('../../authentication/auth')
const bcryptjs=require('bcryptjs')
const jwt=require('jsonwebtoken');
const bodyParser= require("body-parser")
fs = require('fs-extra')

router.use(bodyParser.urlencoded({extended: true}))


router.post("/signup",async(req,res)=>{ 
	try{
		const email=await User.findOne({email:req.body.email})
		const username=await User.findOne({username:req.body.username})
		console.log('yes')
		if(email)
		{
			console.log('yes')
            res.send('Email is already register!')
		}
		else if(username)
		{
			console.log('yes')
            res.send('Username is already register!')
			
		}
		else
		{
			console.log('yes')
			const user=new User(req.body)
			await user.save()
			res.send('you are resistered sucessfully')
		}
	}catch(e){
		console.log(e)
		res.send(e)
	}
});


router.post('/signin',async (req,res)=>{
	try{
		const user=await User.findOne({username:req.body.username})
		if(!user){
            res.send('Username is not registered')
			
		}
		else
		{
			const isMatch=await bcryptjs.compare(req.body.password,user.password)
			if(!isMatch){
                res.send('Invalid password')
				
			}
			else
			{
				const token=await user.generatingauthtoken()
				res.cookie('auth_token_2',token)
				res.send('you are logged in');
				console.log('you are logged in')
			}
		}
	}catch(e){
		res.send('server error')
	}
})






module.exports = router;


