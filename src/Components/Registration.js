import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import '../App.css';
import { Button, Form, Col } from 'react-bootstrap';
import Logo from '../logos/DiagnosticaSampleLogo.svg';
import GoogleLogin, { useGoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login';

class Registration extends Component {


    render() {

        const onSuccess = (res) => {
            console.log('Login Success currentUser', res.profileObj);
        }

        const onFailure = (res) => {
            console.log('Login failed currentUser', res);
        }

        const responseGoogle = (response) => {
            console.log(response);
        }

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
                        {/* <Form.Row>
                            <Form.Group as={Col} controlId="formGridUsername">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" placeholder="Enter username" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                        </Form.Row>

                        <Form.Group controlId="formGridAddress1">
                            <Form.Label>Address</Form.Label>
                            <Form.Control placeholder="1234 Main St" />
                        </Form.Group>


                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>City</Form.Label>
                                <Form.Control />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>State</Form.Label>
                                <Form.Control as="select" defaultValue="Choose...">
                                    <option>Choose...</option>
                                    <option>...</option>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridZip">
                                <Form.Label>Zip</Form.Label>
                                <Form.Control />
                            </Form.Group>
                        </Form.Row>

                        <Form.Group id="formGridCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                        <Form.Group id="submits">

                        <FacebookLogin
                            cssClass="fb"
                            appId="121127359789175"
                            autoLoad
                            callback={responseFacebook}
                            textButton="Register with Facebook"
                            render={renderProps => (
                                <button onClick={renderProps.onClick}>This is my custom FB button</button>
                            )}
                        />
                        {/* <br /> */}

                        
                        {/* <googleButton /> */}
                        {/* <googleButton /> */}
                    </Form>
                </div>

            </div>

        )
    }
}

export default Registration
