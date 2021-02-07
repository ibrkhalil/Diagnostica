import React from 'react'
import Logo from '../logos/DiagnosticaSampleLogo.svg';
import '../App.css';
import 'react-bootstrap';
import FacebookLogin from 'react-facebook-login'
import { Button, Form } from 'react-bootstrap';

const Login = () => {
    const responseFacebook = (response) => {
        console.log(response);
      }
    return (
        <div className="loginContainer">

            <div className="loginForm">
                <p>Welcome to</p>
                <img className="logo" src={Logo} alt="Diagnostica-Logo"></img>
                <p>Thank you for trusting us! 🙌</p>
                <Form>
                    <Form.Group className="formGroup" controlId="formBasicUsername">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="text" placeholder="Enter username" />
                        <Form.Text className="text">
                            We'll never share your email with anyone else. 🤝
                      </Form.Text>
                    </Form.Group>

                    <Form.Group className="formGroup" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="formGroup" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check className="rememberMe" type="checkbox" label="Remember me" />
                    </Form.Group>
                    <div className="">
                        <Button variant="primary" type="submit">
                            Login
                    </Button>
                    </div>
                    <div className="forgotBtn">
                        <Button variant="primary" type="submit">
                            Forgot Password? 😢
                    </Button>
                    </div>
                </Form>







            </div>
            <FacebookLogin
  appId="121127359789175"
  autoLoad
  callback={responseFacebook}
  render={renderProps => (
    <button onClick={renderProps.onClick}>This is my custom FB button</button>
  )}
/>
        </div >
    )
}

export default Login;
