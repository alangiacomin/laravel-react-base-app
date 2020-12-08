import React, { Component } from "react";
//import PropTypes from "prop-types";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { withRouter } from "react-router-dom";
//import { userLogin, userLogout } from "../_components/User";

/* TOPNAVBAR */
export default withRouter(
    connect((state) => {
        return {};
    }, {})(
        class Footer extends Component {
            render() {
                return (
                    <footer className="footer bg-dark">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 h-100 text-center text-lg-left my-auto">
                                    <ul className="list-inline mb-2">
                                        <li className="list-inline-item">
                                            <a href="#">About</a>
                                        </li>
                                        <li className="list-inline-item">&sdot;</li>
                                        <li className="list-inline-item">
                                            <a href="#">Contact</a>
                                        </li>
                                        <li className="list-inline-item">&sdot;</li>
                                        <li className="list-inline-item">
                                            <a href="#">Terms of Use</a>
                                        </li>
                                        <li className="list-inline-item">&sdot;</li>
                                        <li className="list-inline-item">
                                            <a href="#">Privacy Policy</a>
                                        </li>
                                    </ul>
                                    <p className="text-muted small mb-4 mb-lg-0">
                                        &copy; Your Website 2020. All Rights Reserved.
                                    </p>
                                </div>
                                <div className="col-lg-6 h-100 text-center text-lg-right my-auto">
                                    <ul className="list-inline mb-0">
                                        <li className="list-inline-item mr-3">
                                            <a href="#">
                                                <i className="fab fa-facebook fa-2x fa-fw"></i>
                                            </a>
                                        </li>
                                        <li className="list-inline-item mr-3">
                                            <a href="#">
                                                <i className="fab fa-twitter-square fa-2x fa-fw"></i>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="#">
                                                <i className="fab fa-instagram fa-2x fa-fw"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </footer>
                );
            }
        }
    )
);
