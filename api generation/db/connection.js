const mongoose = require("mongoose");
mongoose.connect('mongodb://127.0.0.1:27017/rajesh')
.then(()=>{
    console.log("connection is sucessfull")
})
.catch(()=>{
    console.log("connection not sucessful")
})