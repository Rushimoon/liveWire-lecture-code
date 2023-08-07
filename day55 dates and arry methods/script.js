let fruits = ["Banana", "Orange", "Apple", "Mango"];
// // to cal leng
// console.log(fruits.length);
// //The JavaScript method toString() converts an array to a string of (comma separated) array values.
// console.log(fruits.toString());
// //The join() method also joins all array elements into a string.
// //It behaves just like toString(), but in addition you can specify the separator:
// console.log(fruits.join("   "));
// //Popping and Pushing
// fruits.unshift("Kiwi")
// fruits.unshift("grapes")
// console.log(fruits)
// //delete
// delete fruits[2];
// console.log(fruits)
// let arr=[]
// console.log(fruits,arr);
// arr.push(fruits.pop());
// console.log(fruits,arr);
// arr.push(fruits.pop());
// console.log(fruits,arr);
// fruits.pop();
// console.log(fruits,arr);

// fruits.push(arr.pop());
// console.log(fruits,arr);
// fruits.push(arr.pop());
// console.log(fruits,arr);

// // let veg=["bhindi","palak","aalo","tamatar"];
// // fruits=fruits.concat(veg);
// // console.log(fruits)
// ///////////////////////////////////////////////
// fruits.push("qweqwe")
// fruits.push("123213")
// fruits.push("qw234e")
// fruits.push("asfg")
// console.log(fruits)
// ////////////////////////////////////////////////////////////////
// // fruits.splice(2,5,"babnanbaan","watermelon")
// // console.log(fruits);
// let arrr=fruits.slice(
//     3
// );
//  console.log(arrr);


let num=[4,5,6,3,8,6,19,2342,543634,123,2,3546,4,2342];
// num.sort();
//ascending
// console.log(num);
// num.sort(function(a,b){
// return a-b
// })
//decending
num.sort(function(a,b){
return b-a
})
console.log(num)
// fruits.sort()
//     console.log(fruits)
fruits.reverse()    
num.reverse()
console.log(fruits)
console.log(num)