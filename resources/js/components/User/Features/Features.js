import React from 'react';
// import './Features.css';
import '../shared.css';

const features = () => (
    <section id="features" className="main_container">
        <div className="inner">

            <section className="container">
                <h1 className="innerh1-feat">Features</h1>
            </section>
            <section className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <i className="fa fa-camera-retro fa-3x"></i>
                                <h4 className="card-title">Precise image to text conversion</h4>
                                <p className="card-text">With supporting text below as a natural lead-in to additional
                                    content. With supporting text below as a natural lead-in to additional content</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <i className="fa fa-magic fa-3x"></i>
                                <h4 className="card-title">Keeps the layout and formatting</h4>
                                <p className="card-text">With supporting text below as a natural lead-in to additional
                                    content. With supporting text below as a natural lead-in to additional content</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <i className="fa fa-file-pdf-o fa-3x " style={{color: 'white'}}></i>
                                <h4 className="card-title">Supports DOC, PDF or TXT as output</h4>
                                <p className="card-text">With supporting text below as a natural lead-in to additional
                                    content. With supporting text below as a natural lead-in to additional content</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <i className="fa fa-refresh fa-3x" style={{color: 'white'}}></i>
                                <h4 className="card-title">Automatically rotates pages</h4>
                                <p className="card-text">With supporting text below as a natural lead-in to additional
                                    content. With supporting text below as a natural lead-in to additional content</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <i className="fa fa-rss fa-3x" style={{color: 'white'}}></i>
                                <h4 className="card-title">Works online - no installation</h4>
                                <p className="card-text">With supporting text below as a natural lead-in to additional
                                    content. With supporting text below as a natural lead-in to additional content</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <i className="fa fa-shield fa-3x" style={{color: 'white'}}></i>
                                <h4 className="card-title">Keeps your data confidential and secure</h4>
                                <p className="card-text">With supporting text below as a natural lead-in to additional
                                    content. With supporting text below as a natural lead-in to additional content</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </section>


);

export default features;