
import { useState } from "react"
import apiRequest from "./apiRequest"


const Form = () => {
    const API_URL='http://localhost:4000/data'
   
    
   
 

    const addItem = async (name,id,phno,dob,city) => {
        {
       
           const addItems={name:name,id:id,phno:phno,dob:dob,city:city}
           const postOpt=
        {
            method:'POST',
            headers:{
                'Content-Type': 'application/json'},
            body:JSON.stringify(addItems)
        }
       

        const submit= await apiRequest(API_URL,postOpt)
        if(submit==="error"){
            document.getElementById('AlertMsg').classList.add('open-AlertMsg')
        }     
        else
        {
            document.getElementById('pop').classList.add('open-popup')
        }  
      
        return submit;

        
    }
}
   
    const handleSubmit =(e) => {
    
      e.preventDefault()
      const name=document.getElementById('name').value
      const id=document.getElementById('id').value
      const phno=document.getElementById('Phno').value
      const dob=document.getElementById('dob').value
      const city=document.getElementById('city').value
     
      if(name!=="" && id!=="" && phno!=="" && dob!=="" && city!=="")
      {
        let regex = /^[A-Za-z\s]+$/
        let regexid = /^[0-9]+$/;
        let valid=0
        if(regex.test(name))
        {
            valid=valid+1;
            
            document.getElementById('errorConsole').innerHTML="";
        }
        else
        {
            document.getElementById('errorConsole').innerHTML="Name must contains a valid characters"
        }
        if(regexid.test(id))
        {
            valid=valid+1;  
        
        }else
        {
            document.getElementById('errorConsole').innerHTML="id must contains a numeric characters"
        }
        if(regexid.test(phno) && phno.length==10)
        {
            valid=valid+1;  
           
        }else
        {
            document.getElementById('errorConsole').innerHTML="Invalid PhoneNumber"
        }
        if(valid==3)
        {
            addItem(name,id,phno,dob,city)
        }
        
       
            
      }
      else
      {
        document.getElementById('name').placeholder="required"
        document.getElementById('id').placeholder="required"
        document.getElementById('Phno').placeholder="required"
        document.getElementById('dob').placeholder="required"
        document.getElementById('city').placeholder="required"
        document.getElementById('Phno').classList.add('Throwerrorr')
        document.getElementById('name').classList.add('Throwerrorr')
        document.getElementById('id').classList.add('Throwerrorr')   
        document.getElementById('dob').classList.add('Throwerrorr')
        document.getElementById('city').classList.add('Throwerrorr')
    
      }
      
      
      
    }
   
   
   
    return(<div className="form-cont">
    <form className="form">
        <section className="input-cont" >
            <h1>Name</h1>
            <input type="text" id="name" ></input>
            <h1>id</h1>
            <input type="text" id="id" ></input>
            <h1>phonenumber</h1>
            <input type="text" id="Phno" ></input>
            <h1>Dob</h1>
            <input type="date" id="dob" ></input>
            <h1>city</h1>
            <input type="text" id="city"></input>
            <div>
                 <h1 id="errorConsole"></h1>
            </div>

        </section>
        <section className="btn-cont">
            <input type="submit"  onClick={(e)=>handleSubmit(e)}>

            </input>
            <input type="reset">
                
            </input>

        </section>
           
        
        </form></div>
    )

}
export default Form