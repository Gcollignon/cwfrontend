import React from 'react'
import Form from 'react-bootstrap/Form';
import {Row, Container, Col} from 'react-bootstrap';
import {Button} from 'react-bootstrap'
import {Redirect as Navigate} from 'react-router-dom'
class Find extends React.Component {
  constructor(props){
    super(props);
    this.username = React.createRef();
    this.searchPlayer = this.searchPlayer.bind(this);
    this.handleSend = this.handleSend.bind(this);
    this.state = {shouldRedirect : false, username : "", updating: false}
  }
  searchPlayer(){
    //Need to change route and call onComponentDidMount for ajax
    this.setState({shouldRedirect: true, username : this.username.current.value})
  }
  handleSend(event){
    if (event.keyCode === 13){
      this.searchPlayer()
    }
  }
  render() {

    if (this.state.shouldRedirect === true){
      this.setState({shouldRedirect:false, updating:true})
      return (
        <Navigate to={"/player?username=" + this.state.username} />
      )
    }

    return (
      <Container>
        <Col xs={2}></Col>
        <Col xs={4} onKeyUp={this.handleSend}>
          <Form.Label htmlFor="inputUsername">Search user</Form.Label>
          <Form.Control
            type="username"
            id="inputUsername"
            ref={this.username}

          />
          <br />
          <Button variant="primary" onClick={this.searchPlayer}>Search</Button>

        </Col>
        <Col xs={2}></Col>


      </Container>

    )
  }
}

export default Find;

