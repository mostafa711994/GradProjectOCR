import React, {Component} from 'react';
// import './Payment.css';
import '../shared.css';

class Payment extends Component {


    render() {
        const myStyle = {
            width: "10%",
            textAlign:"center"
        };

        return (
            <section id="payment" className="main_container">
                <div className="inner">

                    <section className="payment">
                        <div className="container">
                            <div className="row">
                                <aside className="col-sm-6">
                                    <p id="pay_title">Payment</p>
                                    <article className="card">
                                        <div className="card-body p-5">
                                            <p><i className="fab fa-cc-visa fa-2x"></i>
                                                <i className="fab fa-cc-paypal fa-2x"></i>
                                                <i className="far fa-credit-card fa-2x"></i>
                                            </p>
                                            <form>
                                                <div className="form-group">
                                                    <label htmlFor="username">Full name (on the card)</label>
                                                    <div className="input-group">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text"><i
                                                                className="fa fa-user"></i></span>
                                                        </div>
                                                        <input type="text" className="form-control" name="username"
                                                               placeholder="" required=""/>
                                                    </div>

                                                </div>


                                                <div className="form-group">
                                                    <label htmlFor="cardNumber">Card number</label>
                                                    <div className="input-group">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text"><i
                                                                className="fa fa-credit-card"></i></span>
                                                        </div>
                                                        <input type="text" className="form-control" name="cardNumber"
                                                               placeholder=""/>
                                                    </div>

                                                </div>


                                                <div className="row">
                                                    <div className="col-sm-8">
                                                        <div className="form-group">
                                                            <label><span className="hidden-xs">Expiration</span>
                                                            </label>
                                                            <div className="form-inline">
                                                                <select className="form-control" style={{width:"45%"}}>
                                                                    <option>MM</option>
                                                                    <option>01 - January</option>
                                                                    <option>02 - February</option>
                                                                    <option>03 - March</option>
                                                                </select>
                                                                <span style={myStyle}> / </span>
                                                                <select className="form-control" style={{width:"45%"}}>
                                                                    <option>YY</option>
                                                                    <option>2020</option>
                                                                    <option>2018</option>
                                                                    <option>2019</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-8">
                                                        <label data-toggle="tooltip" title=""
                                                               data-original-title="3 digits code on back side of the card">CVV <i
                                                            className="fa fa-question-circle"></i></label>
                                                        <input className="form-control" required="" type="text"/>
                                                    </div>
                                                </div>

                                                <button className="btn-block btn" type="button"> Confirm</button>
                                            </form>
                                        </div>

                                    </article>

                                </aside>

                            </div>
                        </div>
                    </section>
                        </div>
                    </section>
        );
    }
}

export default Payment;

