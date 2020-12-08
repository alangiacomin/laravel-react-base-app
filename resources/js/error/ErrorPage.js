import React, { Component } from "react";
import { Card, Container } from "react-bootstrap";
//import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import IPage from "../components/IPage";
import LayoutOneColumn from "../components/LayoutOneColumn";
import Error from "./Error";

export default withRouter(
    connect(() => {
        return {};
    })(
        class ErrorPage extends IPage {
            render() {
                const { status } = this.props;
                return (
                    <LayoutOneColumn>
                        <Card>
                            <Card.Header>{"Errore"}</Card.Header>
                            <Card.Body>
                                <Error status={status} />
                            </Card.Body>
                            <Card.Footer></Card.Footer>
                        </Card>
                    </LayoutOneColumn>
                );
            }
        }
    )
);
