import React, {Component} from 'react';

import '../../adminShared.css';
import Topbar from "../../Topbar/Topbar";
import Sidebar from "../../Sidebar/Sidebar";
import axios from "axios";
import isAlpha from "validator/lib/isAlpha";
import {Redirect} from 'react-router-dom';

class updatePlan extends Component {


    constructor(props){

        super(props);
        this.state = {
            name:'',
            price:'',
            trials:'',
            errors:{},
            redirect: false,

        }
    }




    componentDidMount() {

        let obj = JSON.parse(sessionStorage.getItem('user'));
        if (obj && obj.api_token) {

            axios.get('http://127.0.0.1:8000/api/admin/plans/edit/plan/' +this.props.match.params.id)
                .then(response => {

                    this.setState({name: response.data.name,price:response.data.price,trials:response.data.trials});
                    console.log(response.data);
                })

        }

    }

    validate = (userData) => {

        let errors = {name:[],price:[],trials:[]};

        if(!userData.name){
            errors.name.push("Field can not be empty");
        }
        if(!userData.price){
            errors.price.push("Field can not be empty");
        }
        if(!userData.trials){
            errors.trials.push("Field can not be empty");
        }
        if(!isAlpha(userData.name)){
            errors.name.push(" First name must be a string");
        }

        if ( errors.name.length >0 || errors.price.length >0 || errors.trials.length >0) {
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
            const plan = {
                name:this.state.name,
                price:this.state.price,
                trials:this.state.trials,

            }
            axios.post('http://127.0.0.1:8000/api/admin/plans/update/plan/' +this.props.match.params.id, plan)
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
            return <Redirect to="/admin/plans/viewPlan"/>
        }
        return (
            <div id="wrapper">

                <Sidebar/>

                <div id="content-wrapper" className="d-flex flex-column">

                    <div id="content">

                    <Topbar/>

                        <div className="container-fluid">


                            <div className="row mt-8">
                                <div className="col-12 col-md-8 offset-0 offset-md-2">
                                    <div className="card shadow shadow-lg border border-primary my-5 ">
                                        <div className="card-header">
                                            Update plan
                                        </div>
                                        <div className="card-body">

                                            <form action="#" method="POST">

                                                <input type="text" className="form-control" name="name" value={this.state.name} onChange={e => this.setState({name: e.target.value })}
                                                       placeholder="Enter plan type" required/>
                                                {this.displayErrors('name')}

                                                <br/>
                                                <input type="text" className="form-control" name="price" value={this.state.price} onChange={e => this.setState({ price: e.target.value })}
                                                       placeholder="enter plan price" required/>
                                                {this.displayErrors('price')}
                                                <br/>

                                                <input type="text" className="form-control" name="trials" value={this.state.trials} onChange={e => this.setState({ trials: e.target.value })}

                                                       placeholder="enter plan price" required/>
                                                {this.displayErrors('trials')}


                                                <br/>

                                                <button type="submit" onClick={this.handleFormSubmit} className="btn btn-primary">
                                                   Update
                                                </button>
                                            </form>
                                        </div>
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

export default updatePlan;