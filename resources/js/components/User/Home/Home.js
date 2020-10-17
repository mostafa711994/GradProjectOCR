import React,{Component} from 'react';
import Header from './Header/Header';
import MainArea from './Middle/MainArea';
import Third from './Middle/Third';

// import './Home.css';
import '../shared.css';

class Home extends Component{

    render(){
        return(
            <div>
                <Header/>
                <MainArea/>
                <Third/>
            </div>
        );
    }
}

export default Home;