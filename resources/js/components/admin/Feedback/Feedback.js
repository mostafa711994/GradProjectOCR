import React, {Component} from 'react';

import '../adminShared.css';
import Topbar from "../Topbar/Topbar";
import Sidebar from "../Sidebar/Sidebar";
import axios from "axios";


class Feedback extends Component{


    state = {
        feedback: [],

    }

    componentDidMount() {

        let obj = JSON.parse(sessionStorage.getItem('user'));
        if (obj && obj.api_token) {

            axios.get('http://127.0.0.1:8000/api/admin/feedback')
                .then(response => {

                    this.setState({feedback: response.data});
                    console.log(response);
                })

        }


    }


   

    render(){

        return (
            <div id="wrapper">

                <Sidebar/>

                <div id="content-wrapper" className="d-flex flex-column">

                    <div id="content">

                        <Topbar/>

                        <div className="container-fluid">


                            <div className="card shadow mb-4">
                                <div className="card-header py-3">
                                    <h6 className="m-0 font-weight-bold text-primary">feedback</h6>
                                </div>
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <table className="table table-bordered" id="dataTable" width="100%"
                                               cellSpacing="0">
                                            <thead>
                                            <tr>
                                                <th>id</th>
                                                <th>name</th>
                                                <th>email</th>
                                                <th>message</th>
                                             
                                            </tr>
                                            </thead>
                                            <tfoot>
                                            <tr>
                                                <th>id</th>
                                                <th>name</th>
                                                <th>email</th>
                                                <th>message</th>
                                               
                                            </tr>
                                            </tfoot>
                                            <tbody>
                                            {
                                                this.state.feedback.map(feedback => {
                                                    return (
                                                        <tr key={feedback.id}>
                                                            <td>{feedback.id}</td>
                                                            <td>{feedback.name}</td>
                                                            <td>{feedback.email}</td>
                                                            <td>{feedback.message}</td>
                                                           
                                                        </tr>
                                                    )
                                                })

                                            }
                                            </tbody>
                                        </table>
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


export default Feedback;