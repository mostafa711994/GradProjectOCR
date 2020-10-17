import React, {Component} from 'react';

import '../adminShared.css';
import Topbar from "../Topbar/Topbar";
import Sidebar from "../Sidebar/Sidebar";
import axios from "axios";

class ocrView extends Component {

    state = {

        ocrs: []
    }

    componentDidMount() {

        let obj = JSON.parse(sessionStorage.getItem('user'));
        if (obj && obj.api_token) {

            axios.get('http://127.0.0.1:8000/api/admin/ocr')
                .then(response => {

                    this.setState({ocrs: response.data});
                    console.log(response);
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


                            <div className="card shadow mb-4">
                                <div className="card-header py-3">
                                    <h6 className="m-0 font-weight-bold text-primary">OCRS</h6>
                                </div>
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <table className="table table-bordered" id="dataTable" width="100%"
                                               cellSpacing="0">
                                            <thead>
                                            <tr>
                                                <th>id</th>
                                                <th>name</th>
                                                <th>extension</th>
                                                <th>Ip Address</th>
                                                <th>Mac Address</th>
                                                <th>user_id</th>

                                            </tr>
                                            </thead>
                                            <tfoot>
                                            <tr>
                                                <th>id</th>
                                                <th>name</th>
                                                <th>extension</th>
                                                <th>Ip Address</th>
                                                <th>Mac Address</th>
                                                <th>user_id</th>
                                            </tr>
                                            </tfoot>
                                            <tbody>
                                            {
                                                this.state.ocrs.map(ocr => {
                                                    return (
                                                        <tr key={ocr.id}>
                                                            <td>{ocr.id}</td>
                                                            <td><img width="70px" height="50px" src={'http://127.0.0.1:8000/storage/uploads/'+ ocr.name} alt="ocr image"/></td>
                                                            <td>{ocr.extension}</td>
                                                            <td>{ocr.ip_address}</td>
                                                            <td>{ocr.mac_address}</td>
                                                            <td>{ocr.user_id}</td>

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


export default ocrView;