import React from 'react'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faBook,
    faHeart,
    faSpaceShuttle,
    faLightbulb
} from '@fortawesome/free-solid-svg-icons'

import './styles.css'

const icons = () => {
    return (
    
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
       
    )
}

export default icons;