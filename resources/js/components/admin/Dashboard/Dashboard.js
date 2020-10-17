import React,{Component} from 'react';
import '../adminShared.css';
import axios from 'axios';
import Topbar from "../Topbar/Topbar";
import Sidebar from "../Sidebar/Sidebar";

class dashboard extends Component{


    state = {

        data:{}
    }



    componentDidMount() {

        let obj = JSON.parse(sessionStorage.getItem('user'));
        if(obj && obj.api_token) {

            axios.get('http://127.0.0.1:8000/api/admin')
                .then(response=>{

                    this.setState({data:response.data});
                    console.log(response);
                })

        }



    }


    render(){
        return(

            <div id="wrapper">

               <Sidebar/>

                <div id="content-wrapper" className="d-flex flex-column">

                    <div id="content">

                        <Topbar/>

                        <div className="container-fluid">

                            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                                <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                            </div>

                            <div className="row">

                                <div className="col-xl-3 col-md-6 mb-4">
                                    <div className="card border-left-primary shadow h-100 py-2">
                                        <div className="card-body">
                                            <div className="row no-gutters align-items-center">
                                                <div className="col mr-2">
                                                    <div
                                                        className="text-xs font-weight-bold text-primary text-uppercase mb-1">Users
                                                    </div>
                                                    <div className="h5 mb-0 font-weight-bold text-gray-800">{this.state.data.user}</div>
                                                </div>
                                                <div className="col-auto">
                                                    <i className="fas fa-calendar fa-2x text-gray-300"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-3 col-md-6 mb-4">
                                    <div className="card border-left-success shadow h-100 py-2">
                                        <div className="card-body">
                                            <div className="row no-gutters align-items-center">
                                                <div className="col mr-2">
                                                    <div
                                                        className="text-xs font-weight-bold text-success text-uppercase mb-1">Plans
                                                    </div>
                                                    <div className="h5 mb-0 font-weight-bold text-gray-800">{this.state.data.plan}</div>
                                                </div>
                                                <div className="col-auto">
                                                    <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-3 col-md-6 mb-4">
                                    <div className="card border-left-info shadow h-100 py-2">
                                        <div className="card-body">
                                            <div className="row no-gutters align-items-center">
                                                <div className="col mr-2">
                                                    <div className="text-xs font-weight-bold text-info text-uppercase mb-1">OCR
                                                        Photos
                                                    </div>
                                                    <div className="row no-gutters align-items-center">
                                                        <div className="col-auto">
                                                            <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">{this.state.data.ocr}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-auto">
                                                    <i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-3 col-md-6 mb-4">
                                    <div className="card border-left-warning shadow h-100 py-2">
                                        <div className="card-body">
                                            <div className="row no-gutters align-items-center">
                                                <div className="col mr-2">
                                                    <div
                                                        className="text-xs font-weight-bold text-warning text-uppercase mb-1">Feedback
                                                    </div>
                                                    <div className="h5 mb-0 font-weight-bold text-gray-800">{this.state.data.feedback}</div>
                                                </div>
                                                <div className="col-auto">
                                                    <i className="fas fa-comments fa-2x text-gray-300"></i>
                                                </div>
                                            </div>
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






export default dashboard;