const express =require("express");
const mongoose =require("mongoose");
const app = express();
app.use(express.json());


app.get('/',(req,res)=>{
    console.log("appp")

    res.send(
        "HI"
    )
})

app.listen(4000,()=>{
    console.log("server is start at 4000")
})