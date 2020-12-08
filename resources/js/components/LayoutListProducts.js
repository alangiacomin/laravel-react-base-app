import React, { Component } from "react";
//import { withRouter } from "react-router-dom";
//import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Button, ButtonGroup, Card, CardDeck, Col, Row } from "react-bootstrap";
import SelectedFilter from "./SelectedFilter";
import SideColumnFilters from "./SideColumnFilters";
import CollapsedFilters from "./CollapsedFilters";
import LayoutOneColumn from "./LayoutOneColumn";

export default withRouter(
    connect((state) => {
        const { router } = state;
        return { router };
    })(
        class LayoutListProducts extends Component {
            constructor(props) {
                super(props);
                this.state = {
                    viewType: "grid",
                };
            }
            componentDidMount = () => {
                const { aggiungiFiltriDaUrl } = this.props;
                aggiungiFiltriDaUrl && aggiungiFiltriDaUrl(this.estraiFiltriDaPath());
            };
            componentDidUpdate = (prevProps) => {
                const { rootRoute, selectedFilters, router } = this.props;
                const { aggiungiFiltriDaUrl } = this.props;
                if (router.location.pathname != prevProps.router.location.pathname) {
                    aggiungiFiltriDaUrl && aggiungiFiltriDaUrl(this.estraiFiltriDaPath());
                } else {
                    this.updatePathConFiltri(rootRoute.to, selectedFilters, prevProps.selectedFilters);
                }
            };
            setViewType = (viewType) => {
                this.setState({ viewType: viewType });
            };
            estraiFiltriDaPath = () => {
                const { router } = this.props;
                const path = router.location.pathname;
                const pathParts = _.split(path, "/");
                if (pathParts.length < 4) {
                    return [];
                }
                let filtri = [];
                const sezioni = _.split(pathParts[2], ",");
                const nomi = _.split(pathParts[3], ",");
                for (let index = 0; index < Math.min(sezioni.length, nomi.length); index++) {
                    _.forEach(_.split(nomi[index], "|"), function(n) {
                        filtri.push({
                            sezione: sezioni[index],
                            nome: n,
                        });
                    });
                }
                return filtri;
            };
            updatePathConFiltri = (rootPath, filtriAttivi, filtriAttiviPrec) => {
                const { history } = this.props;
                if (_.isEqual(filtriAttivi, filtriAttiviPrec)) {
                    return;
                }
                // sono cambiati i filtri, quindi aggiorno l'url
                let sezioni = _.sortBy(_.uniq(_.map(filtriAttivi, "sezione")));
                let nomi = [];
                _.forEach(sezioni, function(sezione) {
                    nomi.push(
                        _.sortBy(
                            _.uniq(
                                _.map(
                                    _.filter(filtriAttivi, (sf) => {
                                        return sf.sezione == sezione;
                                    }),
                                    "nome"
                                )
                            )
                        )
                    );
                });
                let path = rootPath;
                if (sezioni.length > 0) {
                    path +=
                        "/" +
                        _.join(sezioni, ",") +
                        "/" +
                        _.join(
                            _.map(nomi, (n) => {
                                return _.join(n, "|");
                            }),
                            ","
                        );
                }
                history.push(path);
            };
            renderElements = (viewType) => {
                const { elements, renderCard } = this.props;
                switch (viewType) {
                    case "grid":
                        let decks = [];
                        for (let index = 0; index < elements.length; index += 3) {
                            let cards = [];
                            for (let c = 0; c < 3 && index + c < elements.length; c++) {
                                cards.push(elements[index + c]);
                            }
                            decks.push(cards);
                        }
                        return decks.map((deck, index) => {
                            return (
                                <CardDeck key={index} className="mb-3">
                                    {deck.map((card, index2) => {
                                        return renderCard(viewType, card, index2);
                                    })}
                                    {deck.length < 3 &&
                                        _.fill(Array(3 - deck.length), "x").map((skip, index2) => {
                                            return <Card key={index2} style={{ border: "0px" }} />;
                                        })}
                                </CardDeck>
                            );
                        });
                    default:
                        return (
                            elements &&
                            elements.map((element, index) => {
                                return renderCard(viewType, element, index);
                            })
                        );
                }
            };
            render() {
                const { viewType } = this.state;
                const { filters, selectedFilters, elements, onFilterChange, onFilterRemove } = this.props;
                return (
                    <>
                        <LayoutOneColumn>
                            {/*<Breadcrumb elements={[{ text: rootRoute.title }]} />*/}
                            <Row>
                                <Col lg={3} className="d-none d-lg-block">
                                    <SideColumnFilters
                                        filters={filters}
                                        opened={"all"}
                                        selectedFilters={selectedFilters}
                                        onFilterChange={onFilterChange}
                                    />
                                </Col>
                                <Col>
                                    <Row className="d-lg-none">
                                        <Col>
                                            <CollapsedFilters
                                                filters={filters}
                                                opened={"none"}
                                                selectedFilters={selectedFilters}
                                                onFilterChange={onFilterChange}
                                            />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <h5 className="clearfix">
                                                Elementi {elements.length > 0 && "(" + elements.length + ")"}
                                                <ButtonGroup className="d-none d-lg-block float-right">
                                                    <Button
                                                        variant="light"
                                                        active={viewType == "grid"}
                                                        onClick={() => {
                                                            this.setViewType("grid");
                                                        }}
                                                    >
                                                        <i className={"fas fa-th"} />
                                                    </Button>
                                                    <Button
                                                        variant="light"
                                                        active={viewType == "list"}
                                                        onClick={() => {
                                                            this.setViewType("list");
                                                        }}
                                                    >
                                                        <i className={"fas mt-auto fa-th-list"} />
                                                    </Button>
                                                </ButtonGroup>
                                            </h5>
                                            {filters.length > 0 && selectedFilters && (
                                                <div className="clearfix">
                                                    {selectedFilters.map((filter, index) => {
                                                        return (
                                                            <div className="mx-1 my-1 float-left" key={index}>
                                                                <SelectedFilter
                                                                    {...filter}
                                                                    onFilterRemove={onFilterRemove}
                                                                />
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            )}
                                            <div className="d-none d-lg-block">{this.renderElements(viewType)}</div>
                                            <div className="d-lg-none">{this.renderElements("list")}</div>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </LayoutOneColumn>
                    </>
                );
            }
        }
    )
);
