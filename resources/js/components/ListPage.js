import React, { Component } from "react";
import LayoutListProducts from "../components/LayoutListProducts";
import IPage from "./IPage";

export class ListPage extends IPage {
    afterComponentDidMount = () => {
        const { router } = this.props;
        const { getList } = this.props;
        if (_.isEqual(router.location.pathname, this.rootRoute.to)) {
            // path base senza filtri, carico lista, altrimenti attendo
            getList();
        }
    };
    componentDidUpdate = (prevProps, prevState) => {
        const { mainstate } = this.props;
        const { getList } = this.props;
        if (!_.isEqual(mainstate.selectedFilters, prevProps.mainstate.selectedFilters)) {
            getList(mainstate.selectedFilters);
        }
    };
    aggiungiFiltriDaUrl = (filtri) => {
        const { setFilters } = this.props;
        setFilters(filtri);
    };
    onFilterChange = (filterElement) => {
        const { sezione, nome } = filterElement.props;
        const { checked } = filterElement.state;
        const { addFilter, removeFilter } = this.props;
        if (checked) {
            removeFilter({ sezione: sezione, nome: nome });
        } else {
            addFilter({ sezione: sezione, nome: nome });
        }
    };
    onFilterRemove = (selectedFilter) => {
        const { sezione, nome } = selectedFilter.props;
        const { removeFilter } = this.props;
        removeFilter({ sezione: sezione, nome: nome });
    };
    render() {
        const { mainstate, breadcrumb } = this.props;
        return (
            <LayoutListProducts
                filters={mainstate.filters}
                selectedFilters={mainstate.selectedFilters}
                elements={mainstate.elements}
                onFilterChange={this.onFilterChange}
                onFilterRemove={this.onFilterRemove}
                rootRoute={this.rootRoute}
                aggiungiFiltriDaUrl={this.aggiungiFiltriDaUrl}
                renderCard={this.renderCard}
            />
        );
    }
}
