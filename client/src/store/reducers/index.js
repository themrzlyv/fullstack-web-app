import {combineReducers} from 'redux';
import { aboutReducer } from './aboutReducer';
import { isShowingReducer } from './isShowingReducer';
import { navbarReducer } from './navbarReducer';




export default combineReducers({
    navbar: navbarReducer,
    about: aboutReducer,
    isshowing: isShowingReducer
})