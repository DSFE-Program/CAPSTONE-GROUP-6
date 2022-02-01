import * as ReactBootStrap from "react-bootstrap"
import "../index.css";
import facebook from "../Images/facebook.png";
import instagram from "../Images/instagram.png";
import twitter from "../Images/twitter.png";
import logo from "../Images/logo.png";





function Navbar()

{
    return (<div>
      <ReactBootStrap.Navbar collapseOnSelect expand="lg" className="navbar3">
        
  <ReactBootStrap.Container fluid>
    <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">

    <ReactBootStrap.Nav className="me-auto nav1">
  <ReactBootStrap.Navbar.Brand href="#home">
      <img
        src={facebook}
        width="30"
        height="30"
        alt="logo"
      />
    </ReactBootStrap.Navbar.Brand>

   
  <ReactBootStrap.Navbar.Brand href="#home">
      <img
        src={twitter}
        width="30"
        height="30"
        alt="logo"
      />
    </ReactBootStrap.Navbar.Brand>

    
  <ReactBootStrap.Navbar.Brand href="#home">
      <img
        src={instagram}
        width="30"
        height="30"
        alt="logo"
      />
    </ReactBootStrap.Navbar.Brand>
   
    
    </ReactBootStrap.Nav>

    
    <ReactBootStrap.Nav className="mx-auto help">
    <h3>Helpline: +2349057645523</h3>
    </ReactBootStrap.Nav>
    
    <ReactBootStrap.Nav>
    <div class="sach input-group">
  <input type="search" class="form-control " placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
  <button type="button" class="btn btn-outline-light">search</button>
</div>
      </ReactBootStrap.Nav>
      
    </ReactBootStrap.Navbar.Collapse>
  </ReactBootStrap.Container>
      </ReactBootStrap.Navbar>

      <ReactBootStrap.Navbar collapseOnSelect expand="lg"  className="navbar">
  <div className="mx-auto">
  <ReactBootStrap.Container>
 

  <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
    
  <div>
  <ReactBootStrap.Nav className="me-auto nav1">
  
  <ReactBootStrap.Navbar.Brand href="#home">
      <img
        src={logo}
        width="60"
        height="60"
        alt="logo"
      />
    </ReactBootStrap.Navbar.Brand>
    
    </ReactBootStrap.Nav>
    </div>
    <div className="us ">
    <ReactBootStrap.Nav className="me-auto nav2 fs-4">
      <ReactBootStrap.Nav.Link className="px-5 active home " href="#home">Home</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link className="px-5" href="#about">About Us</ReactBootStrap.Nav.Link>
      <ReactBootStrap.NavDropdown className="px-5 fs-4" title="Resources" id="collasible-nav-dropdown">
        <ReactBootStrap.NavDropdown.Item href="#action/3.1">Blogs</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.2">Testimonials</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.3">FAQ</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Divider />
        
      </ReactBootStrap.NavDropdown>
      
    </ReactBootStrap.Nav>
    </div>
    <div className="navbox fs-4 " >
    <ReactBootStrap.Nav>
      <div className="navd" >
      <ReactBootStrap.Nav.Link className="m-1 "  href="#deets"> Volunteer</ReactBootStrap.Nav.Link>
      </div>
      <div className="navd2">
      <ReactBootStrap.Nav.Link className=" text-white m-2" eventKey={2} href="#memes">
      Donate
      </ReactBootStrap.Nav.Link>
      </div>
    </ReactBootStrap.Nav>
    </div>
  </ReactBootStrap.Navbar.Collapse>
  </ReactBootStrap.Container>
  </div>
</ReactBootStrap.Navbar>

<ReactBootStrap.Container>
  <div className="alertp">

  </div>
</ReactBootStrap.Container>


</div>
      );
}

export default Navbar;