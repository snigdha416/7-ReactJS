import {useState} from 'react'

// React Hook useState() : example 
function  StateHook1(){
    
   //first element is initial state and the second one a function
   // that is used for updateing the state
     const [count,setcount ]=useState(0);
     const [mycount,setmycount]=useState(0);
  
    return(
        <div>

            <p>Button Clicked {count} times</p>

            <button onClick={ ()=> setcount(count+1)  }>ClickeMe </button>
          

        </div>
    )
        
    
}
export default StateHook1;