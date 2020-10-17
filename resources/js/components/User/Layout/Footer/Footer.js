import React from 'react';
import '../../shared.css';
const Mainfooter = () => (

    <footer id="footer">
        <div className="inner">

            <h3>Get in touch</h3>
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-8">
                    <h2 className="card-site">OCR</h2>
                    <hr/>
                    <p>(Optical Character Recognition) <br/>is a technology that extracts the text from an image or a
                        scanned document so that it can be edited.<br/>
                        <br/>
                        <i className="fa fa-map-marker" aria-hidden="true"></i>
                        Mansoura, Egypt<br/>
                        <i className="fa fa-phone" aria-hidden="true"></i>
                        (0000)000-0000-000<br/>
                        <i className="fa fa-envelope-o" aria-hidden="true"></i>
                        mo7amdmosa@gmail.com
                    </p>
                    <a href="jhj"><i className="fab fa-facebook-f fa-2x"></i></a>
                    <a href="hjhj"><i className="fab fa-twitter fa-2x"></i></a>
                    <a href="hjh"><i className="fab fa-instagram fa-2x"></i></a>
                    <a href="hjh"><i className="fab fa-google-plus fa-2x"></i></a>

                </div>

                <div className="col-lg-6 col-md-6 col-sm-8">
                    <h2 className="card-site">Quick Contact</h2>
                    <hr/>
                    <form action="#" method="post">

                        <div className="field half first">
                            <label htmlFor="name">Name</label>
                            <input name="name" id="name" type="text" placeholder="Name"/>
                        </div>
                        <div className="field half">
                            <label htmlFor="email">Email</label>
                            <input name="email" id="email" type="email" placeholder="Email"/>
                        </div>
                        <div className="field">
                            <label htmlFor="message">Message</label>
                            <textarea name="message" id="message" rows="3" placeholder="Message"></textarea>
                        </div>
                        <ul className="actions">
                            <li><input value="Send Message" className="button alt" type="submit"/></li>
                        </ul>
                    </form>
                </div>
            </div>
            <div id="copyright-text">
                <p>Copyright &copy;
                    <script>document.write(new Date().getFullYear());</script>
                    All rights reserved | by <a
                        href="about.html">OCR</a></p>
            </div>
        </div>
    </footer>
);

export default Mainfooter;