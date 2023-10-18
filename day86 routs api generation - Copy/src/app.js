const express= require("express");
require ("../db/connection")
var validator = require("email-validator");
// const Student = require("../models/students")
// const Player=require("../models/players")
const  app =express();
const Router=require("./routers/player");

const port = process.env.PORT  || 8000 ;

// router.get("/moon",(req,res)=>{
//     res.send("this is new homw page")
// })
// app.use(router)

 
let ans=validator.validate("test@asd.c"); // true
console.log(ans)
app.use(express.json())

app.use(Router);



app.listen(port,()=>{
console.log("connection connected")
})


// body>raw>json