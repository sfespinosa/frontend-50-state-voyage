import React from "react";

// reactstrap components
import { Container, Button, Fade } from "reactstrap";

// core components
function LandingPage() {
  let pageHeader = React.createRef();
  const [fadeIn, setFadeIn] = React.useState(false)

  React.useEffect(() => {
    setFadeIn(true)
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

  return (
    <Fade in={fadeIn}>
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("../assets/img/login.jpg") + ")",
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="content-center brand">
            <img
              alt="website-logo"
              className="n-logo"
              src={require("../assets/img/50-state-voyage-logo.png")}
            ></img>
            <h3>Track where you've been and where you want to go!</h3>
            <Button
                      className="btn-round"
                      color="info"
                      href="/login"
                      size="lg"
                    >
                      Login
            </Button>
            <Button
                      className="btn-round"
                      color="info"
                      href="/signup"
                      size="lg"
                    >
                      Create Account
            </Button>
          </div>
        </Container>
      </div>
    </Fade>
  );
}

export default LandingPage;
