const client=require("../Model/ClientSchema")

const clientview=async(req,res)=>{
    const {Name,UserName,Email, SignedStatus,Role,PhoneNumber}=req.body
    const _id=req.params.id

    const view=await client.findById(_id)
    res.json(view)
}
module.exports=clientview