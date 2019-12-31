import { createStore, applyMiddleware, compose } from "redux";
import reduxThunk from "redux-thunk";
import rootReducer from "./reducers";

const initialState = {};
//const  middleware = [reduxThunk];  potem jak chce to użyć to w applyMiddleware(...middleware)

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(reduxThunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
