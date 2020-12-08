import { createAction, createReducer } from "@reduxjs/toolkit";
import Axios from "axios";
import { isArray } from "lodash";
import { make_request } from "../common/utility";

let getListCancel;
let getElementCancel;

export default {
    actions: (action_prefix) => {
        return {
            filters: createAction(action_prefix + "/filters"),
            elements: createAction(action_prefix + "/elements"),
            details: createAction(action_prefix + "/details"),
            filterAdded: createAction(action_prefix + "/filterAdded"),
            filterRemoved: createAction(action_prefix + "/filterRemoved"),
            filterSet: createAction(action_prefix + "/filterSet"),
        };
    },

    defaults: {
        filters: [],
        selectedFilters: [],
        elements: [],
        details: {},
    },

    reducer: (defaults, actions, additionalMatchers) => {
        return createReducer(defaults, {
            [actions.filters]: (state, action) => {
                if (isArray(action.payload)) {
                    state.filters = action.payload;
                }
            },
            [actions.elements]: (state, action) => {
                if (isArray(action.payload)) {
                    state.elements = action.payload;
                }
            },
            [actions.details]: (state, action) => {
                state.details = action.payload;
            },
            [actions.filterAdded]: (state, action) => {
                return addSelectedFiltersToState(state, action);
            },
            [actions.filterRemoved]: (state, action) => {
                return removeSelectedFiltersToState(state, action);
            },
            [actions.filterSet]: (state, action) => {
                return setSelectedFiltersToState(state, action);
            },
            ...additionalMatchers,
        });
    },

    functions: (listUrl, elementUrl, actions) => {
        return {
            getList: (filters) => {
                getListCancel && getListCancel();
                return (dispatch) => {
                    make_request({
                        cancelToken: new Axios.CancelToken(function executor(c) {
                            getListCancel = c;
                        }),
                        url: listUrl,
                        data: filters,
                        onSuccess: (data) => {
                            dispatch(actions.filters(data.filters));
                            dispatch(actions.elements(data.elements));
                        },
                    });
                };
            },

            getElement: (name) => {
                getElementCancel && getElementCancel();
                return (dispatch) => {
                    make_request({
                        cancelToken: new Axios.CancelToken(function executor(c) {
                            getElementCancel = c;
                        }),
                        url: elementUrl + "/" + name,
                        //data: filters,
                        onSuccess: (data) => {
                            if (data)
                            {
                                dispatch(actions.details(data));
                            }
                            //dispatch(actions.elements(data.elements));
                        },
                    });
                };
            },

            addFilter: (filter) => {
                return (dispatch) => {
                    dispatch(actions.filterAdded(filter));
                };
            },

            removeFilter: (filter) => {
                return (dispatch) => {
                    dispatch(actions.filterRemoved(filter));
                };
            },

            setFilters: (filters) => {
                return (dispatch) => {
                    dispatch(actions.filterSet(filters));
                };
            },

            setDetails: (details) => {
                return (dispatch) => {
                    dispatch(actions.details(details));
                };
            },
        };
    },
};

const addSelectedFiltersToState = (state, action) => {
    const newFilter = action.payload;
    let newState = { ...state };
    if (!_.isEmpty(newFilter.sezione) && !_.isEmpty(newFilter.nome)) {
        newState.selectedFilters = _.uniqWith([...newState.selectedFilters, newFilter], _.isEqual);
    }
    return newState;
};

const removeSelectedFiltersToState = (state, action) => {
    let newState = { ...state };
    newState.selectedFilters = _.filter([...newState.selectedFilters], function(o) {
        return !_.isEqual(o, action.payload);
    });
    return newState;
};

const setSelectedFiltersToState = (state, action) => {
    const newFilters = [...action.payload];
    let newState = { ...state, selectedFilters: [] };
    _.each(
        _.filter(newFilters, (f) => {
            return !_.isEmpty(f.sezione) && !_.isEmpty(f.nome);
        }),
        function(filter) {
            newState.selectedFilters = _.uniqWith([...newState.selectedFilters, filter], _.isEqual);
        }
    );
    return newState;
};
