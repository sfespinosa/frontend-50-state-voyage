import React from 'react';
import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from 'react-redux'
import { handleLoginSignUp, handlePersist, editUserProfile, deleteUser } from './actions/userActions'
import LoginSignUp from './components/LoginSignUp'
import LandingPage from './components/LandingPage'
import MainContent from './containers/MainContent'
import ProfilePage from './containers/ProfilePage'
import EstablishmentMap from './containers/EstablishmentMap'

class App extends React.Component {

  componentDidMount(){
    this.generateScriptTag()

    if(localStorage.token === 'undefined'){
      localStorage.clear()
    }
    if(localStorage.token){
      this.props.handlePersist()
    //   if (this.props.history.location.pathname !== '/profile'){
    //   this.props.history.push('/main')
    }
  }

  generateScriptTag = () => {
    let script = document.createElement('script')
    script.async = true
    script.defer = true
    script.type = "text/javascript"
    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_API_KEY}&libraries=places`
    document.head.appendChild(script)
  }

  componentDidUpdate(prevProps){
    // if (prevProps.userInfo.token === "" && !!this.props.userInfo.token){
    //   if (this.props.history.location.pathname !== '/profile' ){
    //     this.props.history.push('/main')
    //   }}
  }

  requireAuthMain = () => {
    if (localStorage.token){
      return <MainContent logout={this.handleLogout}/>
    } else {
      this.props.history.push('/login')
    }
  }

  requireAuthProfile = () => {
    if (localStorage.token){
      return <ProfilePage 
        user={this.props.userInfo.user} 
        editUserProfile={this.props.editUserProfile} 
        logout={this.handleLogout} 
        deleteUser={this.props.deleteUser} 
        stateCollection={this.props.stateCollection}/>
    } else {
      this.props.history.push('/login')
    }
  }

  requireAuthEstablishmentMap = () => {
    if (localStorage.token){
      return <EstablishmentMap 
        user={this.props.userInfo.user} 
        logout={this.handleLogout} />
    } else {
      this.props.history.push('/login')
    }
  }

  handleLogout = () => {
    localStorage.clear()
    this.props.history.push('/')
  }

  render(){
    return (
    <div className='App'>
      <Switch>
        <Route path="/login" render={() => <LoginSignUp login={true} handleSubmit={this.props.handleLoginSignUp} history={this.props.history}/>}/>
        <Route path="/signup" render={() => <LoginSignUp login={false} handleSubmit={this.props.handleLoginSignUp}/>}/>
        <Route path="/establishment-map" render={() => this.requireAuthEstablishmentMap()}/>
        <Route path="/profile" render={() => this.requireAuthProfile()}/>
        <Route path="/main" render={() => this.requireAuthMain()}/>
        <Route exact path="/" component={LandingPage} />
      </Switch>
    </div>
    )}
}

const mapStateToProps = (state) => {
  return {userInfo: state.userInfo,
  stateCollection: state.stateCollectionInfo.stateCollection}
}

export default connect(mapStateToProps, {handleLoginSignUp, handlePersist, editUserProfile, deleteUser})(withRouter(App));
