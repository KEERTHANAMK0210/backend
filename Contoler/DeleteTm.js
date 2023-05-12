const TeamMembers=require('../Model/TeamMemberSchema')

const delttm=async(req,res)=>{
    const _id=req.params.id
    const deldata=await TeamMembers.findByIdAndDelete(_id)
    res.json("deleted")
}

module.exports=delttm
