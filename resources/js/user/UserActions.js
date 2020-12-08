import { createAction, createReducer } from "@reduxjs/toolkit";
import { sprintf } from "sprintf-js";
import { make_request } from "../common/utility";

// ACTIONS

const action_prefix = "USER";
export const userActions = {
    loggedIn: createAction(action_prefix + "/loggedIn"),
    loggedOut: createAction(action_prefix + "/loggedOut"),
    profile: createAction(action_prefix + "/profile")
};

// REDUCERS

const defaults = {};

export const reducer = createReducer(defaults, {
    [userActions.loggedIn]: (state, action) => {},
    [userActions.loggedOut]: (state, action) => {
        return defaults;
    },
    [userActions.profile]: (state, action) => {
        return { ...state, ...action.payload };
    }
});

// EXTRA

export function userLogin(email, password, options) {
    return dispatch => {
        make_request({
            url: "/admin/login",
            method: "post",
            data: {
                email: email ?? "missing@user.com",
                password: password ? password : "missingpassword",
            },
            onSuccess: (data) => {
                dispatch(getUserProfile());
            },
            onFailure: (data) => {
                options.onFailure && options.onFailure(data);
            },
        });
    };
}

export function userLogout() {
    return dispatch => {
        make_request({
            url: "/api/v1/logout",
            method: "post",
            onSuccess: data => {
                dispatch(userActions.loggedOut(data));
            }
        });
    };
}

export function getUserProfile() {
    return dispatch => {
        make_request({
            url: "/api/v1/user",
            onSuccess: data => {
                dispatch(setUserProfile(data));
            }
        });
    };
}

export function setUserProfile(data) {
    return dispatch => {
        dispatch(userActions.profile(data));
    };
}
