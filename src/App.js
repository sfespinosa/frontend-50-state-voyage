import React from 'react';
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import { connect } from 'react-redux'
import { handleLoginSignUp, handlePersist, editUserProfile, deleteUser, fetchAllUsers } from './actions/userActions'
import { fetchEstablishmentCollections } from './actions/establishmentCollectionActions'
import { createUserRelationship, deleteUserRelationship } from './actions/userRelationshipActions'
import { fetchAllUsStates } from './actions/usStateActions'
import LoginSignUp from './components/LoginSignUp'
import LandingPage from './containers/LandingPage'
import MainContent from './containers/MainContent'
import ProfilePage from './containers/ProfilePage'
import EstablishmentMap from './containers/EstablishmentMap'
import UserSearch from './containers/UserSearch';
import NotFoundPage from './containers/NotFoundPage';

class App extends React.Component {

  componentDidMount(){
    this.generateScriptTag()
    this.props.fetchAllUsers()
    this.props.fetchEstablishmentCollections()
    this.props.fetchAllUsStates()

    if(!!localStorage.token){
      this.props.handlePersist()
  }
}

  // componentDidUpdate(prevProps){
  //   if (prevProps.userInfo.user !== this.props.userInfo.user) {
  //     this.props.handlePersist()
  //   }
  // }

  generateScriptTag = () => {
    let script = document.createElement('script')
    script.async = true
    script.defer = true
    script.type = "text/javascript"
    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_API_KEY}&libraries=places`
    document.head.appendChild(script)
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
        allUsers={this.props.userInfo.allUsers}
        user={this.props.userInfo.user} 
        editUserProfile={this.props.editUserProfile} 
        logout={this.handleLogout} 
        deleteUser={this.props.deleteUser} 
        establishmentCollection={this.props.establishmentCollection}
        createUserRelationship={this.props.createUserRelationship}
        deleteUserRelationship={this.props.deleteUserRelationship}/>
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

  requireAuthFindUsers = () => {
    if (localStorage.token){
      return <UserSearch 
        userInfo={this.props.userInfo} 
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
        <Route path="/login">
          {!!localStorage.token ? <Redirect to='/main' /> : <LoginSignUp login={true} handleSubmit={this.props.handleLoginSignUp}/>}
        </Route>
        <Route path="/signup">
          {!!localStorage.token ? <Redirect to='/main' /> : <LoginSignUp login={false} handleSubmit={this.props.handleLoginSignUp} usStates={this.props.usStates}/>}
        </Route>
        <Route path="/establishment-map" render={() => this.requireAuthEstablishmentMap()}/>
        <Route path="/profile" render={() => this.requireAuthProfile()}/>
        <Route path="/findusers" render={() => this.requireAuthFindUsers()}/>
        <Route path="/users/:userId" component={() => this.requireAuthProfile()}/>
        <Route path="/main" render={() => this.requireAuthMain()}/>
        <Route exact path="/"> 
          {!!localStorage.token ? <Redirect to='/main' /> : <LandingPage/>}
        </Route>
        <Route component={NotFoundPage}/>
      </Switch>
    </div>
    )}
}

const mapStateToProps = (state) => {
  return {
    userInfo: state.userInfo,
    establishmentCollection: state.establishmentCollectionInfo.establishmentCollection,
    usStates: state.usStatesInfo.usStates
  }
}

export default connect(mapStateToProps, {handleLoginSignUp, handlePersist, editUserProfile, deleteUser, fetchAllUsers, fetchEstablishmentCollections, createUserRelationship, deleteUserRelationship, fetchAllUsStates})(withRouter(App));
