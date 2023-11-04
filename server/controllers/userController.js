
const bcrypt = require('bcrypt')
const User = require("../models/user")
const jwt = require('jsonwebtoken')


require("dotenv").config();

exports.signupUser = async(req, res) => {
   try {
    //data fetching
    const {firstName,lastName, email,  contactNo, password } = req.body;

    //validation
    if(!firstName ||!lastName || !email || !contactNo || !password){
        return res.status(403).json({
            success: false,
            message:'All fields are reuired'
        })
    }
    //already user
    const existingUser =await User.findOne({email});
        if(existingUser){
            return res.status(400).json({
                success:false,
                message:'User is alredy register',
            })
        }
    //hashing
    const hashedPassword = await bcrypt.hash(password,10);

    //dbStore
    const user = await User.create({
        firstName,
        lastName,
        email,
        contactNo,
        password:hashedPassword,
        profileImage:`https://api.dicebear.com/5.x/initials/svg?seed=${firstName}${lastName}`,
    })
    return res.status(200).json({
        success:true,
        message:'User is registered',
        user,
    });
   } catch (error) {
        console.log(error.message)
        res.status(500).json({
            success:false,
            message:"User cannot registered, try again",
        })
   }
}

exports.loginUser = async (req, res) => {
    try {
        //data fetch
        const {email,password} = req.body;
        //validate
        if(!email || !password){
            return res.status(401).json({
                success: false,
                message: 'All fields are requierd'
            })
        }
        //userExist?
        const user = await User.findOne({email})
        if(!user){
            return res.status(401).json({
                success: false,
                message: 'User not exist'
            }) 
        }
        //passCheck?
        if(await bcrypt.compare(password, user.password)){
            //tokenCreate
            const payload = {
                email:user.email,
                id: user._id,
            }
            const token =  jwt.sign(payload, process.env.JWT_SECRET, {
                expiresIn:"3h",
            });

            user.token = token;
            user.password = undefined;
            //cookieCreate
            const options ={
                expires:new Date(Date.now() + (3*24*60*60*1000)),
                httpOnly:true,
            }
            res.cookie("token", token, options).status(200).json({
                success:true,
                token,
                user,
                message:'Logged in successful'
            });
        }
        else{
            return res.status(500).json({
                success:false,
                message:'Password not matched',
            });
        }
    }
        
    catch (error) {
        console.log(error.message);
        res.status(500).json({
            success:false,
            message:'Login Failed!',
        });
    }
}