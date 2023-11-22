import  {Component} from 'react';
import  ReactDOM  from 'react-dom';
import './App.css';
class App extends Component{

  render(){
    return(
      <div className='App'>
          <myDate></myDate>
      </div>
      
    );
  }
}

function myDate(){
  const element =(
    <div className='App'>
      <h1>Hello, World</h1>
      <h2>ToDay  Date is :  {new Date().toLocaleDateString()}</h2>
      <h2>Time Now  : {new Date().toLocaleTimeString()}</h2>
    </div>
  );
  ReactDOM.render(element,document.getElementById('root'));

}
setInterval(myDate,1000);

export default App;
