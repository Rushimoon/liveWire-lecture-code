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
        status:Boolean,
        score:Number
    }
  )
  //mongoose model is a wrapper  on the mongoose schema provides an interface to the database 
  // for creating , quering , updating ,del the record etc
 
   
  const StudentList = new mongoose.model("celeb",studentSchema)
  // this  is a class 
  // first parameter will be name of the class

   const  addData=async ()=>{
    // const std1=new StudentList({
     
    //   name:"sharukh",
    //   email:"sc@gmial.com",
    //   mobile:9764541344,
    //   course:"java",
    //   status:true,
    //   score:50
  
    // })
    // const std2=new StudentList({
     
    //   name:"salman",
    //   email:"vn@gmial.com",
    //   mobile:908764541344,
    //   course:"c++",
    //   status:true,
    //   score:65
  
    // })
    // const std6=new StudentList({
     
    //   name:"saif",
    //   email:"vn@gmial.com",
    //   mobile:908764541344,
    //   course:"c++",
    //   status:true,
    //   score:40
  
    // })
    // const std3=new StudentList({
     
    //   name:"akashy",
    //   email:"jg@gmial.com",
    //   mobile:9764541344,
    //   course:"wd",
    //   status:true,
    //   score:70
  
    // })

    // const std4=new StudentList({
     
    //   name:"varun",
    //   email:"rj@gmial.com",
    //   mobile:908764541344,
    //   course:"c++",
    //   status:true,
    //   score:85
  
    // })
    const std5=new StudentList({
     
      name:"VVVV",
      email:"pk@gmial.com",
      mobile:234541344,
      course:"fswd",
      status:true,
      score:70
  
    })

  //  let result = await  StudentList.insertMany([std5])
  // let result = await  StudentList.insertOne([std5])
   

  bulkWrite([
    {
      insertOne: {
        document: std5
      }
    }
  ])

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
  // const getData=async ()=>{
  //   let result = await  StudentList.find({course:"c++"}).limit(5)
  //   console.log(result)
  //  }


  //operators comparision
  // https://www.w3schools.com/mongodb/mongodb_query_operators.php

  // const getData=async ()=>{

  //   let result = await  StudentList.find({course:{$nin:["java","c++"]}})
  //   console.log(result)
  //  }


//  logical Operators 
// and
// const getData=async ()=>{
//    let result = await  StudentList.find({$and:[{course:"c++"},{score:{$gte:65}}]})
//     console.log(result)
//    }

// logical op OR
  //  const getData=async ()=>{
  //   let result = await  StudentList.find({$or:[{course:"c++"},{score:{$gte:65}}]})
  //    console.log(result)
  //   }


  // sorting the data
  //  const getData=async ()=>{
  //   let result = await  StudentList.find().sort({name:1})
  //    console.log(result)
  //   }
  // getData()
  //Update data



  // const updateData= async (id)=>{
    
    // try {
    //   let data = await StudentList.updateOne({_id:id},{$set:{name:"Vaibhav superstar"}})
    //     console.log(data)
    // } catch (error) {
    //   console.log(error)
    // }

  //     try {
  //     let data = await StudentList.findByIdAndUpdate({_id:id}
  //                                      ,{$set:{name:"Vaibhav"}}
  //                                      ,{new :true})
  //       console.log(data)
  //   } catch (error) {
  //     console.log(error)
  //   }


  


  // }
  // updateData("6528d9a16bec7bc874cad9c7")

 
//  const deldata= async ()=>{

//   try {
//       let data = await StudentList.deleteMany();
//         console.log(data)
//     } catch (error) {
//       console.log(error)
//     }


//  }
//  deldata()




 
  
 
