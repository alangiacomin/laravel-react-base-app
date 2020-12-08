import React, { Component, dispatch } from "react";
//import { withRouter } from "react-router-dom";
//import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import FilterElement from "./FilterElement";
import { Accordion } from "react-bootstrap";
import { preventPropagation } from "../common/utility";

/* FILTER SECTION */
export default withRouter(
    connect(
        () => {
            return {};
        },
        { preventPropagation }
    )(
        class FilterSection extends Component {
            constructor(props) {
                super(props);
                this.id = _.uniqueId("id-");
                this.state = {
                    opened: props.opened ?? true,
                };
            }
            onOpenClose = (event) => {
                const { preventPropagation } = this.props;
                preventPropagation(event);
                const { opened } = this.state;
                this.setState({ opened: !opened });
            };
            render() {
                const { id } = this;
                const { nome, elements, selectedFilters, onFilterChange } = this.props;
                const { opened } = this.state;
                const faIcon = opened ? "fa-minus" : "fa-plus";
                const defaultActiveKey = opened ? id : "";
                return (
                    <Accordion className="list-group-item" defaultActiveKey={defaultActiveKey}>
                        <Accordion.Toggle eventKey={id} as="a" href="#" onClick={this.onOpenClose}>
                            {nome}
                            <i className={"fas fa-xs float-right mt-auto " + faIcon} />
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey={id}>
                            <>
                                {elements &&
                                    elements.map((element, index) => {
                                        return (
                                            <FilterElement
                                                key={index}
                                                sezione={nome}
                                                {...element}
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
