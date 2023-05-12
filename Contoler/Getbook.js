const mongoose=require("mongoose")
const Book=require("../Model/BookSchema")

const bookget=async(req,res)=>{

    const bookdel=await Book.find()
    res.json(bookdel)
}
module.exports=bookget

