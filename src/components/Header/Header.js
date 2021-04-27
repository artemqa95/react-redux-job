import React from "react";
import './Header.css'
import HeaderTitle from "./HeaderTitle/HeaderTitle";
import HeaderLogo from "./HeaderMenu/HeaderMenu";
import HeaderDescription from "./HeaderDecription/HeaderDescription";
const Header = props => {
    return (
        <div className={'Header'}>
            <HeaderTitle/>
            <HeaderLogo/>
            <HeaderDescription/>
        </div>
    )
}
export default Header