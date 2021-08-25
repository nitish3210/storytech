import React, {useEffect,useState} from 'react'
import bootstrap from 'bootstrap'
import { employee } from './data';
import "./card.css"

export default function DashBoard() {
     
    // const [data, setData] = useState(employee);
    
    // useEffect(()=>{
    //     setData(employee);
    //     console.log(data);  
    //  },[]);

    

    return (
        <div>
            <div className ="header">
             <h1>DASHBOARD</h1> 
           </div>
         <div className ="employeecard">
             
           {employee.map((item ,i)=> {
           console.log(item.employee_name);   
            return ( 
              <div className="cards " key={i}> 
                  <div class="item" >Title :{item.employee_name}</div>
                  <div class="item">Age    :{item.employee_age}</div>
                  <div class="item">Salary :{item.employee_salary}</div>
             </div>
             );  
        }) }

          </div>   
         
         </div>
        
    )
}

