import React, {Component} from 'react';

import '../../adminShared.css';
import Topbar from "../../Topbar/Topbar";
import Sidebar from "../../Sidebar/Sidebar";
import axios from "axios";
import {Link} from "react-router-dom";


class ViewPlan extends Component{


    state = {
        plans: [],

    }

    componentDidMount() {

        let obj = JSON.parse(sessionStorage.getItem('user'));
        if (obj && obj.api_token) {

            axios.get('http://127.0.0.1:8000/api/admin/plans')
                .then(response => {

                    this.setState({plans: response.data});
                    console.log(response);
                })

        }


    }


    deletePlan = (id) =>{

        let obj = JSON.parse(sessionStorage.getItem('user'));
        if (obj && obj.api_token) {


            axios.get('http://127.0.0.1:8000/api/admin/plans/delete/plan/'+ id)
                .then(response => {
                    this.componentDidMount();
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
                                    <h6 className="m-0 font-weight-bold text-primary">Plans</h6>
                                </div>
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <table className="table table-bordered" id="dataTable" width="100%"
                                               cellSpacing="0">
                                            <thead>
                                            <tr>
                                                <th>id</th>
                                                <th>type</th>
                                                <th>price</th>
                                                <th>trials</th>
                                                <th>Update</th>
                                                <th>Delete</th>
                                            </tr>
                                            </thead>
                                            <tfoot>
                                            <tr>
                                                <th>id</th>
                                                <th>type</th>
                                                <th>price</th>
                                                <th>trials</th>
                                                <th>Update</th>
                                                <th>Delete</th>
                                            </tr>
                                            </tfoot>
                                            <tbody>
                                            {
                                                this.state.plans.map(plan => {
                                                    return (
                                                        <tr key={plan.id}>
                                                            <td>{plan.id}</td>
                                                            <td>{plan.name}</td>
                                                            <td>{plan.price}</td>
                                                            <td>{plan.trials}</td>
                                                            <td><Link to={`/admin/plans/edit/plan/${plan.id}`}><button className="btn btn-primary btn-sm ">Update</button></Link></td>
                                                            <td><button className="btn btn-danger  btn-sm" onClick={()=>this.deletePlan(plan.id)}>Delete</button></td>

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


export default ViewPlan;