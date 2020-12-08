import React, { Component } from "react";
//import { withRouter } from "react-router-dom";
//import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import FilterSection from "./FilterSection";
import { Accordion } from "react-bootstrap";
import { preventPropagation } from "../common/utility";

export default withRouter(
    connect(
        () => {
            return {};
        },
        { preventPropagation }
    )(
        class CollapsedFilters extends Component {
            constructor(props) {
                super(props);
                this.id = _.uniqueId("id-");
            }
            render() {
                const { id } = this;
                const { filters, opened: sectionOpened, selectedFilters, onFilterChange } = this.props;
                if (!filters) return null;
                return (
                    <Accordion className="list-group-item" ref={this.collapseRef}>
                        <Accordion.Toggle eventKey={id} as="a" href="#" onClick={this.onOpenClose}>
                            Filtri
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey={id}>
                            <>
                                {filters.map((sezione, index) => {
                                    return (
                                        <FilterSection
                                            key={index}
                                            {...sezione}
                                            opened={sectionOpened == "all" || (sectionOpened == "first" && index == 0)}
                                            selectedFilters={selectedFilters}
                                            onFilterChange={onFilterChange}
                                        />
                                    );
                                })}
                            </>
                        </Accordion.Collapse>
                    </Accordion>
                );
            }
        }
    )
);
