const TeamMembers=require('../Model/TeamMemberSchema')
const teamdata=async(req,res)=>{
    const{Name,Email,DateOfBirth, Gender, Description, Role,PhoneNumber,ProfilePicture}=req.body
    const tmname=await TeamMembers.findOne({Name})
    if(tmname){
        res.json("Team member already added")
    }
    else{
        const tmcreate=await TeamMembers.create({
            Name,Email,DateOfBirth, Gender, Description, Role,PhoneNumber,ProfilePicture
        })
        res.json({
            id:tmcreate._id,
            Name:tmcreate.Name,
            DateOfBirth:tmcreate.DateOfBirth, 
            Gender:tmcreate.Gender ,
            Description:tmcreate.Description, 
            Role:tmcreate.Role,
            PhoneNumber:tmcreate. PhoneNumber,
            ProfilePicture:tmcreate.ProfilePicture

        })
    }

}
module.exports=teamdata



