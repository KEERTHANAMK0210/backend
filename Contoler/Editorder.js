const Order=require('../Model/OrderSchema')
const orderedit=async(req,res)=>{
    const {FirstName,LastName,OrderID,ProductNumber,Date}=req.body

    const _id=req.params.id
    const edit=await Order.findByIdAndUpdate(_id,{FirstName,LastName,OrderID,ProductNumber,Date})

    res.json({
        FirstName:edit.FirstName,
        LastName:edit.LastName,
        OrderID:edit.OrderID,
        ProductNumber:edit.ProductNumber,
        Date:edit.Date,
        
    })
}
module.exports=orderedit