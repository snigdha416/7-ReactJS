import {useState} from 'react'
import {useEffect} from 'react'
//Returns a stateful value, and a function to update it.
//@version — 16.8.0

function UseEffectHook1(){
    
   const [count ,setCount] = useState(0);
   const [calculation,setCalculation] = useState(0);

 useEffect(()=> {
   setCalculation(()=> count * 2);
 },[count]); 

return (
 <>
   <p> Count : {count}</p>
   <button onClick={ ()=> setCount((c) =>c+1)}>Cal +</button>
   <p>Calculation : {calculation}</p>
 </>
 );
}      

export default UseEffectHook1;