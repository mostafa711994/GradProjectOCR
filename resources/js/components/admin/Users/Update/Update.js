import React, {Component} from 'react';

import '../../adminShared.css';
import Topbar from "../../Topbar/Topbar";
import Sidebar from "../../Sidebar/Sidebar";
import axios from "axios";

class Update extends Component {

    constructor(props){

        super(props);
        this.state = {
            role:''
        }
    }




    componentDidMount() {

        let obj = JSON.parse(sessionStorage.getItem('user'));
        if (obj && obj.api_token) {

            axios.get('http://127.0.0.1:8000/api/admin/users/edit/user/' +this.props.match.params.id)
                .then(response => {

                    this.setState({role: response.data});
                    console.log(response.data);
                })

        }

    }

    userOnChange = (e) =>{

       const kkk =  this.setState({role: e.target.value});
       console.log(kkk);
    }

    onSubmit = (e) => {

        e.preventDefault();
        let obj = JSON.parse(sessionStorage.getItem('user'));
        if (obj && obj.api_token) {
            const role = {
                role:this.state.role
            }

            axios.post('http://127.0.0.1:8000/api/admin/users/update/user/' + this.props.match.params.id,role)
                .then(response => {
                    console.log(response.data);
                })

        }

    }


    render() {

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
                                            Update User
                                        </div>
                                        <div className="card-body">

                                            <form action="#" method="POST">


                                                <div className="form-group">

                                                    <select  value={this.state.role}  onChange={this.userOnChange} name="role" id="" className="form-control">
                                                        <option hidden value=''>Select Option</option>
                                                        <option value="1">admin</option>
                                                        <option value='0'>user</option>
                                                    </select>
                                                </div>

                                                <button type="submit" onClick={this.onSubmit} className="btn btn-primary">Update</button>
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

export default Update;