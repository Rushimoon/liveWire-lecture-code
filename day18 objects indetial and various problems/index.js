 // post increment         k=6,5
 let k=5
 console.log("post increment")
 console.log(k++); //5
 //post decement
 console.log("post decement")
 console.log(k--);//6



 // pre increment 
 console.log("pre increment")
 console.log(++k);//6
 //pre decrement
 console.log("pre decrement")
 console.log(--k);//5
 
 
 
 
 
 
 let mat = [["a","b","c"],
            ["d","e","f"],
            ["g","h","i"]]

//output :- a b c e g h i
//   i j
// a-0 0
// b-0 1
// c-0 2
//    i j
// c- 0 2
// e- 1 1
// g- 2 0

// g- 2 0
// h- 2 1
// i- 2 2

let i=0
let j=0

let bag="";
while(j<=2){
 bag=bag+mat[i][j]+" "  //bag- a b c 
 j++ ;
}
i=1;
j=1;
while(i<=2 && j>=0)
{
    bag=bag+mat[i++][j--]+" "
    
}
i=2;
j=1;
while(j<=2){

    bag=bag+mat[i][j]+" "
    j++;
}
console.log(bag)


let obj={
    name:"vaibhav",
    age:25,
    address:"mainsh nagar",
    mobile:9158463218,
    bg:"o+ve"
}
console.log(obj)
console.log(obj["name"]);
console.log(obj.name);


let myObj = {
    name:"John",
    age:30,
    cars: {
      car1:"Ford",
      car2:"BMW",
      car3:"Fiat"
    }
  }
  let x=myObj["cars"]
  let y=x["car2"];
  console.log(y)

              //     0  1  2  3  4
// traverse the arr [10,20,30,40,50]
// and  mul all the elements with 5
//

let arr= [10,20,30,40,50] ;
let aleng=arr.length ;

for(let i=0;i<aleng;i++){

    arr[i]=arr[i]*5
}

//[50,100,150..]
console.log(arr);