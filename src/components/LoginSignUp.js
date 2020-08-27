import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Col,
} from "reactstrap";

function LoginSignUp(props) {

  const [usernameFocus, setUsernameFocus] = React.useState(false);
  const [passwordFocus, setPasswordFocus] = React.useState(false);
  const [nameFocus, setNameFocus] = React.useState(false);
  const [ageFocus, setAgeFocus] = React.useState(false);
  const [locationFocus, setLocationFocus] = React.useState(false);
  const [emailFocus, setEmailFocus] = React.useState(false);
  const [formData, setFormData] = React.useState({})

  const handleFormChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  React.useEffect(() => {
    document.body.classList.add("login-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("login-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);

  const renderLoginForm = () => {
    return (
      <Form action="" className="form" method="">
        <CardHeader className="text-center">
          <div className="logo-container">
            <img alt="..." src={require("../assets/img/now-logo.png")}></img>
          </div>
        </CardHeader>
        <CardBody>
          <InputGroup className={"no-border input-lg" + (usernameFocus ? " input-group-focus" : "")}>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <i className="now-ui-icons users_circle-08"></i>
              </InputGroupText>
            </InputGroupAddon>
            <Input
              placeholder="Username"
              type="text"
              onFocus={() => setUsernameFocus(true)}
              onBlur={() => setUsernameFocus(false)}
              onChange={handleFormChange}
              name='username'
            />
            </InputGroup>
          <InputGroup className={"no-border input-lg" + (passwordFocus ? " input-group-focus" : "")}>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <i className="now-ui-icons text_caps-small"></i>
              </InputGroupText>
            </InputGroupAddon>
            <Input
              placeholder="Password"
              type="password"
              onFocus={() => setPasswordFocus(true)}
              onBlur={() => setPasswordFocus(false)}
              onChange={handleFormChange}
              name='password'
            />
          </InputGroup>
        </CardBody>
        <CardFooter className="text-center">
          <Button
            block
            className="btn-round"
            color="info"
            href="#pablo"
            onClick={(e) => e.preventDefault()}
            size="lg"
          >
            Login
          </Button>
        <div className="pull-left">
          <h6>
            <a className="link" href="#pablo" onClick={(e) => e.preventDefault()}>Create Account</a>
          </h6>
        </div>
        <div className="pull-right">
          <h6>
            <a className="link" href="#pablo" onClick={(e) => e.preventDefault()}> Need Help? </a>
          </h6>
        </div>
        </CardFooter>
      </Form>
    )}

    const renderSignUpForm = () => {
      return (
        <Form action="" className="form" method="">
          <CardHeader className="text-center">
            <div className="logo-container">
              <img alt="..." src={require("../assets/img/now-logo.png")}></img>
            </div>
          </CardHeader>
          <CardBody>
            <InputGroup className={"no-border input-lg" + (nameFocus ? " input-group-focus" : "")}>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <i className="now-ui-icons text_caps-small"></i>
                </InputGroupText>
              </InputGroupAddon>
              <Input
                placeholder="Name"
                type="text"
                onFocus={() => setNameFocus(true)}
                onBlur={() => setNameFocus(false)}
                onChange={handleFormChange}
                name='name'
              />
            </InputGroup>
            <InputGroup className={"no-border input-lg" + (ageFocus ? " input-group-focus" : "")}>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <i className="now-ui-icons text_caps-small"></i>
                </InputGroupText>
              </InputGroupAddon>
              <Input
                placeholder="Age"
                type="number"
                onFocus={() => setAgeFocus(true)}
                onBlur={() => setAgeFocus(false)}
                onChange={handleFormChange}
                name='age'
              />
            </InputGroup>
            <InputGroup className={"no-border input-lg" + (locationFocus ? " input-group-focus" : "")}>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <i className="now-ui-icons text_caps-small"></i>
                </InputGroupText>
              </InputGroupAddon>
              <Input
                placeholder="Location"
                type="text"
                onFocus={() => setLocationFocus(true)}
                onBlur={() => setLocationFocus(false)}
                onChange={handleFormChange}
                name='location'
              />
            </InputGroup>
            <InputGroup className={"no-border input-lg" + (emailFocus ? " input-group-focus" : "")}>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <i className="now-ui-icons text_caps-small"></i>
                </InputGroupText>
              </InputGroupAddon>
              <Input
                placeholder="Email Address"
                type="text"
                onFocus={() => setEmailFocus(true)}
                onBlur={() => setEmailFocus(false)}
                onChange={handleFormChange}
                name='email_address'
              />
            </InputGroup>
            <InputGroup className={"no-border input-lg" + (usernameFocus ? " input-group-focus" : "")}>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <i className="now-ui-icons users_circle-08"></i>
                </InputGroupText>
              </InputGroupAddon>
              <Input
                placeholder="Username"
                type="text"
                onFocus={() => setUsernameFocus(true)}
                onBlur={() => setUsernameFocus(false)}
                onChange={handleFormChange}
                name='username'
              />
              </InputGroup>
            <InputGroup className={"no-border input-lg" + (passwordFocus ? " input-group-focus" : "")}>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <i className="now-ui-icons text_caps-small"></i>
                </InputGroupText>
              </InputGroupAddon>
              <Input
                placeholder="Password"
                type="password"
                onFocus={() => setPasswordFocus(true)}
                onBlur={() => setPasswordFocus(false)}
                onChange={handleFormChange}
                name='password'
              />
            </InputGroup>
          </CardBody>
          <CardFooter className="text-center">
            <Button
              block
              className="btn-round"
              color="info"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
              size="lg"
            >
              Login
            </Button>
          <div className="pull-left">
            <h6>
              <a className="link" href="#pablo" onClick={(e) => e.preventDefault()}>Create Account</a>
            </h6>
          </div>
          <div className="pull-right">
            <h6>
              <a className="link" href="#pablo" onClick={(e) => e.preventDefault()}> Need Help? </a>
            </h6>
          </div>
          </CardFooter>
        </Form>
      )}
      
  return (
    <>
      <div className="page-header clear-filter" filter-color="blue">
        <div 
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("../assets/img/login.jpg") + ")",
          }}
        ></div>
        <div className="content">
          <Container className='form-body'>
            <Col className="ml-auto mr-auto form-body" md="4">
              <Card className="card-login card-plain">
                {props.login ? renderLoginForm() : renderSignUpForm()}
              </Card>
            </Col>
          </Container>
        </div>
        {/* <TransparentFooter /> */}
      </div>
    </>
  );
}

export default LoginSignUp;
