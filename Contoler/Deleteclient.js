const client=require("../Model/ClientSchema")



const deltclient=async(req,res)=>{
    const _id=req.params.id
    const deldata=await client.findByIdAndRemove(_id)
    res.json("deleted")
}

module.exports=deltclient
