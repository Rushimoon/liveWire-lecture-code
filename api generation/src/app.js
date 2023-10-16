const express= require("express");
require ("../db/connection")
const Student = require("../models/students")
const  app =express();
const port = process.env.PORT  || 8000 ;

app.get("/",(req,res)=>{
    res.send("this is new homw page")
})
app.use(express.json())
//this will create a new student
app.post("/students",(req,res)=>{
    // console.log(req.body)
    const stud=new Student(req.body);
     console.log(stud)
     stud.save()
    
    res.send("hello from student side")
})

app.listen(port,()=>{
console.log("connection connected")
})



// body>raw>json