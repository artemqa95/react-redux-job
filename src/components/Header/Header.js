import React from "react";
import './Header.css'
import HeaderTitle from "./HeaderTitle/HeaderTitle";
import HeaderLogo from "./HeaderLogo/HeaderLogo";
const Header = props => {
    return (
        <div className={'Header'}>
            <HeaderTitle title={props.title}/>
            <HeaderLogo logo={props.logo}/>
        </div>
    )
}
export default Header