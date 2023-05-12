const Customer=require('../Model/CustomerSchema')
const customerdata=async(req,res)=>{
    const{Name,Email,AddressLine1,AddressLine2,City,State,PinCode,Country}=req.body
    const custname=await Customer.findOne({Name})
    if(custname){
        res.json("customer already added")
    }
    else{
        const custcreate=await Customer.create({
            Name,Email,AddressLine1,AddressLine2,City,State,PinCode,Country
        })
        res.json({
            id:custcreate._id,
            Name:custcreate.Name,
            Email:custcreate.Email,
            AddressLine1:custcreate.AddressLine1,
            AddressLine2:custcreate.AddressLine2,
            City:custcreate.City,
            State:custcreate.State,
            PinCode:custcreate.PinCode,
            Country:custcreate.Country
        })
    }

}
module.exports=customerdata