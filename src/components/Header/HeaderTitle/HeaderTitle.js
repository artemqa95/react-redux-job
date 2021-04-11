import React from "react";
import './HeaderTitle.css'
const HeaderTitle = props => {
    return (
        <div className={'HeaderTitle'}>
            <h3>{props.title}</h3>
        </div>
    )
}
export default HeaderTitle