const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken')
const UserModel = require("../models/user");

 

const signup=async(req,res)=>{
    try{
const {name,email,password} =req.body;
const user=await UserModel.findOne({email});
if(user){
  return  res.status(409)
    .json({message:"User is already exists you can login ",success:false})
}
const userMOdel2=new UserModel({name,email,password});
userMOdel2.password=await  bcrypt.hash(password,10);
await userMOdel2.save();
res.status(201)
.json({
    message:"Signup Successfully ",
    success:true
})
    }
    catch(err){
        res.status(500)
        .json({
            message:"Internal Server Error ",
            success:false
        })
    }
}

const login=async(req,res)=>{
    try{
const { email,password} =req.body;
const user=await UserModel.findOne({email});
const errorMsg="Auth email or password is wrong ";
if(!user){
  return  res.status(403)
    .json({message:errorMsg,success:false})
}
 const isEqual=await bcrypt.compare(password,user.password);
 if(!isEqual){
    return  res.status(403)
    .json({message:errorMsg,success:false})
 }

const jwtToken=jwt.sign({email: user.email ,
                        _id:user._id},
                    process.env.JWT_SECRET,
                    {expiresIn:'1m'}
                    )

res.status(201)
.json({
    message:"login Successfully ",
    success:true,
    jwtToken,
    email,
    name:user.name
})
    }
    catch(err){
        res.status(500)
        .json({
            message:"Internal Server Error ",
            success:false
        })
    }
}

module.exports={
    signup,
    login
}