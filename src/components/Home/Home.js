import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Home.css';

class Home extends Component{
    render(){
        return(
            <div className='home' >
                <div className='home_landing'>
                    <div className='home_header'>
                        <h2>Pokemon Trivia</h2>
                        <p>Study up on your Pokemon knowledge, then test yourself with one of our sweet tests!</p>
                    </div>
                    <div className='home_header_btns'>
                        <Link to='/study' className='home_header_btn' >Study Up</Link>
                        <Link to='/test' className='home_header_btn' >Test Me!</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
