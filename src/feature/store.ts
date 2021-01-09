import { applyMiddleware, createStore,  } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./rootReducer";

// create the saga middleware

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware()));

export default store;
