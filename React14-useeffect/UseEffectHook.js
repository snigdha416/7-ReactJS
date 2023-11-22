import {useState} from 'react'
import {useEffect} from 'react'
// React Hook useState() : example 
function  UseEffectHook1(){
   //first element is initial state and the second one a function
   // that is used for updateing the state
     const [count,setcount ]=useState(0);

     useEffect(  ()=>{

           console.log("Component update +useEffect... ");
           document.title ='Ram' +  count+'times '
     } );


    return(
        <div>

            <p>UseEffectHook1 : clicked{count} times</p>

            <button onClick={ ()=> setcount(count+1)  }>ClickeMe </button>
          

        </div>
    )
        
    
}
export default UseEffectHook1;