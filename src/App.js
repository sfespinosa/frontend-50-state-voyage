import React from 'react';
import { Route, Switch, withRouter, Redirect, Router } from "react-router-dom";
import { connect } from 'react-redux'
import { handleLoginSignUp, handlePersist } from './actions/userActions'
import LoginSignUp from './components/LoginSignUp'
import LandingPage from './components/LandingPage'
import MainContent from './containers/MainContent'

class App extends React.Component {

  componentDidMount(){
    if(localStorage.token){
      this.props.handlePersist()
      this.props.history.push('/main')
    }
  }

  componentDidUpdate(prevProps){
    if (prevProps.userInfo.token === "" && !!this.props.userInfo.token){
      this.props.history.push('/main')
    }
  }

  requireAuthMain = () => {
    if (localStorage.token){
      return <MainContent />
    } else {
      this.props.history.push('/login')
    }
  }

  render(){
    return (
    <div className='App'>
      <Switch>
        <Route path="/login" render={() => <LoginSignUp login={true} handleSubmit={this.props.handleLoginSignUp} history={this.props.history}/>}/>
        <Route path="/signup" render={() => <LoginSignUp login={false} handleSubmit={this.props.handleLoginSignUp}/>}/>
        <Route path="/main" render={() => this.requireAuthMain()}/>
        <Route exact path="/" component={LandingPage} />
      </Switch>
    </div>
    )}
}

const mapStateToProps = (state) => state

export default connect(mapStateToProps, {handleLoginSignUp, handlePersist})(withRouter(App));
