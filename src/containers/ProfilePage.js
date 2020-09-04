import React from "react";
import { useParams } from 'react-router-dom'

// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
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
  const [pills, setPills] = React.useState("2");
  React.useEffect(() => {
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
              <Button className="btn-round" color="info" size="lg" onClick={()=>handleFollowingUser()}>
                Follow
              </Button>
            </div>
      </Container>
    )
  }

  const handleFollowingUser = () => {
    let formData = {
      followed_user_id: userId,
      follower_id: props.user.id
    }
    props.createUserRelationship(formData)
  }

  const confirmCurrentUser = () => {
    if (props.user.id) {
      return userId === props.user.id.toString() 
    }
    return false
  }

  
  return (
    <>
      <div className="wrapper">
        <NavBar user={props.user} logout={props.logout}/>
        <ProfilePageHeader user={profileUser}/>
        <div className="section">
            {confirmCurrentUser() ? renderEditProfileButton() : renderFollowUserButton()}
            <ProfilePageBody profileEstablishmentCollection={props.establishmentCollection.filter(ec => ec.user_id == profileUser.id)}/>
            {/* <h3 className="title">About me</h3>
            <h5 className="description">
              An artist of considerable range, Ryan — the name taken by
              Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs
              and records all of his own music, giving it a warm, intimate feel
              with a solid groove structure. An artist of considerable range.
            </h5>
            <Row>
              <Col className="ml-auto mr-auto" md="6">
                <h4 className="title text-center">My Portfolio</h4>
                <div className="nav-align-center">
                  <Nav
                    className="nav-pills-info nav-pills-just-icons"
                    pills
                    role="tablist"
                  >
                    <NavItem>
                      <NavLink
                        className={pills === "1" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("1");
                        }}
                      >
                        <i className="now-ui-icons design_image"></i>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={pills === "2" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("2");
                        }}
                      >
                        <i className="now-ui-icons location_world"></i>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={pills === "3" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("3");
                        }}
                      >
                        <i className="now-ui-icons sport_user-run"></i>
                      </NavLink>
                    </NavItem>
                  </Nav>
                </div>
              </Col>
              <TabContent className="gallery" activeTab={"pills" + pills}>
                <TabPane tabId="pills1">
                  <Col className="ml-auto mr-auto" md="10">
                    <Row className="collections">
                      <Col md="6">
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("../assets/img/bg1.jpg")}
                        ></img>
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("../assets/img/bg3.jpg")}
                        ></img>
                      </Col>
                      <Col md="6">
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("../assets/img/bg8.jpg")}
                        ></img>
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("../assets/img/bg7.jpg")}
                        ></img>
                      </Col>
                    </Row>
                  </Col>
                </TabPane>
                <TabPane tabId="pills2">
                  <Col className="ml-auto mr-auto" md="10">
                    <Row className="collections">
                      <Col md="6">
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("../assets/img/bg6.jpg")}
                        ></img>
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("../assets/img/bg11.jpg")}
                        ></img>
                      </Col>
                      <Col md="6">
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("../assets/img/bg7.jpg")}
                        ></img>
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("../assets/img/bg8.jpg")}
                        ></img>
                      </Col>
                    </Row>
                  </Col>
                </TabPane>
                <TabPane tabId="pills3">
                  <Col className="ml-auto mr-auto" md="10">
                    <Row className="collections">
                      <Col md="6">
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("../assets/img/bg3.jpg")}
                        ></img>
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("../assets/img/bg8.jpg")}
                        ></img>
                      </Col>
                      <Col md="6">
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("../assets/img/bg7.jpg")}
                        ></img>
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("../assets/img/bg6.jpg")}
                        ></img>
                      </Col>
                    </Row>
                  </Col>
                </TabPane>
              </TabContent>
            </Row> */}
          {/* </Container> */}
        </div>
      </div>
    </>
  );
}

export default ProfilePage;
