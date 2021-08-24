import React ,{useState} from 'react'
import "./signup.css"
import {  useHistory } from "react-router-dom";


export default function Signup() {
    const [email ,setEmail] =useState("");
    const [password ,setPassword] =useState("");
    const [confirmPassword ,setConfirmPassword] =useState("");
    const [firstname ,setFirstname] =useState("");
    const [lastname ,setLastname] =useState("");
    const history=useHistory();

    function submit(e){
      e.preventDefault();  
      if(!firstname || firstname.length<3)
        return alert("firstname should  be at least 3 characters long");
      if(!lastname || lastname.length<3)
        return alert("lastname should  be at least 3 characters long "); 
      if(!email)
       return  alert("email cannot be empty"); 
    //   else if(!/\s+@\S+\.\S+/.test(email))
    //    return  alert("email is invalid");  
      if(!password || password.length<6 || password.length>6)  
       return  alert("password should be 6 character long");
      if(!confirmPassword || confirmPassword.length<6 || confirmPassword.length>6) 
       return alert("re-enter password should be 6 character long");
      if(password !== confirmPassword)
       return  alert("password did not match with re-enter password") 
      
      alert("you signup successfully");  
      history.push("/dashboard");
    }

    return (
        <>
            <div className="container">
             <form className="signupform">
               <div className="first">
                 <label className="label"> First name </label>
                  <input type ="text"  className="input"
                   onChange={(e) =>setFirstname(e.target.value)}
                  />  
               </div>  
               <div className="last">
                  <label className="label"> Last Name </label>
                  <input type ="text" className="input" 
                   onChange={(e) =>setLastname(e.target.value)}
                  />   
              </div> 
               <div className="email">
                  <label className="label"> Email </label> 
                  <input type ="text"  className="input"
                   onChange={(e) =>setEmail(e.target.value)}
                  />   
                </div> 
                <div className="password">
                  <label className="label"> password  </label>   
                  <input type ="password" className="input"
                   onChange={(e) =>setPassword(e.target.value)}
                  />  
                </div> 
                <div className="re-enterpass">
                  <label className="label">Re-enter Password </label>   
                  <input type ="password"  className="input"
                    onChange={(e) =>setConfirmPassword(e.target.value)}
                  />   
                </div>
                <div className="button"> 
                    <button id="but" onClick={submit}> Sign Up </button>    
                </div>
            </form>   
            </div>
        </>
    )
}
