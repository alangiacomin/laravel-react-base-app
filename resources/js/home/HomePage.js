import React from "react";
import { Col, Container, Row } from "react-bootstrap";
//import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import IPage from "../components/IPage";
import LayoutTopFooter from "../components/LayoutTopFooter";

export default withRouter(
    connect(() => {
        return {};
    })(
        class HomePage extends IPage {
            render() {
                const {} = this;
                return (
                    <LayoutTopFooter>
                        <Container>
                            <Row>
                                <Col>Qui home page</Col>
                            </Row>
                        </Container>
                    </LayoutTopFooter>
                );
            }
        }
    )
);
