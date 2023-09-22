const http=require("http");
const fs=require("fs");
const data= fs.readFileSync("data.json","utf-8")
// fs.writeFile("data.json",`{name:"vaibhav",dob:"9/11/1997",email:"vn@gmail.com"}`,(err)=>{
// console.log(err)
// })
// fs.appendFile("data.json",`{name:"hemant",dob:"30/08/1997",email:"vn@gmail.com"}`,(err)=>{
//     console.log(err)
//     })

const server = http.createServer((req,res)=>{
  if(req.url=="/"){
     res.end("this is homepage")
  }
    else if(req.url=="/about")
  {
   
     res.end(data)

  
  }
  else if(req.url=="/username")
  {
    res.end("this is username page")
  }
  else if (req.url=="/inventory")
  {
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.end("this is invebtory")

  }else{
        
    res.end("webpage not found")
    
  }

})



server.listen("8080",'127.0.0.1',()=>{

   console.log("callback")
   

})
