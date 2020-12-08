//require("./bootstrap");

import React, { Component, useEffect } from "react";
import { Provider, connect } from "react-redux";
import { history } from "./configureStore";

import { Redirect, Route, Switch, useLocation, withRouter } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import ErrorPage from "./error/ErrorPage";
import { absoluteUrl, hasPermission } from "./common/utility";
import { LinkContainer } from "react-router-bootstrap";
import { routesWithComponents } from "./routesWithComponents";
import { routes } from "./routes";

/* APP */
export default connect(() => {
    return {};
})(
    class extends Component {
        render() {
            const { store } = this.props;
            return (
                <Provider store={store}>
                    <ConnectedRouter history={history}>
                        <ScrollToTop />
                        <Switch>
                            {Object.entries(routesWithComponents).map(([key, route]) => {
                                if (route.component) {
                                    return <ProtectedRoute key={key} {...route} />;
                                }
                            })}
                            <ErrorBoundary>
                                <Route path="*">
                                    <ErrorPage status={404} />
                                </Route>
                            </ErrorBoundary>
                        </Switch>
                    </ConnectedRouter>
                </Provider>
            );
        }
    }
);

/* PROTECTED ROUTE */
const ProtectedRoute = withRouter(
    connect((state) => {
        const { user } = state;
        return { user };
    })(
        class extends Component {
            render() {
                const { user, perm } = this.props;
                if (perm && !perm.startsWith("special_") && !hasPermission(user, perm)) {
                    if (user.id) {
                        return <ErrorPage status={403} />;
                    } else {
                        return <Redirect to={routes.login.to} />;
                    }
                } else {
                    //return <Route {...this.props} />;
                    return (
                        <ErrorBoundary>
                            <Route {...this.props} />
                        </ErrorBoundary>
                    );
                }
            }
        }
    )
);

function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { error: null, errorInfo: null };
    }

    componentDidCatch(error, errorInfo) {
        // Catch errors in any components below and re-render with error message
        this.setState({
            error: error,
            errorInfo: errorInfo,
        });
        // You can also log error messages to an error reporting service here
    }

    render() {
        const { children } = this.props;
        if (this.state.errorInfo) {
            // Error path
            return (
                <div
                    style={{
                        backgroundColor: "#2c2c2c",
                    }}
                >
                    <div
                        className="ml-auto mr-auto"
                        style={{
                            maxWidth: "1280px",
                            height: "100vh",
                            overflow: "hidden",
                            backgroundColor: "#000000",
                            backgroundImage: "url('" + absoluteUrl("assets/img/broken.png") + "')",
                            backgroundSize: "cover",
                        }}
                    >
                        <div
                            className="float-right pt-4 pr-5"
                            style={{
                                color: "#ffffff",
                            }}
                        >
                            <h2>Ops! Si è rotto qualcosa</h2>
                            <h4>Errore imprevisto</h4>
                            <LinkContainer to={routes.home.to}>
                                <a>Homepage</a>
                            </LinkContainer>
                        </div>
                    </div>
                </div>
            );
        }
        // Normally, just render children
        return children;
    }
}
