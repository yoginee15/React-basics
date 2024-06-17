import React from 'react';
import Button from "react-bootstrap/Button";
import {
  Card,
  Row,
  Container,
  Form,
  Col,
  InputGroup,
  Alert,
} from "react-bootstrap";
import React from "react";

const Login = () => {
  let username = "";
  let password = "";

 const [showAlert,setShowAlert] = React.useState(false)
 const [showErrAlert,setShowErrorAlert] = React.useState(false)
 const [showErrorMessage,setErrorMessage] = React.useState('')

  const doLogin = (e) => {
    console.log("CLicked", username, password);
    if (username == "admin" && password == "admin123") {
      setShowAlert(true)
    }else{
      setShowErrorAlert(true)
    }
  };

  const updateValue = (e) => {
    const value = +e.target.value;
    console.log(value)
    if(typeof value=='number' && !isNaN(value)){
      setErrorMessage("Username should start with letters.")
    }else{
      if(e.target.value!='admin'){
        setErrorMessage("Please enter valid username.")
      }else{
      setErrorMessage("")
      }
    }
    if (e.target.name == "username") {
      username = e.target.value;
    }
    password = e.target.value;
  };

  return (
    <>
      {showAlert ?  <Alert id="alert" variant={"success"}>You have logged in successfully...!!!</Alert> : null}
      {showErrAlert ?  <Alert id="err-alert" variant={"error"}>Sorry, your login credential are wrong.</Alert> : null}
      <Container fluid="md" id="loginPage">
        <Card style={{ width: "18rem", width: "60%", margin: "0 auto" }}>
          <Card.Body>
            <Card.Title>Login Form</Card.Title>
            <Card.Text>
              <Form noValidate>
                <Row className="mb-10">
                  <Form.Group
                    as={Col}
                    md="12"
                    controlId="validationCustom01"
                    className="form-group"
                  >
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      name="username"
                      placeholder="First name"
                      defaultValue="Mark"
                      onChange={updateValue}
                      isValid={!showErrorMessage?.length}
                      isInvalid={showErrorMessage?.length}
                      />
                    {/* <input type="text"
                      name="username"
                      placeholder="First name"
                      default
                      Value="Mark"
                      onChange={updateValue} /> */}
                      {/* {showErrorMessage?.length ? <p>{showErrorMessage}</p> : null} */}
                      {showErrorMessage?.length ? <Form.Control.Feedback type='invalid'>{showErrorMessage}</Form.Control.Feedback>: null}
                  </Form.Group>
                </Row>
                <Row className="mb-10">
                  <Form.Group
                    as={Col}
                    md="12"
                    controlId="validationCustom01"
                    className="form-group"
                  >
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      required
                      name="password"
                      type="password"
                      placeholder="Password"
                      defaultValue="Mark"
                      onChange={updateValue}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Button onClick={doLogin} className="loginBtn">
                  Login
                </Button>
              </Form>
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
      </>  );
};

export default Login;
