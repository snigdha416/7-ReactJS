import { useState } from "react";


function MyForm4() {
  const [myCar, setMyCar] = useState("TATA");

  const handleChange = (event) => {
    setMyCar(event.target.value)
  }

  return (
    <form>
      <select value={myCar} onChange={handleChange}>
        <option value="TATA">TATA</option>
        <option value="Volvo">Volvo</option>
        <option value="Ford">Ford</option>
      </select>
    </form>
  )
}


   export  default  MyForm4;