const Order=require('../Model/OrderSchema')

const orderget=async(req,res)=>{

    const details=await Order.find()
    res.json(details)
}
module.exports=orderget
