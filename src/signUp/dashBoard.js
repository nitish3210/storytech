import React, {useEffect,useState} from 'react'
import bootstrap from 'bootstrap'

export default function DashBoard() {
     
    const [employee,setEmployee] = useState([]);

    // const getdata=async () => {
    //     const res= await fetch('https://dummy.restapiexample.com/api/v1/employees')
    //     // console.log(await res.json());
    //     setEmployee(await res.json());
    //     console.log(employee);
        
    // }
     
    useEffect(()=>{
        // getdata(); 
        fetch('https://dummy.restapiexample.com/api/v1/employees')
        .then(res =>res.json())
        .then (res => {
            console.log(res);
            setEmployee(res)
        })
        console.log(employee);
      
     },[]);

    const displaydata= () =>{
        employee["data"].map((data ,i)=> {
            <div class="card"
            style={{
                width :"18rem" ,
                background: 'yellow'
            }}>
              <ul class="list-group list-group-flush">
                 <li class="list-group-item">{data[i].employee_name}</li>
                 <li class="list-group-item">{data[i].employee_age}</li>
                 <li class="list-group-item">{data[i].employee_salary}</li>
             </ul>
           </div>  
        })
    }

    return (
        <div>
           <div className ="employeecard"> 
            { employee.lenght ? displaydata() : <div>  sorry no out put  </div> }
            
          </div>
        </div>
    )
}
