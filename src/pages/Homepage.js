import React from 'react';
import { Card, Col, Jumbotron, Row } from 'react-bootstrap';
import './homepage.css'
import house1 from '../img/house1.jpg';
import house2 from '../img/house2.jpg';
import house3 from '../img/house3.jpg';


class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.cards = [
            {
                imgURL: house1,
                alt: 'first house',
                title: 'Lorem Ipsum',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
            },
            {
                imgURL: house2,
                alt: 'first house',
                title: 'Lorem Ipsum',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
            },
            {
                imgURL: house3,
                alt: 'first house',
                title: 'Lorem Ipsum',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
            }
        ]

    }
    render() {
        return (
            <div className="p-homepage">
                <Jumbotron>
                    <Row className="justify-content-center">
                        <Col sm={12} lg={7}>
                            <h1 className="text-center">Loren Ipsum</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                            irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        </Col>
                    </Row>
                </Jumbotron>
                <h3 className="text-center border-top border-dark pt-3">Lorem ipsum dolor sit amet</h3>
                <Row className="justify-content-center">
                    {
                        this.cards.map( (card,index) => (
                        <Col key={index} sm="12" md="6" lg="3">
                            <Card className="m-3 text-center">
                                <Card.Body>
                                    <Card.Title>{card.title}</Card.Title>
                                    <Card.Img variant="top"  src={card.imgURL} alt={card.alt} />
                                    <Card.Text>{card.description}</Card.Text>
                                </Card.Body>
                                
                            </Card>
                        </Col>
                        ))
                    }
                </Row>
           
            </div>
        )
    }
}

export default Homepage;