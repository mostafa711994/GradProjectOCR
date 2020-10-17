import React from 'react';
// import './Android.css';
import '../shared.css';

const android  = () => (
    <section className="main_container">
        <div className="inner">

            <div className="android_text_container">

                <h1 id="android_title">SCAN WHEREVER YOU ARE ;)</h1>

                <p id="android_paragraph">
                    No Networks Available ? Start Scanning & Enjoy our services whenever & wherever you are offline.
                    When you get online again they'll be automatically Archived.
                </p>
            </div>

            <div className="home_button_container">
                <ul>
                    <li onClick='window.location.href="https:\\play.google.com/store?hl=en"'>
                        Try It Now
                        <span></span><span></span><span></span><span></span>
                    </li>
                </ul>
            </div>
        </div>
    </section>
);

export default android;