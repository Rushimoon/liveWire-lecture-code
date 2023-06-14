

function vaibhav(x,y){
    
    // let a=x ;
    // let b=y;

     let add= x+y ;
     console.log(add);
     console.log(x,y);


}


vaibhav(30,15);



{

}







class Rectangle {
    
    constructor(height, width) {
        this.height = height;
        this.width = width;
      }
//   area(){

//        area=this.height*this.width ;

//        }
//   perimeter(){
//       peri=2*(this.height+this.width);
//   }
 // Getter
  get area() {
     return this.calcArea();
   }
  // Method
  calcArea() {
    return this.height * this.width;
  }
  

  }
  
 
  let size = new Rectangle(12,15);
  console.log(size.area)
 






class Tata{

constructor(name,seat){
    this.name=name;
    this.wheels=4;
    this.seats=seat;
    this.airbag="yes";;
    this.sterring="yes";
}


}

let nexon = new Tata("nexon",5);
let tiago=new Tata("tiago",4);
console.log(nexon,tiago)




// Check if a triangle is equilateral, scalene, or isosceles
// Function `findTriangleType()` finds the type of the triangle for given side values by using “==” and “&&” operator in JavaScrip
// Print “Equilateral triangle.” if values for all side1, side2 and side3 are equal.
// Print “Isosceles triangle.” if values for side1 is equal to side2 or side2 is equal to side3
// Else “Scalene triangle.” since values of all sides are unequal.


function findTriangleType(side1,side2,side3){


    if((side1==side2)&&(side2==side3))
    {
        console.log("Equilateral triangle");
    }
    else if((side1==side2)||(side2==side3) && (side1!=side2)||(side2!=side3)){
        console.log("Isosceles triangle");

    }
    else{
        console.log("Scalene triangle.")
    }


}


findTriangleType(10,30,20)