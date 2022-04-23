import React from "react";
import {NavLink} from "react-router-dom";
import "../styles/Footer.css"

function Footer() {
  return (
<div className="footer-dark">
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-md-3 item">
                       
                    </div>
                    <div className="col-sm-6 col-md-3 item">
                        <h3>About</h3>
                        <ul>
                            <li><NavLink exact to="/about">About</NavLink></li>
                            <li><NavLink exact to="#">Contact Us</NavLink></li>
                           
                        </ul>
                    </div>
                    <div className="col-md-6 item text">
                        <h3>Pharmarcy Stores Management System</h3>
                        <p>The Pharmacy Management System is a project developed to automate medical stores’ activities and improve their productivity. This helps pharmacies organize, manage, and secure drug information efficiently. Its’ features aids in the resolution of challenges with manual pharmacy management.</p>
                    </div>
                   
                </div>
                <p className="copyright">COPYRIGHT © 2021 GROUP-29 | ALL RIGHTS RESERVED ID-202112007, 202112010, 202112072</p>
            </div>
        </footer>
    </div>
  );
}

export default Footer;
