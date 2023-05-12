
const Order=require('../Model/OrderSchema')


const deltorder=async(req,res)=>{
    const _id=req.params.id
    const deldata=await Order.findByIdAndRemove(_id)
    res.json("deleted")
}

module.exports=deltorder
