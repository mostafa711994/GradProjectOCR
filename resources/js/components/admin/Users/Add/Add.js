import React, {Component} from 'react';

import '../../adminShared.css';
import Topbar from "../../Topbar/Topbar";
import Sidebar from "../../Sidebar/Sidebar";
import isAlpha from "validator/lib/isAlpha";
import isEmail from "validator/lib/isEmail";
import axios from "axios";
import {Redirect} from 'react-router-dom';


class Add extends Component {

    state = {
        first_name: "",
        last_name: "",
        username: "",
        email: "",
        password: "",
        address: "",
        phone_number: "",
        role:"",
        errors: {},
        alertMessage: "",
        redirect: false,
    }


        validate = (userData) => {

        let errors = {first_name:[],last_name:[],username:[],email:[],password:[],address:[],phone_number:[],role:[]};

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
            if(!userData.role){
                errors.role.push("Field can not be empty");
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




        if ( errors.first_name.length >0 || errors.last_name.length >0 || errors.username.length >0 || errors.email.length >0 || errors.username.length >0 || errors.password.length > 0 || errors.address.length >0 || errors.phone_number.length > 0 || errors.role.length > 0) {
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
                role:this.state.role
            }
            axios.post('http://127.0.0.1:8000/api/admin/users/store', user)
                .then(res => {
                    console.log(res);
                    this.setState({redirect: true});
                })

                .catch(error => {
                    this.setState({
                        errors:error.response.data.errors,
                        redirect: false
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
            return <Redirect to="/admin/users/viewUser"/>
        }
        return (
            <div id="wrapper">

                <Sidebar/>

                <div id="content-wrapper" className="d-flex flex-column">

                    <Topbar/>

                        <div className="container-fluid">


                            <div className="row mt-8">
                                <div className="col-12 col-md-8 offset-0 offset-md-2">
                                    <div className="card shadow shadow-lg border border-primary my-5 ">
                                        <div className="card-header">
                                            Create User
                                        </div>
                                        <div className="card-body">

                                            <form action="#" method="POST">

                                                <input type="text" className="form-control" name="first_name" value={this.state.first_name} onChange={e => this.setState({ first_name: e.target.value })}
                                                       placeholder="Enter First Name" required/>
                                                {this.displayErrors('first_name')}

                                                <br/>
                                                <input type="text" className="form-control" name="last_name" value={this.state.last_name} onChange={e => this.setState({ last_name: e.target.value })}
                                                       placeholder="Enter Last Name" required/>
                                                {this.displayErrors('last_name')}

                                                <br/>
                                                <input type="text" className="form-control" name="username" value={this.state.username} onChange={e => this.setState({ username: e.target.value })}
                                                       placeholder="Enter Username" required/>
                                                {this.displayErrors('username')}

                                                <br/>
                                                <input type="email" className="form-control" name="email" value={this.state.email} onChange={e => this.setState({ email: e.target.value })}

                                                       placeholder="Enter user email" required/>
                                                {this.displayErrors('email')}

                                                <br/>


                                                    <select name="role" value={this.state.role} onChange={e => this.setState({ role: e.target.value })}  id="" className="form-control">
                                                        <option hidden value=''>Select Option</option>
                                                        <option value='0'>User</option>
                                                        <option value='1'>Admin</option>
                                                    </select>
                                                {this.displayErrors('role')}

                                                <br/>

                                                <input type="text" className="form-control" name="phone_number" value={this.state.phone_number} onChange={e => this.setState({ phone_number: e.target.value })}

                                                       placeholder="Enter user phone number" required/>
                                                {this.displayErrors('phone_number')}

                                                <br/>
                                                <input type="text" className="form-control" name="address"  value={this.state.address} onChange={e => this.setState({ address: e.target.value })}

                                                       placeholder="Enter user address" required/>
                                                {this.displayErrors('address')}

                                                <br/>

                                                <input type="password" className="form-control" name="password" value={this.state.password} onChange={e => this.setState({ password: e.target.value })}

                                                       placeholder="Enter user Password" required/>
                                                {this.displayErrors('password')}

                                                <br/>
                                                <button type="submit" onClick={ this.handleFormSubmit} className="btn btn-primary">Add User</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>


                    </div>

                </div>


        );

    }


}

export default Add;