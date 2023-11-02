
import {Component} from 'react';
import FirstComponent from './FirstComponent';
import { MyComponent } from './FirstComponent';
  class App extends Component {

      render() {

           return( 

           <div className='App'>

            <h1>Welcome to App class Component...</h1>
            <FirstComponent></FirstComponent>
            <MyComponent></MyComponent>
           </div>

             );


      }


  }


export default App;
