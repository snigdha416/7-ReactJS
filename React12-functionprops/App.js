
import './App.css';
import PersonCard from './PersonCard';

function App() {
  const personCardsArr=[
    {
     firstName: "Ramesh",
     lastName: "K",
     age: 40,
     job: "Technical"
 
    },
    {
     firstName: "Ravi",
     lastName: "K",
     age: 38,
     job: "HR"
    },
    {
     firstName: "Raju",
     lastName: "N",
     age: 33,
     job: "Technical"
 
    }
 
   ];


 const personCards = personCardsArr.map((item,pos) => {
    return(
      <PersonCard key={pos} firstName={item.firstName}lastName={item.lastName}age={item.age}job={item.job}/>
    )
 })
         // key{pos} removes consle warning related key prop
  return (
    <div className="App">
      {personCards}
     
    </div>
  );
}

export default App;
