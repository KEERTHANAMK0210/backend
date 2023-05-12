const Order=require('../Model/OrderSchema')
const orderdata=async(req,res)=>{
    const{FirstName,LastName,OrderID,ProductNumber,Date}=req.body
    const name=await Order.findOne({FirstName})
    if(name){
        res.json("product already added")
    }
    else{
        const ordercreate=await Order.create({
            FirstName,LastName,OrderID,ProductNumber,Date
        })
        res.json({
            id:ordercreate._id,
            FirstName:ordercreate.FirstName,
            LastName:ordercreate.LastName,
            OrderID:ordercreate.OrderID,
            ProductNumber:ordercreate.ProductNumber,
            Date:ordercreate.Date
            

        })
    }

}
module.exports=orderdata