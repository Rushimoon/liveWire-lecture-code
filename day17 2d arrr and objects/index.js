let arr=["car","bike", "elephant","horse","cow","goat"]
// to print verticlewe
//length is always one point greatern than length of arr ;
//printing the arr vertically 
// for(let i=0;i<arr.length;i++ )
// {
//     console.log(arr[i]);
// }
//printing the arr horiz

//let bag="";
// arr=["car","bike", "elephant","horse","cow","goat"]
// let bag="";
// for(let i=0;i<arr.length;i++ )
// {    
//     bag=bag+arr[i]+" ";
    
   
// }
// console.log(bag);





// 2d array

let collection=[["a","b","c"],
                ["d","e","f"],
                ["g","h","i"],
                ["j","k","l"]];

                // console.log(collection[0][2]);
     

               //output  // a b c d e f g i j k l 
        
   
               
               
let bag=""
for(let i=0;i<collection.length;i++){

   for(let j=0;j<3;j++)
   { 
     bag=bag+collection[i][j]+" ";
   }


}
console.log(bag);


// objects in js
// key and values


// let obj={
//     key:"values",
//     key2:8,
//     key3:[name,mobile],
//     key4:obj2={
//         key:"values",
//         key2:8
//     }
// };
// detials of person

let per=["vaibhv","narn",25,"mainsh",65]

let obj={
    fname:"hemant",
    lname:"ghor",
    age:25,
    add:"hingna"
}
console.log(obj.age)


         //    0 1 2 3 4
// pattern   0 * * * * * 
        //   1 *       *
        //   2 *       *
        //   3 *       *
        //   4 * * * * *


       
        for(let i=0;i<5;i++)
        {  let bag="";
            
             if(i==0 || i==4)
             {
                for(let j=0;j<5;j++)
                {
                    bag=bag+"* ";
                }
             }
             else if(i==1||i==2||i==3)
             {
                for(let j=0;j<5;j++)
                {
                   if(j==1 ||j==2||j==3)
                   {
                    bag=bag+"  ";
                   }else{
                    bag=bag+"* ";
                   }
                }
             }
             console.log(bag);

             

        }

       