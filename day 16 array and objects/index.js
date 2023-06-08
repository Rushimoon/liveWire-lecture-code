// desing pattern of  #
// # # # # # # #
// # # # # # #
// # # # # #
// # # # #
// # # #
// # #
// #

let r=7;
for(let i=r;i>0;i--)
{

  let bag=""
  for(let j=i ;j>0;j-- )
  {
    bag=bag+"# ";
    // bag+="# ";
  }
  console.log(bag);

    
}



// factorial of 10;
// 10*9*8*7*6*5*4*3*2*1
let num=1;
for(let i=10 ;i>=1;i--)
{
   num=num*i;
}
console.log(num);


// arrays 

let car1="volvo"
let car2="ford"
let car3="tata"


let car=["volvo","ford","tata","MS","mandra","ford","tata","MS","mandra","ford","tata","MS","mandra","ford","tata","MS","mandra","ford","tata","MS","mandra","ford","tata","MS","mandra","ford","tata","MS","mandra","ford","tata","MS","mandra","ford","tata","MS","mandra","ford","tata","MS","mandra","ford","tata","MS","mandra","ford","tata","MS","vaibhav"];
// index of arr always starts form 0
let lenArr=car.length;
console.log(lenArr)


let k=0 ;
do{

    console.log(car[k])
  k++;
}while(k<lenArr);
// console.log(car)

let numd=["ewq",3,10];
console.log(numd)
car[0]="hemant";
console.log(car);



