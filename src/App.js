import Login from './Components/Login'
import Registration from './Components/Registration'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Jumbotron, Container } from 'reactstrap';
import { Component } from 'react';


class App extends Component {
  state = {
    currentPage: 'Home'
  }

  mouseoverPass = (e) => {
    e.target.previousElementSibling.type = 'text'
  //  e.target.type = 'text'
   
  }

   mouseoutPass = (e) => {
  //  e.target.type = 'password'
  e.target.previousElementSibling.type = 'password'
  }
  render() {


    return (
      <div className="loginForm">
        {/* <Login /> */}
 

        {/* <Registration  /> */}
        {/* <Container>
        <h1>Registration</h1>
      <Jumbotron className='jumbotron-main' fluid>
        <Container fluid>
          <Registration />
        </Container>
      </Jumbotron>
      </Container> */}



        <script src="https://apis.google.com/js/platform.js" async defer></script>
      </div>
    );
  }
}



export default App;
