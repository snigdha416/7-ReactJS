
import {BrowserRouter as Router ,Route,Switch} from 'react-router-dom';
import {Link} from 'react-router-dom';
  

import Home from './Home';
import Dashboard from './Dashbord';
import About from './About';

import './App.css';

function App() {
  return (
    <div>
    <Router>
      
         
          <ul>
             <li>
                 <Link to="/">Home-Ram</Link>
             </li>
             <li>
                 <Link to="/About">About-Abc</Link>
             </li>
             <li>
                 <Link to="/Dashbord">Dashbord</Link>
             </li>

          </ul>
          <hr/>
           <Switch>
                <Route exact path="/">
                   <Home></Home>
                </Route>
                <Route exact path="/About">
                   <About></About>
               </Route>
               <Route exact path="/Dashbord">
                   <Dashboard></Dashboard>
               </Route>
               
           </Switch>
          

           </Router>

           </div> 
   
  );
}

export default App;
