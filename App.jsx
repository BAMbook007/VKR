import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NaviBar from './Components/Navibar';
import Home from './Home';
import Users from './Users';
import About from './About';


function App() {
  return (
    <>
    <Router>
      <NaviBar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/" component={Users} />
      <Route path="/" component={About} />
    </Switch>
    </Router>
    
    </>
  );
}

export default App;
