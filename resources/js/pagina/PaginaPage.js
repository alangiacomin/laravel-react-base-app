import React from "react";
//import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Col, Image, Row } from "react-bootstrap";
import LayoutOneColumn from "../components/LayoutOneColumn";
import IPage from "../components/IPage";

export default withRouter(
    connect((state) => {
        const { router } = state;
        return { router };
    }, {})(
        class PaginaPage extends IPage {
            constructor(props) {
                super(props);
                this.titleName = "Pagina";
            }
            render = () => {
                return (
                    <LayoutOneColumn>
                        <Row className="clearfix">
                            <Col>
                                <h4>Qui sottotitolo</h4>
                                <h1>
                                    Qui titolo
                                    <Image className="float-right" src="https://via.placeholder.com/300" />
                                </h1>
                                <p>Altri contenuti</p>
                            </Col>
                        </Row>
                    </LayoutOneColumn>
                );
            };
        }
    )
);
