const Book=require('../Model/BookSchema')
const bookdata=async(req,res)=>{
    const{BookName,Author,Publisher,Year,Availability,Image,Price}=req.body
    const bookname=await Book.findOne({BookName})
    if(bookname){
        res.json("Book already added")
    }
    else{
        const bookcreate=await Book.create({
            BookName,Author,Publisher,Year,Availability,Image,Price
        })
        res.json({
            id:bookcreate._id,
            BookName:bookcreate.BookName,
            Author:bookcreate.Author,
            Publisher:bookcreate.Publisher,
            Year:bookcreate.Year,
            Availability:bookcreate.Availability,
            Image:bookcreate.Image,
            Price:bookcreate.Price




        })
    }

}
module.exports=bookdata