import React from "react";
import './HeaderTitle.css'
import getText from "../../../text/translation";
import {connect} from "react-redux";

const HeaderTitle = props => {
    return (
        <div className={'HeaderTitle'}>
            <h3>{getText().title}</h3>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        language: state.menu.language
    }
}

export default connect(mapStateToProps)(HeaderTitle)