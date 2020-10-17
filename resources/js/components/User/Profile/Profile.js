import React, {Component} from 'react';
import '../shared.css';
import Image2 from '../../images/header.jpg';
import axios from "axios";
import Image from '../../images/default2.jpg';
class Profile extends Component {
    state = {
        file: null,
        alertMessage: "",
        redirect: false,
       username:'',
       phone_number:'',
       email:'',
       address:'',
       plan_id: '',
        image:'',
    }

    componentDidMount() {
        let obj = JSON.parse(sessionStorage.getItem('user'));

        axios.get('http://127.0.0.1:8000/api/profile/' + obj.api_token)
            .then(response => {
                this.setState({username: response.data.username,
                    phone_number: response.data.phone_number,
                    email: response.data.email,
                    address: response.data.address,
                    plan: response.data.plan,
                    image: response.data.image});
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            })

        //Open 'Personal Information' Tab By Default
        document.getElementById("defaultOpen").click();

    }

    openPage = (pageName, elmnt, fontcolor, color, shadow) => {
        // Variables
        let i, tabcontent, tabfont, tablinks, tabshadow;

        // Loop To Change Content Of Each Tab
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }

        // Loop To Change Background Color Of Each Tab
        tablinks = document.getElementsByClassName("tablink");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].style.backgroundColor = "";
        }

        // Loop To Change Shadow Of Each Tab
        tabshadow = document.getElementsByClassName("tablink");
        for (i = 0; i < tabshadow.length; i++) {
            tabshadow[i].style.boxShadow = "";
        }
        // Loop To Change Font Color Of Each Tab
        tabfont = document.getElementsByClassName("tablink");
        for (i = 0; i < tabfont.length; i++) {
            tabfont[i].style.color = "";
        }


        // Apply Return Values
        document.getElementById(pageName).style.display = "block";
        elmnt.style = {
            backgroundColor: color,
            color: fontcolor,
            boxShadow: shadow
        }
        elmnt.style.backgroundColor = color;
        elmnt.style.color = fontcolor;
        elmnt.style.boxShadow = shadow;
    }



    render() {
        const myStyle = {
            backgroundImage: `url(${Image2})`
        };

        return (
            <div id="profile" className="profile-page">
                <div className="page-header header-filter" data-parallax="true"
                     style={myStyle}></div>
                <div className="white_container">
                    <div className="profile-content">
                        <div className="container">

                            <div className="profile">
                                {this.state.image?<img className="user_image" src={'http://127.0.0.1:8000/uploads/'+this.state.image.name} alt="User Image"/>:
                                    <img src={Image} className="user_image"  alt=""/>

                                }
                            </div>
                            <h3 className="user_name">{this.state.username}</h3>


                            <div className="row">
                                <div className="col-md-6 ml-auto mr-auto">
                                    <div className="profile-tabs">
                                        <ul className="nav nav-pills nav-pills-icons justify-content-center"
                                            role="tablist">
                                            <li className="nav-item">
                                                <a className="nav-link tablink"
                                                   onClick={() => this.openPage('PI', this, '#ffffff', '#31945c', '0 5px 20px 0 rgba(0, 0, 0, .2), 0 13px 24px -11px rgb(49, 148, 92, .8)')}
                                                   id="defaultOpen">
                                                    <i className="material-icons">person</i>INFO</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link tablink"
                                                   onClick={() => this.openPage('Plan', this, '#ffffff', '#31945c', '0 5px 20px 0 rgba(0, 0, 0, .2), 0 13px 24px -11px rgb(49, 148, 92, .8)')}>
                                                    <i className="material-icons">notes</i>PLAN</a>
                                            </li>
                                            {/*<li className=" nav-item">*/}
                                            {/*    <a className="nav-link tablink"*/}
                                            {/*       onClick={() => this.openPage('Archive', this, '#ffffff', '#31945c', '0 5px 20px 0 rgba(0, 0, 0, .2), 0 13px 24px -11px rgb(49, 148, 92, .8)')}>*/}
                                            {/*        <i className="material-icons">archive</i>Archive</a>*/}
                                            {/*</li>*/}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="tab-content tab-space">

                                <div className="row">
                                    <div id="PI" className="content tabcontent">
                                        <div className="main_inf_container">

                                            <ul className="main_information">
                                                <li>Name :{this.state.username}</li>
                                                <li>Phone :{this.state.phone_number}</li>
                                                <li>E-Mail :{this.state.email}</li>
                                                <li>Address :{this.state.address}</li>
                                                <li>Plan :{this.state.plan? this.state.plan.name:'No plan Chosen yet'}</li>


                                            </ul>
                                        </div>
                                        {/*<div className="real_val_container">*/}


                                        {/*                <ul className="real_values">*/}
                                        {/*                    /!*<li></li>*!/*/}
                                        {/*                    /!*<li>{user.phone_number}</li>*!/*/}
                                        {/*                    /!*<li>{user.email}</li>*!/*/}
                                        {/*                    /!*<li>{user.address}</li>*!/*/}
                                        {/*                    /!*<li>(user.plan_id)</li>*!/*/}

                                        {/*                </ul>*/}


                                        {/*</div>*/}
                                    </div>
                                </div>

                                <div className="row">
                                    <div id="Plan" className="content tabcontent">
                                        <div className="main_inf_container">
                                            <ul className="main_information">


                                                <li>Plan : {this.state.plan? this.state.plan.name:'No plan Chosen yet'}</li>
                                                    <li>Cost : ${this.state.plan? this.state.plan.price:'No plan Chosen yet'}</li>
                                                    <li>Trials : {this.state.plan? this.state.plan.trials:'No plan Chosen yet'} Trials</li>



                                            </ul>
                                        </div>
                                        <div className="real_val_container">

                                        </div>
                                    </div>
                                </div>

                                {/*<div className="row">*/}
                                {/*    <div id="Archive" className="content tabcontent">*/}
                                {/*        <div className="main_inf_container">*/}
                                {/*            <ul className="main_information">*/}
                                {/*                <li>No. Of Files Scanned :</li>*/}
                                {/*                <li>No. Of Files Archived :</li>*/}
                                {/*                <li>Files Archived :</li>*/}
                                {/*            </ul>*/}
                                {/*        </div>*/}
                                {/*        <div className="real_val_container">*/}
                                {/*            <ul className="real_values">*/}
                                {/*                <li>43</li>*/}
                                {/*                <li>22</li>*/}
                                {/*                <li>*/}
                                {/*                    <a className="change-pass" href="archive.html">See Archived*/}
                                {/*                        Files</a>*/}
                                {/*                </li>*/}
                                {/*            </ul>*/}
                                {/*        </div>*/}
                                {/*    </div>*/}
                                {/*</div>*/}

                            </div>
                        </div>
                    </div>
                </div>

            </div>


        );
    }
}

export default Profile;

