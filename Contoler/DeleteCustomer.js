const Customer=require("../Model/CustomerSchema")



const deltcust=async(req,res)=>{
    const _id=req.params.id
    const deldata=await Customer.findByIdAndRemove(_id)
    res.json("deleted")
}

module.exports=deltcust
