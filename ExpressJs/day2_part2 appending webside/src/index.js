const express=require('express');
const app=express();
const path=require('path')
// console.log(__dirname)
// console.log(path.join(__dirname,"../public"))
const static_path=path.join(__dirname,"../public");

app.use(express.static(static_path));

app.get('/',(req,res)=>{
     res.send("hellow world from moon")
})
app.listen("8000",()=>{
    console.log("listening the port")
})
