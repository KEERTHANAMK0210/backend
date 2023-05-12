const mongoose=require("mongoose")
const project=require("../Model/SignSchema")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")

const sign=async(req,res)=>{
    const{FirstName,LastName,Email,Password}=req.body
    if(!FirstName || !LastName || !Email || !Password){
        return res.status(400).json({message:"please fill all fields"})
    }
    if(Password.length<6){
        return res.status(400).json({message:"Password must be at least 6 characters long"})
    }
    const details=await project.findOne({Email})
    if(details){
        res.json("user already exist")
    }
    else{
            const salt=await bcrypt.genSalt(10)
            const hashpassword=await bcrypt.hash(Password,salt)
            const sign=await project.create({
                FirstName,
                LastName,
                Email,
                Password: hashpassword // store the hashed password in the database
            })
            res.json({
                FirstName:sign.FirstName,
                LastName:sign.SecondName,
                Email:sign.Email,
                Password:sign.Password,
                Token:tokengenerate(sign._id)
            })
        }

    }
    const tokengenerate=(id)=>{
        return jwt.sign({id},process.env.JWT_SECRET,{
            expiresIn:'1d'
        })
    }
module.exports=sign

    

    

    




