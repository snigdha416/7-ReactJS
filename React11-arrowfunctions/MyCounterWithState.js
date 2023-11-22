
import {Component} from 'react'
 class MyCounter extends Component {
    // Define initial state in constructor

    constructor() {
          super(); // unless super() call in construcotr , we cannot call this.state
        this.state= {
            count : 0
        }
      //  this.myincrement = this.myincrement.bind(this)
    }
    render(){
        return(
        <div className='App'>

          <button style={{color:"green",fontSize: "20px",width:"150px"}}onClick={this.myincrement}>Increment</button>
               <br/>

               <span style={{fontSize:"50px"}}>{this.state.count}</span>
          </div>
    
)
        }
        myincrement=()=>{
          console.log(this.state.count)
             this.setState( {
                count: this.state.count +1
             } );          
             
        } 
 }

 export default MyCounter;