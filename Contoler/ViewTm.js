const TeamMembers=require('../Model/TeamMemberSchema')

const tmview=async(req,res)=>{
    const {Name,Email,DateOfBirth, Gender, Description, Role,PhoneNumber,ProfilePicture}=req.body
    const _id=req.params.id
    const view=await TeamMembers.findById(_id)
    res.json(view)
}
module.exports=tmview
