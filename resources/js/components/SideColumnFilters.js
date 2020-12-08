import React, { Component } from "react";
//import { withRouter } from "react-router-dom";
//import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import FilterSection from "./FilterSection";

export default withRouter(
    connect(() => {
        return {};
    })(
        class SideColumnFilters extends Component {
            render() {
                const { filters, opened, selectedFilters, onFilterChange } = this.props;
                if (!filters) return null;
                return filters.map((sezione, index) => {
                    return (
                        <FilterSection
                            key={index}
                            {...sezione}
                            opened={opened == "all" || (opened == "first" && index == 0)}
                            selectedFilters={selectedFilters}
                            onFilterChange={onFilterChange}
                        />
                    );
                });
            }
        }
    )
);
