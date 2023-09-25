const events=require("events");
let EventEmitter=new events.EventEmitter();


EventEmitter.on("checkStatus",(statusCode,msg)=>{
console.log(`the status code is   ${statusCode}+the msg is   ${msg}`)
})


EventEmitter.emit("checkStatus",200,"the page is loaded sucess")
