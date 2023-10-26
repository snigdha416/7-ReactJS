
import {Component} from 'react';
  class FirstComponent extends Component {

      render() {

           return( 

           <div className='FirstComponent'>

            <h1>Welcome to FirstComponent class Component...</h1>

           </div>

             );
      }
  }


  class MyComponent extends Component {

    render() {

        return( 

        <div className='MyComponent'>

         <h1>Welcome to MyComponent class Component...</h1>

        </div>

          );
   }
}



  

export default FirstComponent;
export {MyComponent}