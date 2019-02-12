import React, { Component } from 'react';
import{BrowserRouter as Router, Route, Link, NavLink} from 'react-router-dom';
import SignUpForm from './pages/SignUpForm';
import SignInForm from './pages/SignInForm';
import './App.css';
import Dom from 'material-ui/utils/dom';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <div className = "App_Aside"></div>
        <div className = "App_Form">
          <div className = "PageSwitcher">
            <NavLink to  = "/sign-in" activeClassName = "PageSwitcher_Item--Active" className = "PageSwitcher_Item">Sign In</NavLink>
            <NavLink exact to = "/sign-up" activeClassName = "PageSwitcher_Item--Active" className = "PageSwitcher_Item">Sign Up</NavLink>
          </div>

          <div className = "Form Title">
            <NavLink to = "/sign-in" activeClassName = "FormTitle_Link--Active" className = "FormTitle_Link">Sign In</NavLink> or <NavLink exact to = "/sign-up" activeClassName = "FormTitle_Link--Active" className = "FormTitle_Link">Sign Up</NavLink>
          </div>

          <Route exact path = "/sign-up" component ={SignUpForm}>
          </Route>
          <Route path = "/sign-in" component={SignInForm}>
            <h1>Sign in</h1>
          </Route>
        </div>
       

      </div>
      </Router>
    );
  }
}

export default App;
