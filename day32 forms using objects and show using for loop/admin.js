let data=JSON.parse(localStorage.getItem("data"))

console.log(data)
let div=document.getElementById("div_table");
let table=document.createElement("table");
for(let i=0;i<data.length;i++)
{ 
  let tdFN=document.createElement("td");
  tdFN.innerText=data[i].firstName
  let tdLN=document.createElement("td");
  tdLN.innerText=data[i].lastName
  let tdE=document.createElement("td");
  tdE.innerText=data[i].Email
  let tdP=document.createElement("td");
  tdP.innerText=data[i].password
  let tdM=document.createElement("td");
  tdM.innerText=data[i].mobile
   let table_Row=document.createElement("tr");
   table_Row.append(tdFN,tdLN,tdE,tdP,tdM)
   table.append(table_Row)

}
div.append(table);
