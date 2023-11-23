import logo from './logo.svg';
import './App.css';
function App() {
  const person = {
    firstName:"Ramesh",
   lastName:"K",
   job:"Techinical Software Eng"
  }
  const mystyles = {
    margin : '28px',              
    padding :'28px',
    boxSizing : 'border-box',
    borderRadius : '16px',
    boxShadow :'0  8px 20px red' 
  }
  
  return (
    <div className="App">
     
       <div style = {mystyles}>
          <h2>FirstNmame : {person.firstName}</h2>
         <h2>lastName : {person.lastName}</h2>
         <h2>JOB : {person.job}</h2>
       </div>
    </div>
  );
}
export default App;
