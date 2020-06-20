import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';


import './app.css'

import SearchBox from './components/searchBox/index.jsx'
import Banner from './components/banner/index.jsx'
import Icons from './components/Icons/index.jsx'
import Cards from './components/cards/index.jsx'

const app = () => {
    return (

        <div className="wrapper">
            <div className="app">

                <h3 className="animate__animated  animate__fadeIn"
                    style={{
                        marginTop: "10px"
                    }}>ENJOY READING</h3>

                <SearchBox />
                <Banner />
                <hr />
                <Icons />

                <div className="row animate__animated animate__bounceInUp">
                    <div className="col-8">
                        <h4>Recommended</h4>
                    </div>
                    <div className="col-4" style={{ color: "grey", marginTop: "4px", textAlign: "end" }}>
                        see all <FontAwesomeIcon icon={faArrowAltCircleRight} style={{ fontSize: "19px" }} />
                    </div>
                </div>

                <Cards />
                <Cards />
                
            </div>
        </div>
    )
}

export default app;