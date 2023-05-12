const mongoose=require("mongoose")
const book=require("../Model/BookSchema")
const deltbook=async(req,res)=>{
    const _id=req.params.id
    const getdata=await book.findByIdAndRemove(_id)
    res.json("deleted")
}

module.exports=deltbook




