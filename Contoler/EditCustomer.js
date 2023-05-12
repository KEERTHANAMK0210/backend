const Customer=require("../Model/CustomerSchema")

const custedit=async(req,res)=>{
    const {Name,Email,AddressLine1,AddressLine2,City,State,PinCode,Country}=req.body
    const _id=req.params.id
    const edit=await Customer.findByIdAndUpdate(_id,{Name,Email,AddressLine1,AddressLine2,City,State,PinCode,Country})

    res.json({Name:edit.Name,Email:edit.Email,AddressLine1:edit.AddressLine1,AddressLine2:edit.AddressLine2,City:edit.City,
        State:edit.State,PinCode:edit.PinCode,Country:edit.Country})
}
module.exports=custedit