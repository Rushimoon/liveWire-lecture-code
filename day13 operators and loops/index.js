const pi =3.14;
// pi=23;  
console.log(pi);


let x=20;
x=x+10;
console.log(x);
x+=10;
console.log(x);

let q=30;
let w=30;

// q=w;
// q=30;
console.log(q);
console.log(q===w);

// not equALS TO 

q=30;
w=30;
console.log(q==w);
//false
console.log(q!=w);
// greater than and less than
console.log(q>w);//f
console.log(q<w);//t
// greater than equals to
console.log(q,w);//t
console.log(q<=w);//t



// logical AND  &&
//   A     B     result
// true  true    true
// flase  true   false
// true  false    false
// false  false    false

// logical OR ||
//   A     B     result
// true  true    true
// flase  true   true
// true  false    true
// false  false    true

// logical NOt !
//      B     result
//     true    false
//    false   true

q=50;
w=30;

if(q>w){
console.log("Q bada hai w se");
if(true){
console.log("inside q");
}
else{

}

}else{
    console.log("Q chota hai w se");
}
