const express= require("express");
require ("../db/connection")
// const Student = require("../models/students")
const Player=require("../models/players")
const  app =express();
const router= new express.Router();
const studentRouter= require("./Routers/Players")
// router.get("/moon",(req,res)=>{
//     res.send("routed sucessfullly")
// })
// app.use(router)
// router.use(express.json())
app.use(studentRouter)
const port = process.env.PORT  || 8000 ;



app.listen(port,()=>{
console.log("connection connected")
})


// body>raw>json