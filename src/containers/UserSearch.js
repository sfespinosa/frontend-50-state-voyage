import React from 'react'
import {
  CardBody,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Fade
} from "reactstrap";
import NavBar from './NavBar';
import { connect } from 'react-redux'
import UserSearchResults from '../components/UserSearchResults';

class UserSearch extends React.Component {

  state = {
    filteredUsers: [],
    allUsers: [],
    usernameFocus: false,
    fadeIn: false
  }
  
  componentDidMount(){
    this.setState({...this.state, 
      fadeIn: true
    })
  }
  componentDidUpdate(prevProps){
    if (prevProps.userInfo.allUsers !== this.props.userInfo.allUsers) {
      let sortedUsers = this.props.userInfo.allUsers.sort((a,b) => a.username-b.username ? 1 : -1)
    this.setState({
      ...this.state,
      filteredUsers: sortedUsers.filter(user => user.id !== this.props.userInfo.user.id),
      allUsers: sortedUsers.filter(user => user.id !== this.props.userInfo.user.id)
    })}
  }

  handleInputChange = e => {
    if (e.target.value === '') {
      let sortedUsers = this.props.userInfo.allUsers.sort((a,b) => a.username-b.username ? 1 : -1)
      this.setState({
        ...this.state,
        filteredUsers: sortedUsers.filter(user => user.id !== this.props.userInfo.user.id)
      })
    } else {
      this.setState({
        ...this.state,
        filteredUsers: this.state.allUsers.filter(user => user.username.toLowerCase().includes(e.target.value.toLowerCase()))
      })
    }
  }

  render(){
    return(
      <Fade in={this.state.fadeIn}>
      <div className="page-header clear-filter" filter-color="blue">
        <NavBar user={this.props.userInfo.user} logout={this.props.logout}/>
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("../assets/img/bg8.jpg") + ")",
          }}
        ></div>
        <div>
        <Form className="form">
          <CardBody>
            <InputGroup className={"no-border input-lg" + (this.state.usernameFocus ? " input-group-focus" : "")}>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <i className="now-ui-icons users_single-02"></i>
                </InputGroupText>
              </InputGroupAddon>
              <Input
                placeholder='Search by username...'
                type="text"
                onFocus={() => this.setState({...this.state, usernameFocus: true})}
                onBlur={() => this.setState({...this.state, usernameFocus: false})}
                onChange={this.handleInputChange}
                name='username'
                autoComplete='off'
                className='user-search-input'
              />
            </InputGroup>
          </CardBody>
        </Form>
        </div>
        <UserSearchResults filteredUsers={this.state.filteredUsers}/>
      </div>
      </Fade>
    )
}
}

export default connect()(UserSearch)