// function pratiksha(){

//     console.log("patiksha")
//     console.log("23")
//     console.log("nagpur")

// }

//  let stoptimer= setTimeout(function(){
//     pratiksha();
// },3000);

// function stopme(){
//     clearInterval(stoptimer);
// }







// // pratiksha();
// let q=0;
// function sum(){

//     q++
//     console.log(q)
// }




// setInterval(sum,1000);





// table of 4 


// let x=0;

// let vaibhav =setInterval(function(){
//     x=x+4
//     console.log(x)
// },1000)

// // // automatic stop after 5 sec code
// // setTimeout(function(){
// //     clearInterval(vaibhav)
// // },5000)
// function startme(){
//     vaibhav=setInterval(function(){
//         x=x+4
//         console.log(x)
//     },1000)
// }

// function stopme(){
//     clearInterval(vaibhav)
    
// }

let x=0;

let pratiksha =setInterval(function(){
    x=x+4
    console.log(x)
},2000)

setTimeout(function(){
    clearInterval(pratiksha)
},3000)
function startme(){
    pratiksha=setInterval(function(){
          x=x+4
            console.log(x)
        },1000)
    }
        function stopme(){
            clearInterval(pratiksha)
        }








