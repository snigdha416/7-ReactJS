import {useState} from 'react'
import {useEffect} from 'react'
//Returns a stateful value, and a function to update it.
//@version — 16.8.0

function UseEffectHook(){
    
   const [count ,setCount] = useState(0);

   useEffect(  ()=> {
      setTimeout(()=> {
           setCount((count) => count + 1);
   } ,1000);
});
  return <h1> I have rendered {count} times !</h1>  
}
export default UseEffectHook;