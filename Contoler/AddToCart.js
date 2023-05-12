const mongoose=require('mongoose')


const User = require('../Model/Userschema');

const addtocart=async(req,res)=>{
    const { userid, productid } = req.body;
    console.log(req.body);
  

    const update= await User.findByIdAndUpdate(userid,{
      
        $addToSet:{cart:productid}
    
    })
    console.log(productid);

    if(update){
        return res.send({message:'Add to cart successfull'})
    }else{
        return res.send({message:'Something error in add to cart'})
    }
// return res.send('add')
}

module.exports=addtocart