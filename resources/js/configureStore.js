import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import { createLogger } from "redux-logger";
import { createBrowserHistory } from "history";
import { routerMiddleware, connectRouter } from "connected-react-router";
const loggerMiddleware = createLogger();

export const history = createBrowserHistory({ basename: process.env.MIX_APP_BASENAME });

//import { persistStore, persistReducer } from "redux-persist";
//import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { reducer as userReducer } from "./user/UserActions";

function configureAppStore() {
    const store = configureStore({
        reducer: {
            router: connectRouter(history),
            user: userReducer,
        },
        // preloadedState:
        middleware: [
            routerMiddleware(history),
            ...getDefaultMiddleware({ serializableCheck: false }),
            // logger sempre per ultimo altrimenti risultano 'undefined' in console
            //loggerMiddleware
        ],
    });

    //if (process.env.NODE_ENV !== "production" && module.hot) {
    //    module.hot.accept("./reducers/reducers", () =>
    //        store.replaceReducer(rootReducer)
    //    );
    //}

    return store;
}

export default configureAppStore;
