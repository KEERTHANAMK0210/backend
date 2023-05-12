const Order=require('../Model/OrderSchema')

const orderview=async(req,res)=>{
    const {FirstName,LastName,OrderID,ProductNumber,Date}=req.body
    const _id=req.params.id

    const view=await Order.findById(_id)
    res.json(view)
}
module.exports=orderview