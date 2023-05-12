const mongoose=require("mongoose")
const connectdb=async()=>{
    try{
        const connect=await mongoose.connect("mongodb+srv://keerthanapradeep0210:keerthanam@keerthanamk.dcsouvp.mongodb.net/?retryWrites=true&w=majority",{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        })
        console.log("database is connected");
    } catch(error){
        console.log(`Error:${error}`);
        process.exit();

    }
    }
module.exports=connectdb