import React, { Component } from "react";
//import { withRouter } from "react-router-dom";
//import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
//import { addFilter, removeFilter } from "./Filters";
//import { getElements } from "./Elements";

/* LAYOUT ONE COLUMN */
export default withRouter(
    connect(() => {
        return {};
    })(
        class FilterElement extends Component {
            constructor(props) {
                super(props);
                this.state = {
                    checked: this.isSelected(),
                };
            }

            componentDidUpdate = (prevProps, prevState) => {
                const { selectedFilters } = this.props;
                if (!_.isEqual(selectedFilters, prevProps.selectedFilters)) {
                    this.setState({ checked: this.isSelected() });
                }
            };

            isSelected = () => {
                const { selectedFilters, sezione, nome } = this.props;
                return (
                    _.find(selectedFilters, {
                        sezione: sezione,
                        nome: nome,
                    }) != null
                );
            };

            handleChange = (event, element) => {
                const { onFilterChange } = this.props;
                const { checked } = this.state;
                this.setState({ checked: !checked });
                onFilterChange(this);
            };

            render() {
                const { nome, count } = this.props;
                const { checked } = this.state;
                return (
                    <>
                        <label className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                checked={checked}
                                //disabled={(count ?? 0) < 1}
                                onChange={this.handleChange}
                            />
                            <span className={(count ?? 0) < 1 ? "text-muted" : ""}>
                                {nome} {count > 0 ? " (" + count + ")" : ""}
                            </span>
                        </label>
                    </>
                );
            }
        }
    )
);
