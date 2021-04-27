import {MENU_CHANGE_LANGUAGE, MENU_TOGGLE} from "./actionTypes";

export function toggleMenu(showMenu) {
    return {
        type: MENU_TOGGLE, showMenu: !showMenu
    }
}

export function changeLanguage(language) {
    return {
        type: MENU_CHANGE_LANGUAGE, language
    }
}