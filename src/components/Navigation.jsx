import { Navbar, Container, Nav, Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'

export default function Navigation({ user, setUser }) {
  const navigate = useNavigate()

  const handleLogout = () => {
    setUser(null)
    navigate('/login')
  }

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">Genius E-Library</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Books</Nav.Link>
            <Nav.Link as={Link} to="/categories">Categories</Nav.Link>
          </Nav>
          <Nav>
            {user ? (
              <Button variant="outline-light" onClick={handleLogout}>Logout</Button>
            ) : (
              <Button variant="outline-light" as={Link} to="/login">Login</Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}