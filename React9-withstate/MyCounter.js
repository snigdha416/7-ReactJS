
import {Component} from 'react'
class MyCounter extends Component {
    
    constructor(){
        super();// unless super() call in constructor , we cannot call this.state

        this.state= {
            count:0
        }
        this.increment = this.increment.bind(this)
    }
    render(){
        return(
            <div className='App'>
                <button style={{color:"green",fontSize:"20px",width:"150px"}} onClick={this.increment}>MyIncrement</button>
                <br/>
                <span style={{fontSize:"50px"}}>{this.state.count}</span>

            </div>
        );
    }
    increment(){
        console.log(this.state.count)
        this.setState({
            count:this.state.count +1
        });
    }
}
 export default MyCounter;