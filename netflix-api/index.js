const express =require("express");
const userRoutes = require("./routes/UserRoutes");
const cors =require("cors");
const mongoose = require("mongoose");
const dotenv =require('dotenv')

const app=express();
app.use(express());
app.use(cors());
dotenv.config();


 /* ------>MongoDb Connaction <------ */
 mongoose
 .connect(process.env.MONGODB_URL,
 {  useNewUrlParser: true,
    useUnifiedTopology: true,

 })
 .then(() => {
    console.log("DB Connetion Successfull");
  })
  .catch((err) => {
    console.log(err.message);
  });
  app.use("/api/user", userRoutes);

 const PORT=3000;
app.listen(PORT,()=>{
    console.log("server started on Port 3000")
})