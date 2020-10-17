import React, {Component} from 'react';
import axios from 'axios';
import '../shared.css';
import {Redirect} from 'react-router-dom';
class Upload extends Component {

    state = {
        file: null,
        alertMessage: "",
        redirect: false,
    }

    componentDidMount() {
        document.querySelector("html").classList.add('js');

        let fileInput = document.querySelector(".input-file"),
            button = document.querySelector(".input-file-trigger"),
            the_return = document.querySelector(".file-return"),
            tanybutton = document.querySelector('.submit').style.display = 'none',
            awlbutton = document.querySelector('.input-file').addEventListener("change", showBtn);


        button.addEventListener("keydown", function (event) {
            if (event.keyCode === 13 || event.keyCode === 32) {
                fileInput.focus();
            }
        });
        button.addEventListener("click", function (event) {
            fileInput.focus();
            return false;
        });
        fileInput.addEventListener("change", function (event) {
            the_return.innerHTML = this.value;
        });
        fileInput.addEventListener("change", function (event) {
            the_return.innerHTML = this.value;


        });

        function showBtn(e) {
            document.querySelector('.submit').style.display = 'block';
            e.preventDefault();
        }

    }

    onchangeHandler = e => {

        let file = e.target.files[0];
        this.setState({file: file});

    }


    submitHandler = (e) => {
        let obj = JSON.parse(sessionStorage.getItem('user'));
        if(obj && obj.api_token){
            let files = this.state.file;
            let formData = new FormData();
            formData.append('image', files);
            axios.post('http://127.0.0.1:8000/api/upload?apiToken='+ obj.api_token, formData)
                .then(res => {
                    console.log(res);
                    this.setState({redirect:true});
                })
                .catch(error => {

                    console.log(error);
                    // console.log('sdfsdfsdfsd');
                })



        }else{
            this.setState({redirect: false});
            this.setState({alertMessage: "error"});

        }






    }


    render() {
        if(this.state.redirect){
            return <Redirect to = "/output"/>
        }
        return (
            <section id="convert" className="main_container">
                <div className="inner">

                    <header>
                        <h1>Select A Photo To Be Converted</h1>
                    </header>
                    {this.state.alertMessage === "error" ?
                        <div className="alert alert-danger" role="alert">
                            You have to login or sign up first
                        </div> : null}
                    <hr className="line_premium_title"/>

                    <div className="flex ">
                        <div className="scanning_buttons">
                            <div className="select_photo">
                                <span className="icon fa-camera"></span>
                                <h3>Select your photo</h3>

                                <div className="input-file-container">
                                    <input className="input-file" id="my-file" type="file"
                                           onChange={this.onchangeHandler}/>
                                    <label tabIndex="0" htmlFor="my-file"
                                           className="input-file-trigger btn-2">UPLOAD</label>
                                </div>
                            </div>
                            <p className="file-return"></p>

                                <button className="submit" onClick={this.submitHandler}>Complete
                                    Converting
                                </button>


                        </div>
                    </div>
                </div>
            </section>

        );
    }

}

export default Upload;

