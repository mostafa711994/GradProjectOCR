import React, {Component} from 'react';
import Topbar from "../../Topbar/Topbar";
import Sidebar from "../../Sidebar/Sidebar";
import '../../adminShared.css';
import axios from "axios";
import {Link} from 'react-router-dom';

class ViewUser extends Component{


    state = {
        users: [],

    }

    componentDidMount() {

        let obj = JSON.parse(sessionStorage.getItem('user'));
        if (obj && obj.api_token) {

            axios.get('http://127.0.0.1:8000/api/admin/users')
                .then(response => {

                    this.setState({users: response.data});
                    console.log(response);
                })

        }


    }

    deleteUser = (api_token) =>{

        let obj = JSON.parse(sessionStorage.getItem('user'));
        if (obj && obj.api_token) {


                axios.get('http://127.0.0.1:8000/api/admin/users/delete/user/'+ api_token)
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
                                    <h6 className="m-0 font-weight-bold text-primary">Users</h6>
                                </div>
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <table className="table table-bordered" id="dataTable" width="100%"
                                               cellSpacing="0">
                                            <thead>
                                            <tr>
                                                <th>id</th>
                                                <th>username</th>
                                                <th>email</th>
                                                <th>role</th>
                                                <th>Update</th>
                                                <th>Delete</th>

                                            </tr>
                                            </thead>
                                            <tfoot>
                                            <tr>
                                                <th>id</th>
                                                <th>username</th>
                                                <th>email</th>
                                                <th>role</th>
                                                <th>Update</th>
                                                <th>Delete</th>
                                            </tr>
                                            </tfoot>
                                            <tbody>
                                            {
                                                this.state.users.map(user => {
                                                    return (
                                                        <tr key={user.id}>
                                                            <td>{user.id}</td>
                                                            <td>{user.username}</td>
                                                            <td>{user.email}</td>
                                                            <td>{user.role}</td>
                                                            <td><Link to={`/admin/users/edit/user/${user.id}`}><button className="btn btn-primary btn-sm ">Update</button></Link></td>
                                                            <td><button className="btn btn-danger  btn-sm" onClick={()=>this.deleteUser(user.api_token)}>Delete</button></td>

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


export default ViewUser;