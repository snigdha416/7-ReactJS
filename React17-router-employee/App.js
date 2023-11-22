import React from 'react';
import HeaderComponent from './mycomponents/HeaderComponent';
import FooterComponent from './mycomponents/FooterComponent';
import './App.css';
 
import {BrowserRouter as Router, Route, Switch,Link} from 'react-router-dom'
import ListEmployeeComponent from './components/ListEmployeeComponent';

import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';

function App() {
  return (
    <div>
        <Router>
         <HeaderComponent></HeaderComponent>
         <hr/>
         
      <ul>
         <li>
             <Link to="/">ListEmployeeComponent</Link>
         </li>
         <li>
             <Link to="/CreateEmployeeComponent">CreateEmployeeComponent</Link>
         </li>
         <li>
             <Link to="/ViewEmployeeComponent">ViewEmployeeComponent</Link>
         </li>

      </ul>
      <hr/>
       <Switch>
            <Route exact path="/">
               <ListEmployeeComponent></ListEmployeeComponent>
            </Route>
            <Route exact path="/CreateEmployeeComponent">
               <CreateEmployeeComponent></CreateEmployeeComponent>
           </Route>
           <Route exact path="/ViewEmployeeComponent">
               <ViewEmployeeComponent></ViewEmployeeComponent>
           </Route>
           
       </Switch>
       
          <FooterComponent></FooterComponent>  
          <hr/>
       </Router>
    </div>
    
  );
}

export default App;