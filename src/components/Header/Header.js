import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

class Header extends Component{
    render(){
        return(
            <header className='header'>
                <ul className='header_list'>
                    <Link to='/' >Home</Link>
                    <Link to='/study' >Study</Link>
                    <Link to='/test' >Test</Link>
                </ul>
            </header>
        );
    }
}

export default Header;