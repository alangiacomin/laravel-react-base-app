import React, { Component } from "react";
//import { withRouter } from "react-router-dom";
//import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";

export default withRouter(
    connect(() => {
        return {};
    })(
        class SelectedFilter extends Component {
            handleClick = () => {
                const { onFilterRemove } = this.props;
                onFilterRemove(this);
            };
            render() {
                const { sezione, nome } = this.props;
                return (
                    <Button size="sm" variant="info" onClick={this.handleClick}>
                        <b>{sezione}</b>: {nome}
                    </Button>
                );
            }
        }
    )
);
