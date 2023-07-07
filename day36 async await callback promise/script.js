/////async nature example
// console.log("1")

// setTimeout(function(){
//  console.log("set executed")
// },4000)
// console.log("2")
// console.log("3")
// for(let i=0;i<=100;i++){
// console.log(i)
// }
//promise example
// new Promise(function(myResolve, myReject) {
//   setTimeout(function() { myResolve("I love You !!"); }, 3000);
// });

// myPromise.then(function(value) {
//   document.getElementById("demo").innerHTML = value;
// });


function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}

let myPromise = new Promise(function(myResolve, myReject) {
  let x = 1;

// The producing code (this may take some time)

  if (x == 0) {
    myResolve("OK");
  } else {
    myReject("Error");
  }
});

myPromise.then(
  function(value) {myDisplayer(value);},
  function(error) {myDisplayer(error);}
);




















//callback

// function myDisplayer(some) {
//     document.getElementById("demo").innerHTML = some;
//   }
  
// function myCalculator(num1, num2, myCallback) {
//     let sum = num1 + num2;
//     myCallback(sum);
//   }
  
//   myCalculator(20, 20, myDisplayer);






  function vaibhav(){
    console.log("my name is lakahan");

  }

  function hemant(vaibhav){
   
    console.log("one two ka 4")
    vaibhav();

  }
  hemant(vaibhav);
