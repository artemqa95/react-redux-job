import {MENU_CHANGE_LANGUAGE, MENU_TOGGLE} from "../actions/actionTypes";

const initialState = {
    showMenu: false,
    language: 'ru'
}

export default function gameReducer(state = initialState, action) {
    switch (action.type) {
        case MENU_TOGGLE:
            return {
                ...state, showMenu: action.showMenu
            }
        case MENU_CHANGE_LANGUAGE:
            return {
                ...state, language: action.language
            }

        default:
            return {
                ...state
            }
    }
}
