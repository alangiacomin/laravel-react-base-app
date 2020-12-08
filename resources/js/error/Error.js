import React, { Component } from "react";
//import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

export default withRouter(
    connect(() => {
        return {};
    })(
        class Error extends Component {
            getDescError = errorCode => {
                switch (errorCode) {
                    case 403:
                        return "Non Autorizzato";
                    case 404:
                        return "Pagina non trovata";
                    default:
                        return "Errore non definito";
                }
            };
            render() {
                const { status } = this.props;
                return (
                    <>
                        <div className="col-xl-9 mx-auto">
                            <h1 className="mb-5">
                                {this.getDescError(status)}
                            </h1>
                        </div>
                    </>
                );
            }
        }
    )
);
