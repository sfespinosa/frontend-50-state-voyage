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
  const [birthdateFocus, setBirthdateFocus] = React.useState(false);
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

  const handleSubmit = (e, path) => {
    e.preventDefault()
    props.handleSubmit(formData, path)
  }

  const renderLoginForm = () => {
    return (
      <Form className="form" onSubmit={(e) => handleSubmit(e, 'login')}>
        <CardHeader className="text-center">
          <div className="logo-container">
            <img alt="..." src={require("../assets/img/50-state-voyage-icon.png")}></img>
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
              autoComplete='off'
            />
            </InputGroup>
          <InputGroup className={"no-border input-lg" + (passwordFocus ? " input-group-focus" : "")}>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <i className="now-ui-icons ui-1_lock-circle-open"></i>
              </InputGroupText>
            </InputGroupAddon>
            <Input
              placeholder="Password"
              type="password"
              onFocus={() => setPasswordFocus(true)}
              onBlur={() => setPasswordFocus(false)}
              onChange={handleFormChange}
              name='password'
              autoComplete='off'
            />
          </InputGroup>
        </CardBody>
        <CardFooter className="text-center">
          <Button
            block
            className="btn-round"
            color="info"
            size="lg"
          >
            Login
          </Button>
        <div className="pull-left">
          <h6>
            <a className="link" href="/signup">Create Account</a>
          </h6>
        </div>
        <div className="pull-right">
          <h6>
            <a className="link" href="/">Back Home</a>
          </h6>
        </div>
        </CardFooter>
      </Form>
    )}

    const renderStateOptions = () => {
      console.log(props.usStates)
      return props.usStates.map(usState => {
        return (
          <option key={usState.id} value={usState.name}>{usState.abbrv}</option>
        )
      })
    }

    const renderSignUpForm = () => {
      return (
        <Form className="form" onSubmit={(e) => handleSubmit(e, 'users')}>
          <CardHeader className="text-center">
            <div className="logo-container">
              <img alt="..." src={require("../assets/img/50-state-voyage-icon.png")}></img>
            </div>
          </CardHeader>
          <CardBody>
            <InputGroup className={"no-border input-lg" + (nameFocus ? " input-group-focus" : "")}>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <i className="now-ui-icons users_single-02"></i>
                </InputGroupText>
              </InputGroupAddon>
              <Input
                placeholder="Name"
                type="text"
                onFocus={() => setNameFocus(true)}
                onBlur={() => setNameFocus(false)}
                onChange={handleFormChange}
                name='name'
                autoComplete='off'
              />
            </InputGroup>
            <InputGroup className={"no-border input-lg" + (birthdateFocus ? " input-group-focus" : "")}>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <i className="now-ui-icons ui-1_calendar-60"></i>
                </InputGroupText>
              </InputGroupAddon>
              <Input
                placeholder="01/01/1999"
                type="date"
                onFocus={() => setBirthdateFocus(true)}
                onBlur={() => setBirthdateFocus(false)}
                onChange={handleFormChange}
                name='birthdate'
              />
            </InputGroup>
            <InputGroup className={"no-border input-lg" + (locationFocus ? " input-group-focus" : "")}>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <i className="now-ui-icons location_compass-05"></i>
                </InputGroupText>
              </InputGroupAddon>
              <Input
                type="select"
                onFocus={() => setLocationFocus(true)}
                onBlur={() => setLocationFocus(false)}
                onChange={handleFormChange}
                name='location'
                defaultValue='n/a'
              >
                <option value='n/a' disabled>Select a State</option>
                {renderStateOptions()}
              </Input>
            </InputGroup>
            <InputGroup className={"no-border input-lg" + (emailFocus ? " input-group-focus" : "")}>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <i className="now-ui-icons ui-1_email-85"></i>
                </InputGroupText>
              </InputGroupAddon>
              <Input
                placeholder="Email Address"
                type="text"
                onFocus={() => setEmailFocus(true)}
                onBlur={() => setEmailFocus(false)}
                onChange={handleFormChange}
                name='email_address'
                autoComplete='off'
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
                autoComplete='off'
              />
              </InputGroup>
            <InputGroup className={"no-border input-lg" + (passwordFocus ? " input-group-focus" : "")}>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <i className="now-ui-icons ui-1_lock-circle-open"></i>
                </InputGroupText>
              </InputGroupAddon>
              <Input
                placeholder="Password"
                type="password"
                onFocus={() => setPasswordFocus(true)}
                onBlur={() => setPasswordFocus(false)}
                onChange={handleFormChange}
                name='password'
                autoComplete='off'
              />
            </InputGroup>
          </CardBody>
          <CardFooter className="text-center">
            <Button
              block
              className="btn-round"
              color="info"
              size="lg"
            >
              Create an Account
            </Button>
          <div className="pull-left">
            <h6>
              <a className="link" href="/login">Login here</a>
            </h6>
          </div>
          <div className="pull-right">
            <h6>
              <a className="link" href="/">Back Home</a>
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
        <div className="content-center brand">
          <Container className='form-body'>
            <Col className="ml-auto mr-auto form-body" md="4">
              <Card className="card-login card-plain">
                {props.login ? renderLoginForm() : renderSignUpForm()}
              </Card>
            </Col>
          </Container>
          </div>
        </div>
        {/* <TransparentFooter /> */}
      </div>
    </>
  );
}

export default LoginSignUp;
