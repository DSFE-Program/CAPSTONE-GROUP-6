import { Button, Col, Container, Row } from "react-bootstrap";
import Navbar from "./Navbar";

function Homepage () {
    return ( 
        <div className="font-family: ‘Merriweather’, Georgia, serif;">
            <Navbar/>
            <div  className="homep">
            <Container fluid>
            <div className="homed">
                <Row>
                    <Col  md={4}>
                   
                    <h1 className="homet">
                    Need emergency help from an abusive situation?
                    </h1>
                    <div className="but d-flex">
                    <Button className="geth bg-danger btn-lg ">CLICK HERE</Button>
                    <Button className="geth  btn-lg">CLICK TO GET HELP</Button>
                    </div>
                    </Col>
                   
                </Row>
                </div>

                
                <div className="about">
                    <Row>
                        <h3 className="abouth">
                        About Us
                        </h3>
                        <p className="aboutp">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum velit egestas non cursus faucibus mus. Sit orci, ornare ut et. Aliquam purus id sem hac. Arcu urna convallis facilisis neque quis molestie.
Pellentesque id integer proin suspendisse in. Vitae sit dignissim convallis dolor. Eget at sit hac pellentesque molestie. Augue molestie in cras amet, sed urna ac nisi, quis. Eget velit, viverra tempus lobortis.
Pellentesque id integer proin suspendisse in. Vitae sit dignissim convallis dolor. Eget at sit hac pellentesque molestie. Augue molestie in cras amet, sed urna ac nisi, quis. Eget velit, viverra tempus lobortis.
<span className="read">Read More...</span>
                        </p>
                    </Row>
                </div>
                <Row>
                <div className="nil">

                </div>
                </Row>
            </Container>
            </div>

        </div>
     );
}

export default Homepage;