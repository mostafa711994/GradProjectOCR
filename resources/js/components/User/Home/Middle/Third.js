import React from 'react';
import {Link} from 'react-router-dom';
const third = () => (
    <div className="premium_container">


        <h1 className="premium_title">Looking for more? Go Pro !</h1>
        <hr className="line_premium_title"/>


        <div className="row">

            <div className="col-lg-4 col-sm-8">
                <i className="fa fa-cloud fa-3x"></i>
                <h3>1 GB of storage</h3>
                <p>All the space you need for your mission-critical business files.</p>
            </div>

            <div className="col-lg-4 col-sm-8">
                <i className="fa fa-ban fa-3x"></i>
                <h3>No ads</h3>
                <p>A more professional, ad-free experience for your employees and clients.</p>
            </div>

            <div className="col-lg-4 col-sm-8">
                <i className="fa fa-unlock fa-3x"></i>
                <h3>Unlimited Scan</h3>
                <p>You can scan unlimited photos any time.</p>
            </div>
        </div>

        <Link to="/pro"  className="button btn-pro" >Go Pro</Link>
    </div>

);

export default third;