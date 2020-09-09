import React from 'react'
import {
    Form,
    Input,
    InputGroup,
  } from "reactstrap";
import NavBar from '../containers/NavBar';
import { connect } from 'react-redux'
import UserSearchResults from './UserSearchResults';

class UserSearch extends React.Component {

  state = {
    filteredUsers: [],
    allUsers: []
  }
  
  componentDidUpdate(prevProps){
    if (prevProps.userInfo.allUsers !== this.props.userInfo.allUsers) {
    this.setState({
      ...this.state,
      filteredUsers: this.props.userInfo.allUsers.filter(user => user.id !== this.props.userInfo.user.id),
      allUsers: this.props.userInfo.allUsers.filter(user => user.id !== this.props.userInfo.user.id)
    })}
  }

  handleInputChange = e => {
    if (e.target.value === '') {
      this.setState({
        ...this.state,
        filteredUsers: this.props.userInfo.allUsers.filter(user => user.id !== this.props.userInfo.user.id)
      })
    } else {
      this.setState({
        ...this.state,
        filteredUsers: this.state.allUsers.filter(user => user.username.toLowerCase().includes(e.target.value.toLowerCase()))
      })
    }
    console.log(e.target.value)
  }

  render(){
    return(
      <div>
        <NavBar user={this.props.userInfo.user} logout={this.props.logout}/>
        <Form>
          <InputGroup>
            <Input placeholder="Type in user's username..." type="text" onChange={this.handleInputChange}/>
          </InputGroup>
        </Form>
        <UserSearchResults filteredUsers={this.state.filteredUsers}/>
      </div>
    )
}
}

export default connect()(UserSearch)