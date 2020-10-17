import React, {Component} from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import '../shared.css';
import Image from '../../images/99.png';
import isEmail from 'validator/lib/isEmail';
import isAlpha from 'validator/lib/isAlpha';

class Register extends Component {

    state = {
        first_name: "",
        last_name: "",
        username: "",
        email: "",
        password: "",
        address: "",
        phone_number: "",
        errors:{},
        alertMessage: "",
        redirect: false,



    }
    componentDidMount() {
        let obj = JSON.parse(sessionStorage.getItem('user'));
        if (obj && obj.api_token) {
            this.setState({redirect: true});


        } else {
            this.setState({redirect: false});
            console.log('Not Logging');
        }


    }



    validate = (userData) => {

        let errors = {first_name:[],last_name:[],username:[],email:[],password:[],address:[],phone_number:[]};

        if(!userData.first_name){
            errors.first_name.push("Field can not be empty");
        }
        if(!userData.last_name){
            errors.last_name.push("Field can not be empty");
        }
        if(!userData.username){
            errors.username.push("Field can not be empty");
        }

        if(!userData.email){
            errors.email.push("Field can not be empty");
        }


        if(!userData.password ){
            errors.password.push("Field can not be empty");

        }

        if(!userData.address){
            errors.address.push("Field can not be empty");
        }
        if(!userData.phone_number){
            errors.phone_number.push("Field can not be empty");
        }

        if(!isAlpha(userData.first_name)){
            errors.first_name.push(" First name must be a string");
        }
        if(!isAlpha(userData.last_name)){
            errors.last_name.push(" Last name must be a string");
        }
        if(!isAlpha(userData.username)){
            errors.username.push("The username must be a string");
        }

        if(!isEmail(userData.email)){
            errors.email.push("The email must be a valid email address");
        }


        if(userData.password.length < 6){
            errors.password.push("password must be between 6 to 50 characters");

        }
        if(userData.phone_number.length < 10){
            errors.phone_number.push("Phone Number must be greater than 9 numbers");

        }




        if ( errors.first_name.length >0 || errors.last_name.length >0 || errors.username.length >0 || errors.email.length >0 || errors.username.length >0 || errors.password.length > 0 || errors.address.length >0 || errors.phone_number.length > 0) {
            this.setState({errors});
            return false;
        }

        return true;
    }


    displayErrors = (field) => {

        if(this.state.errors[field]){

            return this.state.errors[field].map(error => (

                <span key={error}>
                    <small style={{color:"#E27C3E"}}>{error}</small>
                    <br/>
                </span>

            ));
        }

    }


    handleFormSubmit = (event) => {
        event.preventDefault();
        const isValid = this.validate(this.state);

        if(isValid){
            const user = {
                first_name:this.state.first_name,
                last_name:this.state.last_name,
                username:this.state.username,
                email:this.state.email,
                password:this.state.password,
                address:this.state.address,
                phone_number:this.state.phone_number,
            }
            axios.post('http://127.0.0.1:8000/api/register', user)
                .then(res => {
                    console.log(res);
                    this.setState({redirect: true});
                })

                .catch(error => {
                    this.setState({
                        errors:error.response.data.errors
                    });

                })

            this.setState({

                errors:{},
                alertMessage: "",

            });
        }


    }


    render() {
        if (this.state.redirect) {
            return <Redirect to="/login"/>
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
                                            <span className="ts">SIGN UP</span>
                                        </div>
                                        <form className="f">
                                            <div className="u">
                                                <span className="u">First name :</span>
                                                <input type="text" name="first_name" value={this.state.first_name} onChange={e => this.setState({ first_name: e.target.value })} placeholder="Enter your First name"/>
                                            </div>
                                            {this.displayErrors('first_name')}
                                            <div className="u">
                                                <span className="u">last name :</span>
                                                <input type="text" name="last_name" value={this.state.last_name} onChange={e => this.setState({ last_name: e.target.value })} placeholder="Enter your Last name"/>
                                            </div>
                                            {this.displayErrors('last_name')}
                                            <div className="u">
                                                <span>Username :</span>
                                                <input type="text" name="username" value={this.state.username} onChange={e => this.setState({ username: e.target.value })} placeholder="Enter username"/>
                                            </div>
                                            {this.displayErrors('username')}

                                            <div className="u">
                                                <span className="u">E-mail :</span>
                                                <input type="email" name="email" value={this.state.email} onChange={e => this.setState({ email: e.target.value })} placeholder="Enter your e-mail"/>
                                            </div>

                                            {this.displayErrors('email')}


                                            <div className="u">
                                                <span className="u">Password : </span>
                                                <input type="password" name="password" value={this.state.password} onChange={e => this.setState({ password: e.target.value })} placeholder="Enter your password"/>
                                            </div>
                                            {this.displayErrors('password')}
                                            <div className="u">
                                                <span className="u">Address :</span>
                                                <input type="text" name="address" value={this.state.address} onChange={e => this.setState({ address: e.target.value })} placeholder="Enter your address"/>
                                            </div>
                                            {this.displayErrors('address')}
                                            <div className="u">
                                                <span className="u">Phone Number :</span>
                                                <input type="text" name="phone_number" value={this.state.phone_number} onChange={e => this.setState({ phone_number: e.target.value })} placeholder="Enter your Phone Number"/>
                                            </div>
                                            {this.displayErrors('phone_number')}

                                            <br/>
                                            
                                            <div className="c-btn">
                                                <button onClick={ this.handleFormSubmit} className="su-btn"> Sign Up</button>
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

export default Register;


