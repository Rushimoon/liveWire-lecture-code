const express= require("express");
require ("../db/connection")
// const Student = require("../models/students")
const Player=require("../models/players")
const  app =express();
const port = process.env.PORT  || 8000 ;

app.get("/",(req,res)=>{
    res.send("this is new homw page")
})
app.use(express.json())


//this will create a new Student
app.post("/players", async (req,res)=>{
    // console.log(req.body)
    
    const player=new Player(req.body);
     console.log(player)
   try {
    const data =  await player.save()
     res.status(201).send(data)

   } catch (error) {
       res.status(500).send(error)
   }
     
    
    
})

// to get the data
app.get("/players",async(req,res)=>{

try {
    
    const data =  await Player.find();
    res.status(201).send(data)


} catch (error) {
    res.status(404).send(error)
}
})

// https://mongoosejs.com/docs/queries.html
app.patch("/players/:id",async(req,res)=>{

    try {
        const _id= req.params.id ;
        const data =  await Player.findByIdAndUpdate({_id},req.body,{
            new:true
        });
        res.status(201).send(data)
    
    
    } catch (error) {
        res.status(404).send(error)
    }
    })



//del the data
app.delete("/players/:id",async(req,res)=>{

    try {
        const _id= req.params.id ;
        const data =  await Player.findByIdAndDelete({_id});
        res.status(201).send(data)
    
    
    } catch (error) {
        res.status(404).send(error)
    }
    })

app.listen(port,()=>{
console.log("connection connected")
})


// body>raw>json