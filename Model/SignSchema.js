const mongoose=require("mongoose")
const SignSchema=mongoose.Schema({
    FirstName:{type:String},
    SecondName:{type:String},
    Email:{type:String},
    Password:{type:String}

})

const project=mongoose.model('project',SignSchema)
module.exports=project