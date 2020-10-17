import React,{Component} from 'react';
import '../shared.css';
import isAlpha from "validator/lib/isAlpha";
import axios from "axios";
import isEmail from "validator/lib/isEmail";

class Contact extends Component{
    state = {
        name:'',
        email:'',
        message:'',
        errors: {},
    }


    validate = (userData) => {

        let errors = {name:[],email:[],message:[]};

        if(!userData.name){
            errors.name.push("Field can not be empty");
        }
        if(!userData.email){
            errors.email.push("Field can not be empty");
        }
        if(!userData.message){
            errors.message.push("Field can not be empty");
        }
        if(!isAlpha(userData.name)){
            errors.name.push(" First name must be a string");
        }
        if(!isEmail(userData.email)){
            errors.email.push("The email must be a valid email address");
        }


        if ( errors.name.length >0 || errors.email.length >0 || errors.message.length >0) {
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

        let obj = JSON.parse(sessionStorage.getItem('user'));

        const isValid = this.validate(this.state);

        if(isValid){
            const feedback = {
                name:this.state.name,
                email:this.state.email,
                message:this.state.message,

            }
            axios.post('http://127.0.0.1:8000/api/feedback/store?apiToken='+obj.api_token, feedback)
                .then(res => {
                    console.log(res);

                })

                .catch(error => {
                    this.setState({
                        errors:error.response.data.errors,
                    });

                })

            this.setState({

                errors:{},
                alertMessage: "",

            });
        }


    }

    render(){

        return (

            <section id="contact_edit" className="main_container">
                <div className="inner">

                    <div className="jumbotron">
                        <div className="page-header">
                            <div className="container">
                                <h2>Contact Us</h2>
                                <hr/>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                    has been the industry's standard dummy text ever since the 1500s, when an unknown
                                    printer took a galley of type and scrambled it to make a type
                                    specimen book.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row mt-8">
                            <div className="col-md-6">
                                <h3>Contact Information</h3>
                                <hr/>
                                <h5>Address(1)</h5>
                                <hr/>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                    unknown printer took a galley of type and scrambled it to make a type
                                    specimen book.
                                </p>
                                <hr/>
                                <h5>Address(2)</h5>
                                <hr/>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the
                                    1500s, when an unknown printer took a galley of type and scrambled it to
                                    make a type
                                    specimen book.
                                </p>
                                <hr/>
                                <h5>Telephones and faxes</h5>
                                <hr/>
                                <i className="fas fa-phone-alt"> (0000)000-0000-000</i>
                                <br/>
                                <i className="fas fa-fax"> (0000)000-0000-000</i>
                                <br/>
                                <i className="fas fa-phone-volume"> (0000)000-0000-000</i>

                            </div>

                            <div className="col-md-6 form">
                                <h3>Send your Feedback</h3>
                                <hr/>
                                <div className="card shadow shadow-lg ">
                                    <div className="card-body">
                                        <form className="feedback" method=" POST ">
                                            <label htmlFor=" name ">Name</label>
                                            <input type=" text " id=" name-contact " className=" form-control" value={this.state.name} onChange={e => this.setState({name: e.target.value })}
                                                   name="name" placeholder=" Enter your Full Name " required/>
                                            {this.displayErrors('name')}

                                            <br/>
                                            <label htmlFor=" name ">E-mail</label>
                                            <input type="email" id=" email-contact " className=" form-control" value={this.state.email} onChange={e => this.setState({email: e.target.value })}
                                                   name="email" placeholder="Enter your Email" required/>
                                            {this.displayErrors('email')}

                                            <br/>

                                            <label htmlFor="name">what's the matter?</label>
                                            <textarea className=" textareacontact " name="message" value={this.state.message} onChange={e => this.setState({message: e.target.value })}
                                                      id=" msg-contact " cols=" 40 " rows=" 5 "
                                                      required></textarea>
                                            {this.displayErrors('message')}

                                            <br/>
                                            <button type="submit" onClick={this.handleFormSubmit} className="btn">Send</button>
                                        </form>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </section>


        );
    }


}


export default Contact;