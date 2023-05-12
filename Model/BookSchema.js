const mongoose=require("mongoose")
const BookSchema=mongoose.Schema({
    BookName:{type:String},
    Author:{type:String},
    Publisher:{type:String},
    Year:{type:Number} ,
    Availability:{type:String},
    Image:{type:String},
    Price:{type:Number}

})

const Books=mongoose.model("Book",BookSchema)
module.exports=Books