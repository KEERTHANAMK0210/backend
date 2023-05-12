const mongoose=require("mongoose")
const TeamMembers=require('../Model/TeamMemberSchema')

const tmget=async(req,res)=>{

    const tmdel=await TeamMembers.find()
    res.json(tmdel)
}
module.exports=tmget

