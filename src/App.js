import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import LoginSignUp from './components/LoginSignUp'
import LandingPage from './containers/LandingPage'

class App extends React.Component {

  render(){
    return (
    <BrowserRouter>
    <Switch>
        <Route exact path="/" render={() => <LandingPage />} />
        <Route path="/login" render={() => <LoginSignUp login={true} />}/>
        <Route path="/signup" render={() => <LoginSignUp login={false} />}/>
    </Switch>
  </BrowserRouter>
    )}
}

export default App;
