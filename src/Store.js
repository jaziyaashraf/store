import { createStore,combineReducers,applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import { productListReducer } from "./reducers/ProductReducer";
const reducers=combineReducers({
pReducer:productListReducer
})//combine reducers is a method, there are lot of reducers we have to combine it by using combine reducers.
const middleware=[thunk]
const store=createStore(reducers,applyMiddleware(...middleware))//... is a spread operater is used to copy an array or object
export default store