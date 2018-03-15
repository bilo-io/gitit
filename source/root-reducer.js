import { combineReducers } from 'redux';
// Pages
import home from './pages/home/reducer';
// Containers
const rootReducer = combineReducers({
    home
})

export default rootReducer;