import React, {Component} from 'react';
import '../shared.css';
import axios from 'axios';

class Pro extends Component {

    state = {
        plans: [],
        alertMessage: ""
    }

    componentDidMount() {

        axios.get('http://127.0.0.1:8000/api/admin/plans')
            .then(response => {
                this.setState({plans: response.data});
            });
    }


    planSubmit = (id) => {

        let obj = JSON.parse(sessionStorage.getItem('user'));
        if (obj && obj.api_token) {
            axios.post('http://127.0.0.1:8000/api/user/' + obj.api_token + '/plan/' + id)
                .then(response => {
                    console.log(response);
                })
                .catch(error => {
                    console.log(error.response);


                });
        } else {
            this.setState({alertMessage: "error"});
        }



    }


    render() {
        return (
            <section id="pro" className="main_container">
                <div className="inner">

                    <section id="price">
                        <div className="container">
                            <div className="row">

                                {this.state.alertMessage === "error" ?
                                    <div className="alert alert-danger" role="alert" style={{width:"100%"}}>
                                        You have to login or sign up first
                                    </div> : null}

                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <h1 className="os-animation" data-os-animation="zoomIn"
                                        data-os-animation-delay="0.3s">Pricing & Plan
                                    </h1>
                                </div>

                            </div>
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div className="centerarticle">

                                        {

                                            this.state.plans.map(plan => {
                                                return (
                                                    <article className="innerprice os-animation"
                                                             data-os-animation="fadeIn"
                                                             data-os-animation-delay="0.5s" key={plan.id}>
                                                        <h>{plan.name}</h>
                                                        <h2>${plan.price}</h2>
                                                        <span>{plan.trials} Trials</span>
                                                        <p className="innerp">Justo Fringilla</p>
                                                        <p className="innerp">Mollis Sit Nullam</p>
                                                        <p className="innerp">Ultricies Purus Amet</p>
                                                        <p className="innerp">Cras Inceptos</p>
                                                        <button className="btnplan"
                                                                onClick={() => this.planSubmit(plan.id)}>SELECT PLAN
                                                        </button>
                                                    </article>


                                                )
                                            })
                                        }


                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <h3 className="plans os-animation" data-os-animation="zoomIn"
                                        data-os-animation-delay="0.3s">OCR Premium Membership offers you</h3>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                    <div className="checkfeatures os-animation" data-os-animation="fadeIn"
                                         data-os-animation-delay="0.4s">
                                        <i-pro className="fas fa-cloud-showers-heavy fa-2x"></i-pro>
                                        <p className="innerp">Maecenas faucibus mollis interdum</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                    <div className="checkfeatures os-animation" data-os-animation="fadeIn"
                                         data-os-animation-delay="0.4s">
                                        <i-pro className="fas fa-ad fa-2x"></i-pro>
                                        <p className="innerp"> Vestibulum id ligula porta felis euismod</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                    <div className="checkfeatures os-animation" data-os-animation="fadeIn"
                                         data-os-animation-delay="0.4s">
                                        <i-pro className="fas fa-infinity fa-2x"></i-pro>
                                        <p className="innerp"> Nulla vitae elit libero, a pharetra augue</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </section>
        );

    }

}


export default Pro;