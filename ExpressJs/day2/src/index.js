const express=require("express");
const fs=require("fs");
const app=express();
const port=5000;
const data=fs.readFileSync("../db.json","utf-8");
console.log(data)
app.get("/",(req,res)=>{

// res.write([{
//     id:1,
//     name:"rushikesh",
//     mobile:9756556

// },
// {
//     id:2,
//     name:"vaibhav",
//     mobile:9756556

// }
// ])
// res.json(
//     [   {
//             id:1,
//             name:"rushikesh",
//             mobile:9756556
        
//         },
//         {
//             id:2,
//             name:"vaibhav",
//             mobile:9756556
        
//         },
//         {
//             id:3,
//             name:"html",
//             mobile:9756556
        
//         }
//         ] 
// )
// res.write(data)
// res.json(data)
res.send();

})
app.listen(port,()=>{
    console.log("port activate")
})
