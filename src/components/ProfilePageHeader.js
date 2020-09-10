import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function ProfilePageHeader(props) {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  const renderUserProfile = () => {
    return (
    <Container className='profile-page'>
    <div className="photo-container">
      <img alt="..." src={require("../assets/img/default-avatar.png")}></img>
    </div>
    <h3 className="title">{props.user.username}</h3>
    <p className="category">{props.user.name}<br/>
      Located in {props.user.location}<br/>
      Age: {props.user.age}</p>
    <div className="content">
      <div className="social-description">
        <h2>{props.user.us_states.length}</h2>
        <p>States Visited</p>
      </div>
      <div className="social-description">
        <h2>{50-props.user.us_states.length}</h2>
        <p>States to Visit</p>
      </div>
    </div>
  </Container>
  )}

  return (
    <>
      <div
        className="page-header clear-filter page-header-small"
        filter-color="blue"
      >
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("../assets/img/bg3.jpg") + ")",
          }}
          ref={pageHeader}
        ></div>
          {props.user ? renderUserProfile() : null}
      </div>
    </>
  );
}

export default ProfilePageHeader;
