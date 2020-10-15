import React from "react";
import { Container, Row, Col, Button, ButtonGroup } from "react-bootstrap"
// import api from "../../utils/API"

// Take one json object, parse data, render a card to display book information. 
function SavedResultCard(props) {

    const remove = () => {

        console.log("inside remove() front end click ")
    }

    return (
        <Container fluid>
            <Container>
                <Row>
                <Col>{props.title}</Col>
                    <Col>
                        <ButtonGroup>
                            <Button variant="outline-dark" target="_blank" href={props.link}>View</Button>
                            <Button variant="outline-dark" onClick={remove}>Remove</Button> 
                        </ButtonGroup>
                    </Col>
                </Row>
                <Row>
                    <Col id="author">Written by: {props.author}</Col>
                </Row>
                <Row>
                    <Col><img src={props.image} alt={props.title}></img></Col>
                    <Col>{props.description}</Col>
                </Row>
            </Container>
        </Container>
  );
}

export default SavedResultCard;