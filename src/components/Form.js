import React, { useState } from "react";

function Form() {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Henry");
  const [submittedData, setSubmittedData] = useState([]); 

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  function handleSubmit(event){
  event.preventDefault();
  const formData = { 
    firstName: firstName , 
    lastName: lastName
  };
   const dataArray = [...submittedData,formData]
   setSubmittedData(dataArray);
  setFirstName("");
  setLastName("");
}
 
const dataList = submittedData.map((data,index) => {
 return (
   <div key={index}>
     {data.firstName} {data.lastName}
   </div>
 )
})

  return (
    <div>
    <form onSubmit = {handleSubmit}>
      <input type="text" onChange={handleFirstNameChange} value={firstName} />
      <input type="text" onChange={handleLastNameChange} value={lastName} />
      <button type="submit">Submit</button>
    </form>
    <h3> Form Submissions</h3>
    {dataList}
    </div>
  );
}

export default Form;
