const TeamMembers=require('../Model/TeamMemberSchema')


const tmedit=async(req,res)=>{
    const {Name,Email,DateOfBirth, Gender, Description, Role,PhoneNumber,ProfilePicture}=req.body

    const _id=req.params.id
    const edit=await TeamMembers.findByIdAndUpdate(_id,{Name,Email,DateOfBirth, Gender, Description, Role,PhoneNumber,ProfilePicture})

    res.json({Name:edit.Name,
        Email:edit.Email,
        DateOfBirth:edit.DateOfBirth,
        Gender:edit.Gender,
        Description:edit.Description,
        Role:edit.Role,
        PhoneNumber:edit.Phone,
        ProfilePicture:edit.ProfilePicture
    
    })
}
module.exports=tmedit