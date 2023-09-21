const http=require('http')

let server=http.createServer((req,res)=>{
    res.end("this is the response page and this tells us detials")
})
server.listen("1997","127.0.0.1",()=>{
    console.log("inside list")
})

console.log("adasdsad")