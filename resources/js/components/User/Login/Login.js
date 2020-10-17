import React, {Component} from 'react';
import axios from 'axios';
import '../shared.css';

import Image from '../../images/9.png'
import {Redirect} from 'react-router-dom';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            usernameError: "",
            passwordError: "",
            // errors:{},
            alertMessage: "",
            redirect: false
        }

    }

    componentDidMount() {
        let obj = JSON.parse(sessionStorage.getItem('user'));
        if(obj && obj.api_token){
              this.setState({redirect: true});



        }else{
            this.setState({redirect: false});

        }
    }


    validate = () => {
        let usernameError = "";
        let passwordError = "";
        if (!this.state.username) {
            usernameError = "Name Can Not Be Empty";
        }

        if (!this.state.password) {
            passwordError = "Password Can Not Be Empty";
        }

        if (usernameError  || passwordError) {
            this.setState({usernameError , passwordError});
            return false;
        }

        return true;
    }




    handleFormSubmit = (event) => {
        event.preventDefault();
        const isValid = this.validate(this.state);
        const user = {
            username: this.state.username,
            password: this.state.password,
        }


        if (isValid) {
            axios.post('http://127.0.0.1:8000/api/login', user)
            // .then((response)=> response.json())
                .then(responseJson => {
                    this.setState({alertMessage: "success"});
                    console.log(responseJson);
                    sessionStorage.setItem('user', JSON.stringify(responseJson.data));
                    this.setState({redirect: true});
                })
                .catch(error => {
                    this.setState({alertMessage: "error"});
                    console.log(error.response);

                    // this.setState({
                    //    errors:error.response.data.errors
                    // });

                })



            this.setState({

                usernameError: "",
                passwordError: "",
                // errors:{},
                alertMessage: ""

            });


        }

    }


    render() {
        if (this.state.redirect) {
            return <Redirect to="/"/>
        }
        return (
            <section id="login" className="main_container">
                <div className="inner">

                    <div className="limit">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-8">
                                    <div className="log">
                                        <div className="login_title">
                                            <span className="ts">LOGIN</span>
                                        </div>
                                        {this.state.alertMessage?
                                            <div className="alert alert-danger" role="alert">
                                                username or password not correct
                                            </div> : null}

                                        <form className="f">
                                            <div className="u">
                                                <span className="u">Username:</span>
                                                <input type="text" name="username" value={this.state.username}
                                                       onChange={e => this.setState({username: e.target.value})}
                                                       placeholder="Enter username"/>
                                                <div style={{fontSize: 12, color: "red"}}>{this.state.usernameError}</div>

                                            </div>
                                            <div className="p">
                                                <span>Password:</span>
                                                <input type="password" name="password" value={this.state.password}
                                                       onChange={e => this.setState({password: e.target.value})}
                                                       placeholder="Enter password"/>


                                            <div style={{fontSize: 12, color: "red"}}>{this.state.passwordError}</div>

                                            </div>


                                            <br/>
                                            <div className="c-btn">
                                                <button className="log-btn" onClick={this.handleFormSubmit}>Login</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="image_container">
                                    <img className="photo" src={Image} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        );
    }
}


export default Login;



