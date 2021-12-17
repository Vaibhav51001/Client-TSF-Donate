import "./Header.css";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";


function Header() {
  return (
    <div>
      <Navbar
        bg="warning"
        variant="light"
        expand="lg"
        className="navbar"
      >
        <Container>
          <Navbar.Brand href="/">
            <img
              alt="logo"
              src="https://internship.thesparksfoundation.info/assests/img/logo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Spark Fundraiser
          </Navbar.Brand>
          {/* <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/movies">All Movies</Nav.Link>
              <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/movies">All movies</NavDropdown.Item>
                <NavDropdown.Item href="/register">
                  User Registration
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse> */}
          <Button variant="outline-danger" size="lg" href="https://rzp.io/l/kKp2utl">Donate Now</Button>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
