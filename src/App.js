import React from 'react';
import { Route, Switch, Redirect, Router } from "react-router-dom";
import { connect } from 'react-redux'
import { handleLoginSignUp, handlePersist } from './actions/userActions'
import LoginSignUp from './components/LoginSignUp'
import LandingPage from './components/LandingPage'
import MainContent from './containers/MainContent'

class App extends React.Component {

  componentDidMount(){
    if(localStorage.token){
      this.props.handlePersist()
    }
  }

  render(){
    if(!!localStorage.token){
      return  <Route path="/main" component={MainContent}/>
    } else {
    return (
    <div className='App'>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/login" render={() => <LoginSignUp login={true} handleSubmit={this.props.handleLoginSignUp}/>}/>
        <Route path="/signup" render={() => <LoginSignUp login={false} handleSubmit={this.props.handleLoginSignUp}/>}/>
        <Route path="/main" component={MainContent}/>
      </Switch>
    </div>
    )}
}
}
const mapStateToProps = (state) => state

export default connect(mapStateToProps, {handleLoginSignUp, handlePersist})(App);
