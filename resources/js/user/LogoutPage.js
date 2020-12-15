import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
//import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Redirect, withRouter } from "react-router-dom";
import Layout from "../components/Layout";
import { LayoutType } from "../components/Layout/Layout";
import { userLogout } from "./UserActions";

export default withRouter(
    connect(
        (state) => {
            const { user } = state;
            return { user };
        },
        { userLogout }
    )(
        class LogoutPage extends Component {
            constructor(props) {
                super(props);
            }

            componentDidMount() {
                const { user, userLogout } = this.props;
                if (user.id > 0) {
                    // attendo 1 sec prima di fare il logout, così si vede il messaggio
                    setTimeout(() => {
                        userLogout();
                    }, 1000);
                }
            }

            render() {
                const { user } = this.props;
                if (user.id > 0) {
                    return (
                        <Layout type={LayoutType.OneColumn}>
                            <Row className="my-5">
                                <Col lg={6} md={8} className="mx-auto">
                                    <h3>Logout in corso...</h3>
                                </Col>
                            </Row>
                        </Layout>
                    );
                } else {
                    return <Redirect to={"/"} />;
                }
            }
        }
    )
);
