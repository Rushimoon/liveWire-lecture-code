// let even=""
// if(arr[i]%2!=0)
// {
//    even+=arr[i];
// }

//         0   1    2  3   4   5
let arr= ["1","0","2","3","4","5"] ;
 
 //% operator give output as 1 if num is odd else if number is even it gives outputn as 0
let l=arr.length;

// val of i =0  1  2  3 4 5 6
          l =6
for(let i=0;i<l;i++){
    
    if(arr[i]%2==0){
        console.log(arr[i]+"  is even")
    
    }else{
        
    console.log(arr[i]+"  is odd")
    }
}

//    j      0   1   2   3    4     
let mat= [ ["a","b","c","d","e"], 
           ["f","g","h","i","j"],
           ["k","l","m","n","o"],
           ["p","q","r","s","t"],
           ["u","v","w","x","y"]]
         //5*5


//         output=a b c d e i m q u v w x y 
let i=0
let j=0
let p=mat[0].length-1
let bag="";
while(j<=p){
 bag=bag+mat[i][j]+" "  //bag- a b c 
 j++ ;
}
i=1;
j=mat.length-2;
while(i<=p && j>=0)
{
    bag=bag+mat[i++][j--]+" "
    
}
i=mat.length-1;
j=1;
while(j<=p){

    bag=bag+mat[i][j]+" "
    j++;
}
console.log(bag)


