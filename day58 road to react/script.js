// arrow functions
setTimeout(()=>{
console.log("hi i am set time out")
},3000);

let myfun=()=>{
console.log("inside");
}
myfun()
let second=()=>{
    console.log("insoide seconf fun")
}
second()

let ss= (kkr,kkr1)=>{
    console.log(kkr,kkr1);
}

ss("thi is kkr", "this is second kkkr")

//destru

// let arr=[10,20,30]
// chote=arr[0];
// madhla=arr[1];
// bada=arr[2];

let [chote,madhla,bada]=[40,50,60];
console.log(chote,madhla,bada)

// let expense=[123,234,345,65434,24,2367,214,567,2354,5,7,234235,3465,7]
let [a,b,c,s,z,p,w]=[123,234,345,65434,24,2367,214,567,2354,5,7,234235,3465,7];
console.log(a,b,c)
console.log(s,z)
console.log(p,w)
// console.log(rest)
let arrrr=[8,7,123,234,345,65434,24,2367,214,567,2354,5,7,234235,3465];
console.log(arrrr.indexOf(7))
console.log(arrrr.lastIndexOf(7))



//ternary operator
// condition ? exprIfTrue : exprIfFalse

function tellme(n){
    return n>10 ? "n is greater than 10" : "n  is smaller than 10"
}


console.log(tellme(20))

let arr=["ford","ns220","activa"];
// let car=arr[0];
// let bike=arr[1];
// let mopet=arr[2];
let [qweqwe,apple]=["ford","ns220","activa"]
console.log(apple)
// let [car,bike,mopet]=arr;
let mynewParking=[...arr,"tata"];
 console.log(mynewParking)