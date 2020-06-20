import React from 'react'


import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import './styles.css'
const searchBox = () => {
    return (
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

    )
}

export default searchBox;