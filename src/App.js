import React from 'react';
import './App.css';
import WeatherDisplay from "./WeatherDisplay";
import "bootswatch/dist/slate/bootstrap.css";
import { Navbar, Nav, Container, Row, Col, NavbarBrand } from "react-bootstrap";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            activePlace: 0
        };
    }
    render() {
        const activePlace = this.state.activePlace;
        return (
            <div>
                <Navbar
                    style={{marginBottom:'100px'}}
                >
                        <NavbarBrand>
                            React Simple Weather App
                        </NavbarBrand>
                </Navbar>
                <Container>
                    <Row>
                        <Col md={4} sm={4}>
                            <h3>Select a city</h3>
                            <Nav
                                className="flex-column"
                                variant="pills"
                                stacked="true"
                                activeKey={activePlace}
                                onSelect={index => {
                                    this.setState({ activePlace: index });
                                }}
                            >
                                {PLACES.map((place, index) => (
                                    <Nav.Link key={index} eventKey={index}>{place.name}</Nav.Link>
                                ))}
                            </Nav>
                        </Col>
                        <Col md={8} sm={8}>
                            <WeatherDisplay key={activePlace} zip={PLACES[activePlace].zip} />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default App;

const PLACES = [
    { name: "Palo Alto", zip: "94303" },
    { name: "San Jose", zip: "94088" },
    { name: "Santa Cruz", zip: "95062" },
    { name: "Honolulu", zip: "96803" }
];
