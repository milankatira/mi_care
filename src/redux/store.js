import { applyMiddleware, compose, createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./reducers";

const persitConfig = {
    key: 'root',
    storage,
    writeFailHandler: function (err) {
        console.log("ERR in writeFailHandler::::", err);
    },
    //Auth
    whitelist: [
        'auth',
    ],
}

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    trace: true,
}) : compose;

const persistedReducer = persistReducer(persitConfig, rootReducer)

export const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));

export const persistor = persistStore(store);
