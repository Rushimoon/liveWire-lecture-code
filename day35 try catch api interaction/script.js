function abc(){
    let name_value=document.getElementById("name").value;
    let last_name=document.getElementById("lname").value;
    let age=document.getElementById("age").value;


    try {

        if(age>=18){
            alert(`your first name is ${name_value} your last name ${last_name}your age is${age} and congo!!!!!!!!!!!!!!!! you are eligilbl  to drive `);
        }else
        {
            throw " bhai phle 18 ka to ho ja gadi baad me chalana "
        }
       
      }
      catch(err) {
        alert(err)
      }
      finally{
        alert("thk for visiting nagpur RTO")
      }

   
}

