console.log("node is running java script")
console.log(2+5)

let fs=require('fs');
   

// fs.writeFileSync("name.txt","this is first lecture of nodejs ")
   fs.appendFileSync("name.txt","and our two students are present and two are absent and enjoyn pola")
const mydata=fs.readFileSync("name.txt","utf8");
console.log(mydata)
fs.renameSync("name.txt","nodejs_firstlec")
