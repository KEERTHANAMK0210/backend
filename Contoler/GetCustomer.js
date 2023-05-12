const Customer=require("../Model/CustomerSchema")

const custget=async(req,res)=>{

    const details=await Customer.find()
    res.json(details)
}
module.exports=custget
