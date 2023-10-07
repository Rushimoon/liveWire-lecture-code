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

   const  addData=async ()=>{
    const std1=new StudentList({
     
      name:"sonali",
      email:"sc@gmial.com",
      mobile:9764541344,
      course:"java",
      status:true
  
    })
    const std2=new StudentList({
     
      name:"vaibhav",
      email:"vn@gmial.com",
      mobile:908764541344,
      course:"c++",
      status:true
  
    })
    const std6=new StudentList({
     
      name:"vaibhav",
      email:"vn@gmial.com",
      mobile:908764541344,
      course:"c++",
      status:true
  
    })
    const std3=new StudentList({
     
      name:"jagriti",
      email:"jg@gmial.com",
      mobile:9764541344,
      course:"wd",
      status:true
  
    })

    const std4=new StudentList({
     
      name:"rutuja",
      email:"rj@gmial.com",
      mobile:908764541344,
      course:"c++",
      status:true
  
    })
    const std5=new StudentList({
     
      name:"pratiksh",
      email:"pk@gmial.com",
      mobile:234541344,
      course:"fswd",
      status:true
  
    })

   let result = await  StudentList.insertMany([std1,std2,std3,std4,std5,std6])
   }


   addData()
    



  //  const getData=async ()=>{
  //   let result = await  StudentList.find({course:"java"})
  //   console.log(result)
  //  }
  //  const getData=async ()=>{
  //   let result = await  StudentList.findOne({course:"java"})
  //   console.log(result)
  //  }
  const getData=async ()=>{
    let result = await  StudentList.find({course:"c++"}).limit(5)
    console.log(result)
   }



   getData()