const client=require('../Model/ClientSchema')
const clientdata=async(req,res)=>{
    const{Name,UserName,Email,SignedStatus,Role,PhoneNumber}=req.body
    const clientname=await client.findOne({Name})
    if(clientname){
        res.json("client already added")
    }
    else{
        const clientcreate=await client.create({
            Name,UserName,Email,SignedStatus,Role,PhoneNumber
        })
        res.json({
            id:clientcreate._id,
            Name:clientcreate.Name,
            UserName:clientcreate.UserName,
            Email:clientcreate.Email,
            SignedStatus:clientcreate.SignedStatus,
            Role:clientcreate.Role,
            PhoneNumber:clientcreate.PhoneNumber



        })
    }

}
module.exports=clientdata