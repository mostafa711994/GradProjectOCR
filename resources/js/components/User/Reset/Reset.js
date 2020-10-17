import React from 'react';
// import './Reset.css';
import '../shared.css';

import Image from '../../images/6.png';
const reset  =() =>(
    <section id="forgetpass" className="main_container">
        <div className="inner">


            <div className="limit">
                <div className="f-container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-8">
                            <div className="forget">
                                <div className="forget_title">
                                    <span className="ts">Reset Password</span>
                                </div>
                                <form className="f">
                                    <div className="f-txt">
                                        <input type="password" name="password" placeholder=" New Password  "/>
                                    </div>
                                    <div className="f-txt">
                                        <input type="password" name="password" placeholder="  Repeat new password  "/>
                                    </div>
                                    <div className="f-btn">
                                        <button type="button" className="send-btn"
                                                onClick="window.location.href='profile.html'"> Reset Password
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

export default reset;