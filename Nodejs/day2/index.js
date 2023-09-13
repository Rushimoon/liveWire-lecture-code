console.log("inside console")

//create folder
//create file
//append data
//rename file
//del file 
// del folder


const fs=require("fs");

// to make folder 
// fs.mkdirSync("folder3")
//to ceate file
//  fs.writeFileSync("./folder3/data.txt","this is our data")

//to update file
// fs.appendFileSync("./folder3/data.txt","\n this is more data wfich is appended")

//to rename file
//  fs.renameSync("./folder3/data.txt","./folder3/newdata.txt") 

//to del file
// fs.rmSync("./folder3/newdata.txt")





// fs.writeFileSync("./folder2/data2.js","console.log(2)")
// const recvdata=fs.readFileSync("./folder2/data2.js","utf-8")
// console.log(recvdata)

// fs.unlinkSync("./folder2/data2.js")

// fs.rmdirSync("folder2")//will create error

// async in nodejs
fs.watchFile("./folder2/data.js",(err)=>{
 console.log(err)
"./folder2/data2.js"
})