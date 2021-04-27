import {MENU_TOGGLE} from "../actions/actionTypes";

const initialState = {
   showMenu: false
}

export default function gameReducer(state = initialState, action) {
    switch (action.type) {
        case MENU_TOGGLE:
            return {
                ...state, showMenu: action.showMenu
            }

        default:
            return {
                ...state
            }
    }
}
