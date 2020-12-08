import React, { Component } from "react";
//import { withRouter } from "react-router-dom";
//import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Container } from "react-bootstrap";
import LayoutTopFooter from "./LayoutTopFooter";

/* LAYOUT ONE COLUMN */
export default withRouter(
    connect(() => {
        return {};
    })(
        class LayoutOneColumn extends Component {
            render() {
                const { children } = this.props;
                return (
                    <>
                        <LayoutTopFooter>
                            <Container className="my-2">{children}</Container>
                        </LayoutTopFooter>
                    </>
                );
            }
        }
    )
);
