import React from "react";
import { useParams } from 'react-router-dom'

// reactstrap components
import {
  Button,
  Container,
  Fade
} from "reactstrap";

// core components
import NavBar from './NavBar'
import ProfilePageHeader from "../components/ProfilePageHeader";
import EditProfileForm from '../components/EditProfileForm'
import ProfilePageBody from '../components/ProfilePageBody'

function ProfilePage(props) {
  let {userId} = useParams()
  let profileUser = props.allUsers.find(user => user.id.toString() === userId)

  //styling
  const [fadeIn, setFadeIn] = React.useState(false)
  React.useEffect(() => {
    setFadeIn(true)
    document.body.classList.add("profile-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("profile-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);

  // hooks
  const [editProfile, setEditProfile] = React.useState(false)

  const handleEditProfileClick = () => {
    setEditProfile(!editProfile)
  }

  const renderEditProfileButton = () => {
    return (
      <Container>
            <div className="button-container">
              <Button className="btn-round" color="info" size="lg" onClick={()=>handleEditProfileClick()}>
                {editProfile ? 'Close' : 'Edit Profile'}
              </Button>
            </div>
              {editProfile ? <EditProfileForm user={props.user} close={handleEditProfileClick} editUserProfile={props.editUserProfile} deleteProfile={props.deleteUser} logout={props.logout}/> : null}
      </Container>
    )
  }

  const renderFollowUserButton = () => {
    return (
      <Container>
            <div className="button-container">
              <Button className="btn-round" color="info" size="lg" onClick={(e)=>handleFollowingUser(e)}>
                {confirmUserFollowed() ? 'Unfollow' : 'Follow'}
              </Button>
            </div>
      </Container>
    )
  }

  const handleFollowingUser = (e) => {
    e.preventDefault()
    if (e.target.innerText === 'Unfollow') {
      props.user.active_relationships.map((user) => {
          if (user.followed_user_id.toString() === userId) {
          props.deleteUserRelationship(user.id, userId)
        }})
    } else {
    let formData = {
      followed_user_id: userId,
      follower_id: props.user.id
    }
    props.createUserRelationship(formData)
  }
  }

  const confirmCurrentUser = () => {
    if (props.user.id) {
      return userId === props.user.id.toString() 
    }
    return false
  }
  
  const confirmUserFollowed = () => {
    let result = false
    if (props.user.id) { 
      props.user.followed_users.map(user => {
        if (user.id.toString() === userId) {
          result = true
        }
    })}
    return result
  }
  
  return (
    // <Fade in={fadeIn}>
      <div className="wrapper">
        <NavBar user={props.user} logout={props.logout}/>
        <ProfilePageHeader user={profileUser}/>
        <div className="section">
            {confirmCurrentUser() ? renderEditProfileButton() : renderFollowUserButton()}
            <ProfilePageBody confirmCurrentUser={confirmCurrentUser()} profileEstablishmentCollection={props.establishmentCollection.filter(ec => ec.user_id.toString() === profileUser.id.toString())}/>
        </div>
      </div>
    // </Fade>
  );
}

export default ProfilePage;
