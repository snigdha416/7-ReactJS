
import {useState} from "react";
function MyForm2() {

   const [name,setName] = useState("");
    

    return(
      <form>
         <label>Enter your Name :
              <input type="text" value={name} onChange={(e) =>setName(e.target.value) }/>

         </label>
      </form>

    )
}

export default MyForm2;