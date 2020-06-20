import React from 'react'

import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

import './styles.css'

const banner = () => {
    return (
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

    )
}

export default banner;