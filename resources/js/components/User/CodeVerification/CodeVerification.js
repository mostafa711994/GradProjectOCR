import React from 'react';
// import './CodeVerification.css';
import '../shared.css';

import Image from '../../images/1.png';
const codeVerification = () => (
    <section id="forgetpass" className="main_container">
        <div className="inner">


            <div className="limit">
                <div className="f-container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-8">
                            <div className="forget">
                                <div className="forget_title">
                                    <span className="ts">Code Verification</span>
                                </div>
                                <div className="txt">
                                    <span>please, enter your email address or phone number , you will recieve code to
										reset your password</span>
                                </div>
                                <form className="f">
                                    <div className="f-txt">
                                        <input type="text" name="contact" placeholder=" Enter Code "/>
                                    </div>
                                    <div className="f-btn">
                                        <button type="button" className="send-btn"
                                                onClick="window.location.href='Reset password.html'"> Verify
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="image_container">
                            <img src={Image} className="forget_photo" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default codeVerification;