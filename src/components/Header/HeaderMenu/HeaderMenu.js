import React from "react";
import './HeaderMenu.css'
import logoRu from '../../../logo/ru.png'
import logoEn from '../../../logo/en.png'
import HeaderMenuItem from "./HeaderMenuItem/HeaderMenuItem";
const HeaderMenu = props => {
    return (
        <div className={'HeaderMenu'}>
            <HeaderMenuItem src={logoRu} selector={'ru'}/>
            <HeaderMenuItem src={logoEn} selector={'en'}/>
        </div>
    )
}

export default HeaderMenu
