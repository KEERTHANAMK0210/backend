const book=require("../Model/BookSchema")

const Eachbook=async(req,res)=>{
    const {BookName,Author,Publisher,Year,Image,Price}=req.body
    const _id=req.params.id

    const eachbook=await book.findById(_id)
    res.json(eachbook)
}
module.exports=Eachbook