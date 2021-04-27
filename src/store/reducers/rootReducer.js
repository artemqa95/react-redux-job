import {combineReducers} from 'redux'
import gameReducer from './game'
import menuReducer from './menu'

export default combineReducers({
    game: gameReducer,
    menu: menuReducer
})