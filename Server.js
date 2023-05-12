const express=require("express")
const app=express()
const dotenv=require("dotenv")
const mongoose=require("mongoose")
const cors=require("cors")
const router=require("./Router/Testrouter")
const connectdb = require("./Config/db")


connectdb()
dotenv.config();


app.use(express.json())
app.use(cors())

app.use("/",router)


app.get("/",(req,res)=>{
    res.send("api is running")
})


const port=process.env.port||4000
app.listen(port,()=>console.log(`server is ${port}`))

