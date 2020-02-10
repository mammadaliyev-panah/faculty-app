import React from "react";
import Navi from "../navi/Navi";
import Dashboard from "./Dashboard";
import TechWarriors from "../techWarriors/TechWarriors"
import {Switch, Route} from 'react-router-dom';
import NewStudentForm from "../addNewStudent.js/NewStudentForm"
import NotFound from "../notfound/NotFound";
function App() {
  return (
    <div className="container">
      <Navi />
      <Switch>
        <Route exact path = '/'  component={Dashboard}/>
        <Route  path = "/techWarriors" component={TechWarriors}/>
        <Route path="/newStudentForm" component={NewStudentForm}/>
        
        <Route component={NotFound}/>
        
      </Switch>   
    </div>
  );
}
export default App;
