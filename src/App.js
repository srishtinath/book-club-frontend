import React, { Component } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

import NavBar from "./components/NavBar";
import UserHome from './components/UserHome';
import MyClubs from './components/MyClubs';
import Books from './components/Books'


class App extends Component {
  
  render() { 
    return ( 
      <BrowserRouter>
      <div>
        <nav>
          <NavBar />
        </nav>

        <div className="body-content">
          <Switch>
              <Route path="/home" component={UserHome} />
              <Route path="/clubs" component={MyClubs} />
              <Route path="/books" component={Books} />
              <Route component={UserHome} />
        </Switch>
        </div>
      </div>
      </BrowserRouter>
     )
  }
}
 
export default App;