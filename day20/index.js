console.log("inside");

//arr push() pop() and shift()


let arr=["1","2","3","4","5","6","7","8","9" ];
// arr stores the element in consequent menmory location ;
// arr follows stack DS

let l=arr.length; 

console.log(l);
 arr.push(89)
 arr.push(150)

 console.log("arr.push() ex"+arr);


 arr.pop();
 arr.pop();

 console.log("arr.pop() ex"+arr);

//  arr.shift();
//  arr.shift();
console.log(arr)

// What is Stack data structure
// A stack is a Linear data structure, used to store the data effectively and efficiently.

// It follows Last in First Out(LIFO). Elements are inserted and deleted from top of an stack.


// push : Adds an element to an Stack
// pop : Removes an element from an stack
// top : Returns the top element of an stack


let stk=[10,20,30,40,50,60];

let leng=stk.length

let topp=stk[leng-1];
console.log(topp);

stk.pop();
stk.push(88)
console.log(stk);

arr=["vaibhav","hemant","pratiksha","triveni"];
arr.pop();
arr.pop();
arr.push(56)
arr.push(56)
arr.pop();
arr.push(20);
arr.pop();
arr.push(65);
arr.pop()
arr.push(56)
console.log(arr);
// arr-> 


// Queue
 //  FIFO->first in first out


 let queue=["vaibhav","hemant","pratiksha","triveni","moon","manoj"];

 queue.push("rushikesh");
 queue.shift();
 queue.shift();
 queue.shift();
 queue.push("esh");
 queue.push("rush");


 console.log(queue)  

