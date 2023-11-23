import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';


function Header(){
  return (
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/"><Link to="/"style={{textDecoration: 'none', color:'black'}}>Mining Cult </Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
            <Link to="/leaderboards"style={{textDecoration: 'none', color:'black'}}>Leaderboards</Link>
            </Nav.Link>
            <Nav.Link>
            <Link to="/ranking"style={{textDecoration: 'none', color:'black'}}>Ranking</Link>
            </Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header;
