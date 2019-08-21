import React, { Component } from 'react';
import {  NavLink } from 'react-router-dom'
import './Footer.css';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
              
                <footer className="footer-distributed">
              
              
                    <div className="footer-right">

                        <a href=" https://www.facebook.com/sngwsh?ref=bookmarks"><i className="fa fa-facebook"></i></a>
                        <a href="https://www.linkedin.com/feed/"><i className="fa fa-linkedin"></i></a>
                        <a href="https://github.com/nagosa93/nagosa93.github.io"><i className="fa fa-github"></i></a>
                       
                    </div>

                    <div className="footer-left">

                        <p className="footer-links">
                            <NavLink className="link-1" to="/homePage">Home</NavLink>

                            <NavLink className="link-2" to="/login">Login</NavLink>

                            <NavLink className="link-3" to="/about">About</NavLink>
                        </p>
            
                        <p>Email : Nagosa93@gmail.com </p>
                        <p>Sara Nagosa &copy; 2019</p>
                    </div>

                </footer>
            </div>
        );
    }
}

export default Footer;