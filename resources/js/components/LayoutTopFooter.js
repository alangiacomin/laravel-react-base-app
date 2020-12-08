import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import TopNavbar from "./TopNavbar";
import Footer from "./Footer";

export default withRouter(
    connect(() => {
        return {};
    })(
        class LayoutTopFooter extends Component {
            render() {
                const { children } = this.props;
                return (
                    <>
                        <TopNavbar />
                        {children}
                        <Footer />
                    </>
                );
            }
        }
    )
);
