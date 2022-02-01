import { Container, Row } from "react-bootstrap";
import Navbar from "./Navbar";

function Location() {
    return ( 
        <div  >
       <Navbar/>
       <div  className="lpix">
        <Container fluid>
           <div className="rectp bg-dark p-5  bg-opacity-25 ">
            <Row>
                <div className="turn bg-white mx-auto mt-5">
                    <h4 className="m-5">Turn on location</h4>
                </div>
            </Row>
            <Row>
            <div className="sea input-group mx-auto mt-4 ">
                  <input type="search" className="fs-4 form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                    <button type="button" className="btn btn-outline-light fs-4">search</button>
               </div>
            </Row>
            </div>
        </Container>
        </div>
        </div>
     );
}

export default Location;