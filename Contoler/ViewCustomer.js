const Customer=require("../Model/CustomerSchema")

const customerview=async(req,res)=>{
    const {Name,Email,AddressLine1,AddressLine2,City,State,PinCode,Country}=req.body
    const _id=req.params.id

    const view=await Customer.findById(_id)
    res.json(view)
}
module.exports=customerview