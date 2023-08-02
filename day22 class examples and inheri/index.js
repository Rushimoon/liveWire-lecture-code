
class Car {
    constructor(brand,founder) {
      this.carname = brand;
      this.founder=founder;
    }
    present() {
      return 'I have a ' + this.carname;
    }
  }
  
  class Model extends Car {
    constructor(brand,founder, mod) {
      super(brand,founder);
      this.model = mod;
    }
    show() {
      return this.present() + ', it is a ' + this.model;
    }
  }

  
  class Truck extends Car{
       constructor(wh,lc,ml,hy,brandname,fname){
        super(brandname,fname);
        this.wheels=wh;
        this.loadc=lc;
        this.milage=ml;
        this.hydro=hy;
       }
  }
  
 let  mycar = new Model("Ford","HF","Mustang");
 console.log(mycar)

 let mytruck = new Truck("10","7ton","5kmpl","yes","TATA","JTATA");
 console.log(mytruck);

//  design a CLass for a school where school name is "montfort" and school address is "Nagpur"
//  design a class for students where which includes student name , rollno,and class , english marks , hindi , sci and sst marks 
 
 
//  the student obj should include name of school and address  
class School{
  constructor(schoolN,address)
{
    this.schoolN=schoolN
    this.address=address
   
}
}


//  let scl = new School("montfort","nagpur");
//  console.log(scl);

 class Student extends School{
    constructor(SName,RollN,Sclass,Emarks,SciMarks,Hindi,sst,scln,scla){
        super(scln,scla)
        this.SName=SName;
        this.RoolN=RollN;
        this.class=Sclass;
        this.Emaks=Emarks;
        this.SciMarks=SciMarks;
        this.Hindi=Hindi;
        this.sst=sst;
    }
 }
 
 let stuobj= new Student("vaibhav","25","10","90","75","89","78","montfort","nagpur");
 console.log(stuobj)





