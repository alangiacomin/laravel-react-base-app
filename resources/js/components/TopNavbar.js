import React, { Component } from "react";
//import PropTypes from "prop-types";
import { connect } from "react-redux";
import { NavLink, withRouter } from "react-router-dom";
import { routes } from "../routes";
import { Container, Nav, Navbar } from "react-bootstrap";
import TopNavbarItem from "./TopNavbarItem";

/* TOPNAVBAR */
export default withRouter(
    connect(
        () => {
            //const { user } = state;
            return {};
        },
        {
            /*userLogin, userLogout, push*/
        }
    )(
        class TopNavbar extends Component {
            render() {
                const linksLeft = [routes.pagina];
                const linksRight = [routes.login, routes.admin, routes.logout];
                return (
                    <Navbar bg="dark" variant="dark" expand="lg">
                        <Container>
                            <NavLink to={routes.home.to}>
                                <Navbar.Brand>{process.env.MIX_APP_NAME}</Navbar.Brand>
                            </NavLink>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="mr-auto">
                                    {linksLeft.map((link, i) => {
                                        return <TopNavbarItem key={i} {...link} />;
                                    })}
                                </Nav>
                                <Nav className="ml-auto">
                                    {linksRight.map((link, i) => {
                                        return <TopNavbarItem key={i} {...link} />;
                                    })}
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                );
            }
        }
    )
);
