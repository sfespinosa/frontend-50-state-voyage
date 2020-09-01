import React from "react";

// reactstrap components
import {
    Button,
    Card,
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

function EditProfileForm({user, close, editUserProfile, logout, deleteProfile}) {

    // form styling
    const [nameFocus, setNameFocus] = React.useState(false);
    const [birthdateFocus, setBirthdateFocus] = React.useState(false);
    const [locationFocus, setLocationFocus] = React.useState(false);
    const [emailFocus, setEmailFocus] = React.useState(false);

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

  // form submission
    const [formData, setFormData] = React.useState({
        name: user.name,
        birthdate: user.birthdate,
        location: user.location,
        email_address: user.email_address
    })


    const handleFormChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const saveProfileChanges = (e) => {
        e.preventDefault()
        editUserProfile(formData, user.id)
        close()
    }

    const deleteUser = () =>{
        deleteProfile(user.id)
        logout()
    }

    return (
    <>
        <div className='edit-profile-form'>
            <div>
            <div>
            <Container>
                <Col className="ml-auto mr-auto form-body" md="4">
                <Card className="card-login card-plain">
                <Form className="form" onSubmit={(e) => saveProfileChanges(e, 'users')}>
            <CardBody>
                <InputGroup className={"no-border input-lg" + (nameFocus ? " input-group-focus" : "")}>
                <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                    <i className="now-ui-icons text_caps-small"></i>
                    </InputGroupText>
                </InputGroupAddon>
                <Input
                    placeholder="Username"
                    type="text"
                    onFocus={() => setNameFocus(true)}
                    onBlur={() => setNameFocus(false)}
                    onChange={handleFormChange}
                    name='name'
                    value={formData.name}
                />
                </InputGroup>
                <InputGroup className={"no-border input-lg" + (birthdateFocus ? " input-group-focus" : "")}>
                <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                    <i className="now-ui-icons text_caps-small"></i>
                    </InputGroupText>
                </InputGroupAddon>
                <Input
                    placeholder="Birthdate"
                    type="date"
                    onFocus={() => setBirthdateFocus(true)}
                    onBlur={() => setBirthdateFocus(false)}
                    onChange={handleFormChange}
                    name='birthdate'
                    value={formData.birthdate}
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
                    value={formData.location}
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
                    value={formData.email_address}
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
                Save Changes
                </Button>
            </CardFooter>
            </Form>
            <Button
                block
                className="btn-round"
                color="danger"
                size="lg"
                onClick={() => deleteUser()}
                >
                Delete Account
                </Button>
                </Card>
                </Col>
            </Container>
            </div>
            </div>
        </div>
        </>
    );
    }

export default EditProfileForm;
