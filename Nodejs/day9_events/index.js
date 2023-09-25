const event=require("events")
var EventEmitter = new event.EventEmitter();

EventEmitter.on("thisEvent",()=>{


console.log("the event is fired sucess")

})
EventEmitter.on("thisEvent",()=>{


    console.log("this is fullstack class")
    
    })

    EventEmitter.on("thisEvent",()=>{


        console.log("this is fullstack class")
        
        })


        EventEmitter.on("thisEvent",()=>{


            console.log("we have  hemant vaibhav  pratiksha and tiveni")
            
            })   

EventEmitter.emit("thisEvent")

