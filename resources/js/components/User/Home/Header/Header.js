import React from 'react';
import Image5 from '../../../images/OCR.png';
import '../../shared.css'
import {Link} from "react-router-dom";
const header = () => (
    <section className="main_container">
        <div className="inner">

            <div className="home_main_image_container">
                <img alt="OCR" className="home_main_image" src={Image5}/>
            </div>

            <div className="home_button_container">
                <ul>
                    <Link to="/upload">
                        <li>
                            Convert Now
                            <span></span><span></span><span></span><span></span>
                        </li>
                    </Link>

                </ul>
            </div>
        </div>
    </section>
);

export default header;