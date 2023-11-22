import {useState} from 'react'

// React Hook useState() : example 
function  StateHook2(){
   //first element is initial state and the second one a function
   // that is used for updateing the state
     const [age,setage ]=useState(25);
     const [name,setname ]=useState('Ramesh');

       const changeName = () => {
        setname("Kumar");
       }

    return(
        <div className=''>
         <div>

           <p>Name : {name}</p>
           <button onClick={changeName}>SetNewName</button>          

        </div>
        
        <div>

           <p>Age is : {age}</p>
           <button onClick={()=>setage(age+1)}>SetNewAge</button>          

        </div>


        </div>
        
    );
        
    
}
export default StateHook2;