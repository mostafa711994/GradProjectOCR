import React, {Component} from 'react';
import Toolbar from "./Toolbar/Toolbar";
import Footer from  "./Footer/Footer"
class Layout extends Component {


    render() {

        return (

            <div>
                <Toolbar/>

                {this.props.children}

                <Footer/>
            </div>

        );
    }

}

export default Layout;
