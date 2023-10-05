const mongoose = require('mongoose');


mongoose.connect('mongodb://127.0.0.1:27017/liveWire')
  .then(() => console.log('data base connected Connected!'))
  .catch(()=>console.log("something is wrong plx ry agai"))


  // schema define structure of the document and validations 

  const studentSchema=new mongoose.Schema(
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
  //mongoose model is a wrapper  on the mongoose schema provides an interface to the database 
  // for creating , quering , updating ,del the record etc
 
   
  const StudentList = new mongoose.model("student",studentSchema)
  // this  is a class 
  // first parameter will be name of the class
  const std1=new StudentList({
     
    name:"rushikesh",
    email:"Rm@gmial.com",
    mobile:987541344,
    course:"fsd",
    status:true

  })
  std1.save()