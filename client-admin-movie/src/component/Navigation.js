import {Nav,Navbar, NavDropdown, Container  } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

const Navigation=()=>{
   return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
         <Container className='me-5 ms-5' fluid>
            <Navbar.Brand className={" fw-bold fs-4"}  ><Link className='link' to={'/'}>Xtra (Admin)</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
               <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="gap-3 me-auto"  >
                     <Nav><Link className='link' to={'/'}>Home</Link></Nav>
                     <Nav><Link className='link' to={'/movies'}>Movies</Link></Nav>
                     <Nav><Link className='link' to={'/cinemas'}>Cinemas</Link> </Nav>
                     <Nav><Link className='link' to={'/promotions'}>Promotions</Link></Nav>
                  </Nav>
                  <Nav>
                     <Nav.Link href="#deets">More deets</Nav.Link>
                     <Nav.Link eventKey={2} href="#memes">
                     Dank memes
                     </Nav.Link>
                  </Nav>
               </Navbar.Collapse>
         </Container>
      </Navbar>
   )
}

export default Navigation;