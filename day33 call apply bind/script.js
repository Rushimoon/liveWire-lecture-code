// console.log(this);
//this will always refer to window object
// const myObject = {
//     firstName:"John",
//     lastName: "Doe",
//     fullName: function() {
//        // console.log(this)
//       return this.firstName + " " + this.lastName;
//     }



// }
// let ans= myObject.fullName();
// console.log(ans);


// const person = {
//     fullName: function() {
//       return this.firstName + " " + this.lastName;
//     }
//   }
  
  
//   const person1 = {
//     firstName:"patiksha",
//     lastName: "Doe"
//   }
  
  
//   const person2 = {
//     firstName:"triveni",
//     lastName: "Doe"
//   }
  
  // This will return "John Doe":
//  ans= person.fullName.call(person2);
// console.log(ans)

// ===========================================================================
// call methods with example
// const person = {
//     fullName: function(city, country) {
//       return this.firstName + " " + this.lastName + "," + city + "," + country;
//     }
//   }
  
//   const person1 = {
//     firstName:"John",
//     lastName: "Doe"
//   }
  
//   person.fullName.call(person1, "nagpur", "INdia");
// =============================================================================
// Apply example
// const person = {
//     fullName: function() {
//       return this.firstName + " " + this.lastName;
//     }
//   }
  
//   const person1 = {
//     firstName: "Mary",
//     lastName: "Doe"
//   }
  
//   // This will return "Mary Doe":
//  ans= person.fullName.apply(person1);
//  console.log(ans)
//  =======================================================================================
// const person = {
//     fullName: function(city, country) {
//       return this.firstName + " " + this.lastName + "," + city + "," + country;
//     }
//   }
  
//   const person1 = {
//     firstName:"John",
//     lastName: "Doe"
//   }
  
//  let ans= person.fullName.apply(person1, ["Oslo", "Norway"]);
//  console.log(ans)
//  =========================================================================================

//  ans=Math.floor(5.5)
//  ans=Math.ceil(5.5)
//  ans=Math.max.apply(0, [1,2,3])

// console.log(ans)

// =====================================================================

// const person = {
//     firstName:"John",
//     lastName: "Doe",
//     display: function () {
//       let x = document.getElementById("demo");
//       x.innerHTML = this.firstName + " " + this.lastName;
//     }
//   }
//   let display = person.display.bind(person);
//   setTimeout(display, 3000);

