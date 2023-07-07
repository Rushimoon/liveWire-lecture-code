console.log("1")

setTimeout(function(){
 console.log("set executed")
},4000)
console.log("2")
console.log("3")

//callback

function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
  }
  
function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
  }
  
  myCalculator(20, 20, myDisplayer);






  function vaibhav(){
    console.log("my name is lakahan");

  }

  function hemant(vaibhav){
   
    console.log("one two ka 4")
    vaibhav();

  }
  hemant(vaibhav);
