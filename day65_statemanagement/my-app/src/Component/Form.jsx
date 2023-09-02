import { useState } from "react";

function Form(){
    const [inputs, setInputs] = useState({});
    const [array,setArray] =useState([]);
    console.log(array)
  const handleChange = (event) => {
    console.log(event);
    const name = event.target.name;
    const value = event.target.value;
    // console.log(name+" "+value)
    setInputs(values => ({...values, [name]: value}))
    // console.log(inputs)

  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs)
    setArray(values => [...array,inputs] ) ;
    
   setInputs({});
    // alert(inputs);
  }
  console.log(array)
  
    return(
        <form onSubmit={handleSubmit}>
        <label>Enter your name:
        <input 
          type="text" 
          name="username" 
          value={inputs.username || ""} 
          onChange={handleChange}
        />
        </label>
        <label>Enter your age:
          <input 
            type="number" 
            name="age" 
            value={inputs.age || ""} 
            onChange={handleChange}
          />
          </label>
          <label>Enter your mobile Number:
          <input 
            type="number" 
            name="mobileNumber" 
            value={inputs.mobileNumber || ""} 
            onChange={handleChange}
          />
          </label>
          <label>Enter your address:
          <input 
            type="text" 
            name="address" 
            value={inputs.address || ""} 
            onChange={handleChange}
          />
          </label>
          
          <input type="submit" />
      </form>
    )
}
export default Form ;