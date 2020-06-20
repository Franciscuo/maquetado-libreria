import React from 'react'

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const Cards = ()=>{
    return(
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
    )
}

export default Cards;