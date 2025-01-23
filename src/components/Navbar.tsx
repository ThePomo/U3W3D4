import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavbarComponent = () => {
  return (
    <Navbar expand='md' className='bg-body-tertiary'>
      <Container className='d-flex justify-content-between'>
        <Link to='/' className='fw-bold text-black text-decoration-none fs-4'>
          SpaceFlight
        </Link>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Link to='/' className='text-black text-decoration-none'>
              Home
            </Link>
            <Link to='/articles' className='text-black text-decoration-none'>
              All Articles
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
