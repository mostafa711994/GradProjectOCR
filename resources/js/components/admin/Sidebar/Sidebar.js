import React from 'react';
import {Link} from 'react-router-dom';

const sidebar = () => (

    <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

        <Link to="/" className="sidebar-brand d-flex align-items-center justify-content-center" >
            <div className="sidebar-brand-icon rotate-n-15">
                <i className="fas fa-laugh-wink"></i>
            </div>
            <div className="sidebar-brand-text mx-3">Home</div>
        </Link>


        <hr className="sidebar-divider my-0"/>


        <li className="nav-item active">
            <a className="nav-link" href="/admin">
                <i className="fas fa-fw fa-tachometer-alt"></i>
                <span>Dashboard</span></a>
        </li>


        <hr className="sidebar-divider"/>


        <li className="nav-item">
            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
               aria-expanded="true" aria-controls="collapseTwo">
                <i className="fas fa-fw fa-cog"></i>
                <span>Users</span>
            </a>
            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                <div className="bg-white py-2 collapse-inner rounded">
                    <Link to="/admin/users/viewUser" className="collapse-item" >View Users</Link>
                    <Link to="/admin/users/addUser"  className="collapse-item">Add User</Link>

                </div>
            </div>
        </li>

        <li className="nav-item">
            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities"
               aria-expanded="true" aria-controls="collapseUtilities">
                <i className="fas fa-fw fa-wrench"></i>
                <span>Plans</span>
            </a>
            <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities"
                 data-parent="#accordionSidebar">
                <div className="bg-white py-2 collapse-inner rounded">
                    <Link to="/admin/plans/viewPlan" className="collapse-item">View Plans</Link>
                    <Link to="/admin/plans/addPlan" className="collapse-item">Add Plan</Link>

                </div>
            </div>
        </li>

        <hr className="sidebar-divider"/>


        <li className="nav-item">
            <Link to="/admin/ocrs/ocrView" style={{fontSize:"13px"}}  className="nav-link">
                    <i className="fas fa-fw fa-chart-area"></i>
                ocrPhotos
            </Link>

        </li>
        <li className="nav-item" >
            <Link to="/feedback" className="nav-link" style={{fontSize:"13px"}}>
                    <i className="fas fa-fw fa-chart-area"></i>
                Feedback
            </Link>

        </li>


    </ul>


);

export default sidebar;