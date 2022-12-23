import { combineReducers } from 'redux';
import  petsReducer from './PetsReducers';

export default combineReducers({
    pets: petsReducer,
})