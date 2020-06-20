import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faBook,
    faHeart,
    faSpaceShuttle,
    faLightbulb,
    faArrowAltCircleRight,
    faSearch
} from '@fortawesome/free-solid-svg-icons'

import Card from 'react-bootstrap/Card'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

ReactDOM.render(
    <React.StrictMode>
        <div className="wrapper">
            <div className="app">

                <h3 className="animate__animated  animate__fadeIn"
                    style={{
                    marginTop: "10px"
                }}>ENJOY READING</h3>

                <InputGroup className="mb-3 animate__animated  animate__fadeIn">
                    <FormControl
                        placeholder="Search for books"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"

                        style={{
                            borderRadius: "10px",
                            zIndex: "0",
                            width: "100%"
                        }}
                    />
                    <div className="search-icon" style={{
                        width: "100%"
                    }}>
                        <FontAwesomeIcon icon={faSearch} style={{ fontSize: "19px", color: "grey" }} />
                    </div>
                </InputGroup>
                <Card className="top-card animate__animated animate__bounceInUp">
                    <Card.Body>
                        <Card.Text>
                            Child Picture<br />
                            Book<br />
                            <Button variant="danger" size="sm" style={{
                                borderRadius: "20px",
                                fontWeight: "500"
                            }}>Click to enter</Button>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <div className="row animate__animated animate__bounceInUp" style={{
                    margin: "auto"
                }}>
                    <div className="col-3">
                        <FontAwesomeIcon icon={faBook} style={{ fontSize: "29px" }} />
                        <p>book list</p>
                    </div>
                    <div className="col-3">
                        <FontAwesomeIcon icon={faHeart} style={{ fontSize: "29px" }} />
                        <p>reading</p>
                    </div>
                    <div className="col-3">
                        <FontAwesomeIcon icon={faSpaceShuttle} style={{ fontSize: "29px" }} />
                        <p>space</p>
                    </div>
                    <div className="col-3">
                        <FontAwesomeIcon icon={faLightbulb} style={{ fontSize: "29px" }} />
                        <p>more</p>
                    </div>

                </div>
                <hr />
                <div className="row animate__animated animate__bounceInUp">
                    <div className="col-8">
                        <h4>Recommended</h4>
                    </div>
                    <div className="col-4" style={{ color: "grey", marginTop: "4px", textAlign: "end" }}>
                        see all <FontAwesomeIcon icon={faArrowAltCircleRight} style={{ fontSize: "19px" }} />
                    </div>
                </div>
                <Card
                className="animate__animated animate__bounceInUp"
                style={{
                    borderRadius: "20px",
                    margin: "20px 0px 20px 0px",
                    boxShadow: "1px 1px 30px 1px rgba(0, 0, 0, 0.15)"
                    
                }}>
                    <Card.Body>
                        <div className="row">
                            <div className="col-4">
                                <img src="./libro.jpg" alt="libro" width="90px" />
                            </div>
                            <div className="col-8">
                                <Card.Text>
                                    <h5>The Giant Kingdom</h5>
                                    <p style={{
                                        color: "grey",
                                        fontSize: "14px"
                                    }}>Extracurricular rading / Growing motivational story book</p>
                                    <div className="row">
                                        <div className="col-6">
                                            <strong style={{
                                                color: "tomato",
                                                fontWeight: "700",
                                                fontSize: "13px"
                                            }}>261 </strong>
                                            <strong style={{
                                                fontWeight: "700",
                                                fontSize: "13px"
                                            }}>
                                                Remaining
                                            </strong>
                                        </div>
                                        <div className="col-6">
                                            <Button variant="warning" size="sm" style={{
                                                borderRadius: "20px",
                                                fontWeight: "500",
                                                boxShadow: "0px 1px 10px 0px rgba(0, 0, 0, 0.2)"
                                            }}>Borrow it</Button>
                                        </div>
                                    </div>
                                </Card.Text>
                            </div>
                        </div>

                    </Card.Body>
                </Card>
                <Card 
                className="animate__animated animate__bounceInUp"
                style={{
                    borderRadius: "20px",
                    margin: "20px 0px 20px 0px",
                    boxShadow: "1px 1px 30px 1px rgba(0, 0, 0, 0.15)"
                }}>
                    <Card.Body>
                        <div className="row">
                            <div className="col-4">
                                <img src="./libro.jpg" alt="libro" width="90px" />
                            </div>
                            <div className="col-8">
                                <Card.Text>
                                    <h5>The Giant Kingdom</h5>
                                    <p style={{
                                        color: "grey",
                                        fontSize: "14px"
                                    }}>Extracurricular rading / Growing motivational story book</p>
                                    <div className="row">
                                        <div className="col-6">
                                            <strong style={{
                                                color: "tomato",
                                                fontWeight: "700",
                                                fontSize: "13px"
                                            }}>261 </strong>
                                            <strong style={{
                                                fontWeight: "700",
                                                fontSize: "13px"
                                            }}>
                                                Remaining
                                            </strong>
                                        </div>
                                        <div className="col-6">
                                            <Button variant="warning" size="sm" style={{
                                                borderRadius: "20px",
                                                fontWeight: "500",
                                                boxShadow: "0px 1px 10px 0px rgba(0, 0, 0, 0.2)"
                                            }}>Borrow it</Button>
                                        </div>
                                    </div>
                                </Card.Text>
                            </div>
                        </div>

                    </Card.Body>
                </Card>
            </div>
        </div>
    </React.StrictMode>,
    document.getElementById('root')
);