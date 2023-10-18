const express= require("express");
const router = new express.Router();

router.get("/",(req,res)=>{
    res.send("this is new homw page")
})



//this will create a new Student
router.post("/players", async (req,res)=>{
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
router.get("/players",async(req,res)=>{

try {
    
    const data =  await Player.find();
    res.status(201).send(data)


} catch (error) {
    res.status(404).send(error)
}
})

// https://mongoosejs.com/docs/queries.html
router.patch("/players/:id",async(req,res)=>{

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
router.delete("/players/:id",async(req,res)=>{

    try {
        const _id= req.params.id ;
        const data =  await Player.findByIdAndDelete({_id});
        res.status(201).send(data)
    
    
    } catch (error) {
        res.status(404).send(error)
    }
    })
 module.exports=router;