import React from "react";

// reactstrap components
import { Jumbotron, Button } from "reactstrap";

// core components
function NotFoundPage() {
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
            backgroundImage: "url(" + require("../assets/img/login.jpg") + ")",
          }}
          ref={pageHeader}
        ></div>
        <div className="content-center brand">
        <Jumbotron>
        <h1 className="display-5">404 - Page Not Found</h1>
        <hr className="my-2" />
        <p>Return to the main page by clicking below</p>
        <p className="lead">
          <Button color="info" href='/main'>Go Back</Button>
        </p>
      </Jumbotron>
      </div>
      </div>
    </>
  );
}

export default NotFoundPage;
