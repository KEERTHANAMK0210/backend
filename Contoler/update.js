const book=require("../Model/BookSchema")


const bookedit=async(req,res)=>{
    const {BookName,Author,Publication,Year,Avalibility,Image,Price}=req.body

    const _id=req.params.id
    const edit=await book.findByIdAndUpdate(_id,{BookName,Author,Publication,Year,Avalibility,Image,Price})

    res.json({BookName:edit.BookName,Author:edit.Author,Publication:edit.Publication,Year:edit.Year,Avalibility:edit.Avalibility
    ,Image:edit.Image,Price:edit.Price})
}
module.exports=bookedit