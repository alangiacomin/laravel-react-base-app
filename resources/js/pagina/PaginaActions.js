import { createAction } from "@reduxjs/toolkit";
import Axios from "axios";
import filter from "../common/FilterActions";
import { make_request } from "../common/utility";

const action_prefix = "PAGINA";
const listUrl = "api/v1/pagina";
const elementUrl = "api/v1/pagina";

let getPaginaCancel;

const actions = {
    ...filter.actions(action_prefix),
    pagina2: createAction(action_prefix + "/pagina2"),
};

export const reducer = filter.reducer({ ...filter.defaults, pagina2: {} }, actions, {
           [actions.pagina2]: (state, action) => {
               state.pagina2 = action.payload;
           },
       });

export const functions = {
    ...filter.functions(listUrl, elementUrl, actions),
    setPagina2: (data) => {
        return (dispatch) => {
            dispatch(actions.pagina2(data));
        };
    },
    getPagina2: (name) => {
        getPaginaCancel && getPaginaCancel();
        return (dispatch) => {
            make_request({
                cancelToken: new Axios.CancelToken(function executor(c) {
                    getPaginaCancel = c;
                }),
                url: "api/v1/pagina2/" + name,
                //data: filters,
                onSuccess: (data) => {
                    if (data) {
                        dispatch(actions.pagina2(data));
                    }
                },
            });
        };
    },
};
