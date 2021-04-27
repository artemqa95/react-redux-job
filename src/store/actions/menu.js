import {MENU_TOGGLE} from "./actionTypes";

export function toggleMenu(showMenu) {
    return {
        type: MENU_TOGGLE, showMenu: !showMenu
    }
}