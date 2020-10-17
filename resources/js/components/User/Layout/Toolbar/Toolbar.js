import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Image5 from '../../../images/OCR.png';
import '../../shared.css';
class Toolbar extends Component {

    state = {
        redirect: true
    }

    componentDidMount() {
        let obj = JSON.parse(sessionStorage.getItem('user'));
        if(obj && obj.api_token){
              this.setState({redirect: false});

        }
    }


    logout = () => {
        sessionStorage.setItem('user', '');
        sessionStorage.clear();
        this.setState({redirect: true});


    }


    render() {
        let obj = JSON.parse(sessionStorage.getItem('user'));


        const userLinks = (
            <div>
                <Link to="/">Home</Link>
                <Link to="/Features">Features</Link>
                <Link to="/Pro">Pro</Link>
                <Link to="/faq">FAQ</Link>
                <Link to="/profile">Profile</Link>
                <Link to="/upload">Upload</Link>
                <Link to="/tutorial">Tutorial</Link>
                <Link to="/archive">Archive</Link>
                <Link to="/payment">Payment</Link>
                <Link to="/android">Android</Link>
                <Link to="/Contact">Contact us</Link>
                {obj && obj.api_token && obj.role === 1 ? <Link to="/admin">admin area</Link>:null}

                <Link to="/" onClick={this.logout}>Log out</Link>


            </div>

        );
        const guestLinks = (
            <div>

                <Link to="/">Home</Link>
                <Link to="/Features">Features</Link>
                <Link to="/Pro">Pro</Link>
                <Link to="/faq">FAQ</Link>
                <Link to="/tutorial">Tutorial</Link>
                <Link to="/archive">Archive</Link>
                <Link to="/Contact">Contact us</Link>
                <Link to="/Login">Log in</Link>
                <Link to="/Register">Sign up</Link>
            </div>
        );


        return (
            <header id="header">
                <div className="inner">
                    <div className="logo_container">
                        <a href="/">
                            <img alt="OCR" className="logo_image" src={Image5}/>
                        </a>
                    </div>
                    <nav id="nav">
                        <div>
                            {this.state.redirect ? guestLinks : userLinks}

                        </div>
                    </nav>
                    <a href="/navPanel" className="navPanelToggle"><span className="fa fa-bars"></span></a>
                </div>
            </header>
        );
    }
}


export default Toolbar;