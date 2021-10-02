import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import Friends from './Components/Friends'
import Login from './Components/Login'
import Logout from './Components/Logout'
import PrivateRoute from './Components/PrivateRoute'

import './App.css';
import NewFriend from './Components/NewFriends'

function App() {
  return (
    <Router>
    <div className="App">
      
        <h1>Friends App!</h1>
      <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/logout">Logout</Link>
          </li>
          <li>
            <Link to="/protected">Protected Page</Link>
          </li>
        </ul>
      
    
    <Switch>
          <PrivateRoute exact path="/protected" component={Friends} />
          <Route path="/logout" component={Logout} />
          <Route path="/login" component={Login} />
          <Route path="/" component={Login} />    
        </Switch>
        </div>
    </Router>
  );
}
export default App;
