import React, {Component} from 'react';
import './Header.css';
import {Link} from 'react-router-dom';
class Header extends Component {
    render() {
        return (
            <div className="Header pl4 pa1 white f3">
             <Link className="homeLink" to="/"> Home </Link>
            </div>
        );
    }
}

export default Header;