const express=require('express');
const app=express();

app.get('/',(req,res)=>{

res.write("<h1>this is home page inside h1</h1>")
res.write("<h1>this is home page inside h1</h1>")
res.write("<h1>this is home page inside h1</h1>")
res.write("<h1>this is home page inside h1</h1>")
res.write("<h1>this is home page inside h1</h1>")
res.send()

// res.send("<h1>this is home page inside h1</h1>")
// res.send("<h1>this another is home page inside h1</h1>")
})
app.get('/about',(req,res)=>{

    res.send("thus is code for our about page")
    
    })


app.listen("9876",()=>{
    console.log("listen executed")
})