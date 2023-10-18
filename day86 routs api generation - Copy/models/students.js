const mongoose = require("mongoose");

const StudentSchema=new mongoose.Schema(
    {
        name:{
            type:String,
            require:true
        },
        email:String,
        mobile:Number,
        course:String,
        status:Boolean
    }
  )
  const Student = new mongoose.model("hement",StudentSchema)
  module.exports = Student;