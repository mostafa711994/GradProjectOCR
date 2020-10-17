import React from 'react';
import '../shared.css';

// import Video from '../../images/OCR Video.mp4';
const tutorial = () =>(
    <section id="tutorial" className="main_container">
        <div className="inner">

            <div>

                <h1>For Perfect Scanning, Follow These Steps</h1>

                <hr className="line_tutorial_title"/>

                    <ul>
                        <li>♦ Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                        <li>♦ Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                        <li>♦ Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                        <li>♦ Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                        <li>♦ Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                        <li>♦ Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                    </ul>
            </div>

            <h1 className="video_title">Need More Help ? Watch This Video</h1>

            <hr className="line_tutorial_title"/>

                <video className="scanning_video" controls>
                    {/*<source src={Video} type="video/mp4"/>*/}
                    {/*    <source src={Video} type="video/ogg"/>*/}
                            Your browser does not support the video tag.
                </video>
        </div>
    </section>

);

export default tutorial;