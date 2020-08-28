/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container, Button } from "reactstrap";
// core components

function LandingPage() {
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

  return (
    <>
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("../assets/img/header.jpg") + ")",
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="content-center brand">
            {/* <img
              alt="..."
              className="n-logo"
              src={require("../assets/img/now-logo.png")}
            ></img> */}
            <h1 className="h1-seo">50 State Voyage</h1>
            <h3>Track states you've been to and establishments you'd like to visit!</h3>
            <Button
                      block
                      className="btn-round"
                      color="info"
                      href="/login"
                      size="lg"
                    >
                      Login
            </Button>
            <Button
                      block
                      className="btn-round"
                      color="info"
                      href="/signup"
                      size="lg"
                    >
                      Create Account
            </Button>
          </div>
          {/* <h6 className="category category-absolute">
            Designed by{" "}
            <a href="http://invisionapp.com/?ref=creativetim" target="_blank">
              <img
                alt="..."
                className="invision-logo"
                src={require("assets/img/invision-white-slim.png")}
              ></img>
            </a>
            . Coded by{" "}
            <a
              href="https://www.creative-tim.com?ref=nukr-index-header"
              target="_blank"
            >
              <img
                alt="..."
                className="creative-tim-logo"
                src={require("./assets/img/creative-tim-white-slim2.png")}
              ></img>
            </a>
            .
          </h6> */}
        </Container>
      </div>
    </>
  );
}

export default LandingPage;
