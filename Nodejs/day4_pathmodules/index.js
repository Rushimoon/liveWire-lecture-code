const path = require('path');
const add="C:/Users/Rushikesh moon/Desktop/livewire git/liveWire-lecture-code/Nodejs/day4_pathmodules/index.js";

console.log(path.basename("C:/Users/Rushikesh moon/Desktop/livewire git/liveWire-lecture-code/Nodejs/day4_pathmodules/index.js"))     
console.log(path.dirname("C:/Users/Rushikesh moon/Desktop/livewire git/liveWire-lecture-code/Nodejs/day4_pathmodules/index.js"))  
let alldata=path.parse(add);


console.log(alldata.name);
