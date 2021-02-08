import {createStore , combineReducers , applyMiddleware} from 'redux';
import userReducer from './Reducers/User';
import {reducer as formReducer} from 'redux-form';

const reducer=combineReducers({userReducer,form:formReducer});
const store= createStore(reducer);
window.store=store;
export default store;

