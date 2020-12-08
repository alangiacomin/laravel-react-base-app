import React, { Component } from "react";
//import PropTypes from "prop-types";
import { connect } from "react-redux";
import { NavLink, withRouter } from "react-router-dom";
import { hasPermission } from "../common/utility";

/* TOPNAVBAR ITEM */
export default withRouter(
    connect((state) => {
        const { user } = state;
        return { user };
    }, {})(
        class TopNavbarItem extends Component {
            render() {
                const { user, perm, isActive, to, exact, title } = this.props;

                if (!hasPermission(user, perm)) {
                    return null;
                }
                return (
                    <>
                        {(to || "").startsWith("http") ? (
                            <a className="nav-link" href={to}>
                                {title}
                            </a>
                        ) : (
                            <NavLink
                                //className={"nav-link " + (isActive ? "active" : "")}
                                className={"nav-link"}
                                to={to}
                                exact={exact}
                                isActive={isActive}
                            >
                                {title}
                            </NavLink>
                        )}
                    </>
                );
            }
        }
    )
);
