const mongoose=require("mongoose")
const client=require("../Model/ClientSchema")

const clientget=async(req,res)=>{

    const details=await client.find()
    res.json(details)
}
module.exports=clientget

