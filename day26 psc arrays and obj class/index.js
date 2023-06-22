let obja={} 
        
let alpha=["a","b","c","d","e","f"]
for(let i=0;i<alpha.length;i++){
    obja[i+1]=alpha[i];
}
console.log(obja)


// palendrome aabbaa


// two pointers
function findpal(str){
    let p1=0;
    let p2=str.length-1;
    while(p1<p2){
    
      if(str[p1]!=str[p2])
      {
        return false
      }
      p1++;
      p2--;
    }
    return true

}

console.log(findpal("qqwetewqq"))




