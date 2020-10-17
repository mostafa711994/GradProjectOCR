import React from 'react';
import '../shared.css';
const output = () =>(
    <section id="output" className="main_container">
        <div className="inner">

            <header>
                <h1>Configure & Download Your File</h1>
            </header>

            <hr className="line_premium_title"/>

                <div className="output">
                    <div className="left_format_container">
                        <span className="icon fa-file-text"></span>
                        <h3>Select a format</h3>
                        <div className="dropdown">
                            <button className="btn">Document Format</button>
                            <div className="dropdown-content">
                                <label htmlFor="file">Word</label>
                                <label htmlFor="file">PDF</label>
                                <label htmlFor="file">Text</label>
                            </div>
                        </div>
                    </div>
                    <div className="right_convert_container">
                        <span className="icon fa-cog"></span>
                        <h3>Download Your text</h3>
                        <a href="gfg" className="button">Download</a>
                    </div>
                </div>
        </div>
    </section>
);
export default output;