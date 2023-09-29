const express=require('express');
const app=express();
const path=require('path')
const hbs=require("hbs");

// console.log(__dirname)
// console.log(path.join(__dirname,"../public"))
const static_path=path.join(__dirname,"../public");
const vpath=path.join(__dirname,"../templates/views")
const pp=path.join(__dirname,"../templates/patials")
hbs.registerPartials(pp)
app.use(express.static(static_path));
app.set("view engine","hbs")
app.set("views",vpath)
app.get("/",(req,res)=>{

    res.render("makedata",{
       name:"rushikesh" ,
       surname:"moon",
       data1:"hemant",
        data2:"vaibhav",
        data3:"pratiksha"
    })
})
app.get("/livewire",(req,res)=>{

    res.render("index",{
        data1:"hemant",
        data2:"vaibhav",
        data3:"pratiksha"
    })
})
// app.get('/',(req,res)=>{
//     res.send("hellow world from moon")
// })



app.listen("8000",()=>{
    console.log("listening the port")
})
