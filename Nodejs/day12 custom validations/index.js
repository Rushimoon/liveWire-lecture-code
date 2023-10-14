const mongoose = require('mongoose');


mongoose.connect('mongodb://127.0.0.1:27017/liveWire')
  .then(() => console.log('data base connected Connected!'))
  .catch(()=>console.log("something is wrong plx ry agai"))


  const studentSchema=new mongoose.Schema(
    {
        name:{
            type:String,
            require:true,
            unique:true,
            lowercase:true,
            minLength:5,
            trim:true,
            maxLength:10
        },
        email:String,
        mobile:Number,
        course:{
            type:String,
            enum:["c++", "java","fswd"]
        },
        status:Boolean,
        // score:{
        //     type:Number,
        //     min:0,
        //     max:100,
        //     enum:[10,20,30,40,50,60]
        // }
        // custom validation

       score :{
        type:Number,
        validate(value){
           
        if(value>0 && value>10)
        {
            throw new Error("the mark should be greater than zeero and less than 10")
        }


        }
       }


    }
  )

  const StudentList = new mongoose.model("celeb",studentSchema)


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
     
      name:"gomesh",
      email:"pk@gmial.com",
      mobile:234541344,
      course:"java",
      status:true,
      score:8
  
    })

   let result = await  StudentList.insertMany([std5])
        
 }


    addData()