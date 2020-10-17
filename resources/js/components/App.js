import React,{Component} from 'react';
import './App.css';

import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from "./User/Home/Home";
import Login from "./User/Login/Login";
import Register from "./User/Register/Register";
import About from "./User/About/About";
import Android from "./User/Android/Android";
import Faq from "./User/Faq/Faq";
import Forget from "./User/Forget/Forget";
import Payment from "./User/Payment/Payment";
import Output from "./User/Output/Output";
import Profile from "./User/Profile/Profile";
import Reset from "./User/Reset/Reset";
import Tutorial from "./User/Tutorial/Tutorial";
import CodeVerification from "./User/CodeVerification/CodeVerification";
import Archive from "./User/Archive/Archive";
import Upload from "./User/Upload/Upload";
import Contact from "./User/Contact/Contact";
import Pro from "./User/Pro/pro";
import Features from "./User/Features/Features";
import Dashboard from "./admin/Dashboard/Dashboard";
import Layout from "./User/Layout/Layout";
import ViewUser from "./admin/Users/View/viewUser";
import Add from "./admin/Users/Add/Add";
import Update from "./admin/Users/Update/Update";
import viewPlan from "./admin/Plans/View/viewPlan";
import addPlan from "./admin/Plans/Add/addPlan";
import updatePlan from "./admin/Plans/Update/updatePlan";
import ocrView from "./admin/ocrPhotos/ocrView";
import Feedback from "./admin/Feedback/Feedback";
class App extends Component {


    render(){
        let obj = JSON.parse(sessionStorage.getItem('user'));
        return (

            <BrowserRouter>
                <Switch>
                    {obj && obj.api_token && obj.role === 1 ?
                        <Route path="/admin" exact component={Dashboard}/>
                        :null

                    }
                    {obj && obj.api_token && obj.role === 1 ?
                        <Route path="/admin/users/viewUser" exact  component={ViewUser}/>
                        :null}
                    {obj && obj.api_token && obj.role === 1 ?
                        <Route path="/admin/users/addUser"  component={Add}/>
                        :null}
                    {obj && obj.api_token && obj.role === 1 ?
                        <Route path="/admin/users/edit/user/:id"  component={Update}/>
                        :null}
                    {obj && obj.api_token && obj.role === 1 ?
                        <Route path="/admin/plans/viewPlan"  component={viewPlan}/>
                        :null}
                    {obj && obj.api_token && obj.role === 1 ?
                        <Route path="/admin/plans/addPlan"  component={addPlan}/>
                        :null}
                    {obj && obj.api_token && obj.role === 1 ?
                        <Route path="/admin/plans/edit/plan/:id"  component={updatePlan}/>
                        :null}
                    {obj && obj.api_token && obj.role === 1 ?
                        <Route path="/admin/ocrs/ocrView"  component={ocrView}/>
                        :null}
                    {obj && obj.api_token && obj.role === 1 ?
                        <Route path="/feedback"  component={Feedback}/>
                        :null}




                    <Layout>
                        <Switch>

                            <Route path="/" exact component={Home}/>
                            <Route path="/Login" component={Login}/>
                            <Route path="/Register" component={Register}/>
                            <Route path="/About" component={About}/>
                            <Route path="/android" component={Android}/>
                            <Route path="/faq" component={Faq}/>
                            <Route path="/forget" component={Forget}/>
                            <Route path="/payment" component={Payment}/>
                            <Route path="/output" component={Output}/>
                            <Route path="/profile" component={Profile}/>
                            <Route path="/reset_password" exact component={Reset}/>
                            <Route path="/tutorial" component={Tutorial}/>
                            <Route path="/codeVerification" exact component={CodeVerification}/>
                            <Route path="/archive" component={Archive}/>
                            <Route path="/Upload" component={Upload}/>
                            <Route path="/Contact" component={Contact}/>
                            <Route path="/Pro"  component={Pro}/>
                            <Route path="/Features" component={Features}/>

                        </Switch>
                    </Layout>


                </Switch>
            </BrowserRouter>



        );
    }


}

export default App;

if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}
