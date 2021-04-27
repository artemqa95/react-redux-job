import * as ruText from './ru/ru'
import * as engText from './eng/eng'
import store from "../redux/store/store";

function getText() {
    let text
    switch (store.getState().menu.language) {
        case 'ru':
            text = ruText
            break
        case 'en':
            text = engText
            break
        default:
            text = ruText
    }
    return text
}

export default getText

